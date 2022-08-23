import { createGlobalStyle } from "styled-components";

//fonts
import latoBlack from '../assets/fonts/Lato-Black.ttf'
import latoBold from '../assets/fonts/Lato-Bold.ttf'
import latoLight from '../assets/fonts/Lato-Light.ttf'
import latoRegular from '../assets/fonts/Lato-Regular.ttf'
import latoThin from '../assets/fonts/Lato-Thin.ttf'
import latoThinItalic from '../assets/fonts/Lato-ThinItalic.ttf'

export const GlobalStyle = createGlobalStyle`
    @font-face{
        font-family: "LatoBlack";
        src: url(${latoBlack});
    }

    @font-face{
        font-family: "LatoBold";
        src: url(${latoBold});
    }

    @font-face{
        font-family: "LatoLight";
        src: url(${latoLight});
    }

    @font-face{
        font-family: "LatoRegular";
        src: url(${latoRegular});
    }

    @font-face{
        font-family: "LatoThin";
        src: url(${latoThin});
    }

    @font-face{
        font-family: "LatoThinItalic";
        src: url(${latoThinItalic});
    }
`

//Themes
export const darkModeTheme = {
    headerBackground: '#161B22',
    headerColor: '#BABBBD',
    footerBackground: '#19222f'
}

export const lightModeTheme = {
    headerBackground: '#000000',
    headerColor: '#ffffff',
    footerBackground: '#414141'
}