import React from "react";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";
import { lightModeTheme, darkModeTheme } from "../../config/themes";


const ProviderTheme = ({ children, theme }: any) => {

    const themeConditional = theme === 'lightMode' ? lightModeTheme : darkModeTheme

    return (
        <ThemeProvider theme={themeConditional}>
            {children}
        </ThemeProvider>
    )
}

const mapStateToProps = (state: any) => ({
    theme: state.themeReducer.theme
})

export default connect(mapStateToProps, null)(ProviderTheme)