import Router from "next/router"
import { setNextLocaleCookie } from "./cookieHelper"

export const LOCALES = {
    KO: 'ko',
    EN: 'en',
}

export const moveTo = (url: string) => {
    Router.push(url)
}

export const moveToWithLocale = (url: string, locale: string) => {
    setNextLocaleCookie(locale)
    Router.push(url, url, {locale})
}

export const reloadWithLocale = (locale: string) => {
    setNextLocaleCookie(locale)
    Router.push(Router.pathname, Router.pathname, {locale})
}