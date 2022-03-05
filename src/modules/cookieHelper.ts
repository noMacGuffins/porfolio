export const setNextLocaleCookie = (locale: string) => {
    if(typeof document != 'undefined'){
        document.cookie = `NEXT_LOCALE=${locale}`
    }
}