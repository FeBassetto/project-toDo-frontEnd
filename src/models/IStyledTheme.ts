import { CSSObject } from "styled-components"

export default interface IStyledTheme {
    theme: {
        headerBackground: CSSObject,
        headerColor: CSSObject,
        footerBackground: CSSObject,
        primaryBackground: CSSObject,
        primaryColor: CSSObject,
    }
}