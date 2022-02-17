import { apiHelper } from "./apiHelper"
import { APP_NAME } from "./constants";
const klipApiRoot = 'https://a2a-api.klipwallet.com/'
const klipApiQRRoot = 'https://klipwallet.com/'
export enum KlipApiType {
    PREPARE = 1,
    REQUEST = 2,
    RESULT = 3,
    GET_CARD_INFO = 4,
}
const klipApiUrl = (type) => {
    switch(type){
        case KlipApiType.PREPARE:
            return () => {
                return klipApiRoot + 'v2/a2a/prepare'
            };
        case KlipApiType.REQUEST:
            return (param) => {
                return  klipApiQRRoot + '?target=/a2a?request_key=' + param
            };
        case KlipApiType.RESULT:
            return (param) => {
                return klipApiRoot + 'v2/a2a/result?request_key=' + param
            };
        case KlipApiType.GET_CARD_INFO:
            return (param) => {
                return klipApiRoot + 'v2/a2a/cards?cursor=' + param
            };
    }
    return (param) => {
        return new Error('klipApiUrl: invalid api type')
    }
}

export const klipPrepare = (bapp, type, transaction = null) => {
    const url = klipApiUrl(KlipApiType.PREPARE)
    const body = {
        bapp,
        type,
        transaction
    }
    return apiHelper(url(null), 'POST', body)
}

export const klipPrepareAuth = async () => {
    const bapp = {
        name: APP_NAME,
    }
    const type = 'auth'
    return await klipPrepare(bapp, type)
}

export const klipRequestQRUrl = (requestKey) => {
    const url = klipApiUrl(KlipApiType.REQUEST)
    return url(requestKey)
}
export const klipResultAuth = async (requestKey) => {
    const url = klipApiUrl(KlipApiType.RESULT)
    return await apiHelper(url(requestKey))
}