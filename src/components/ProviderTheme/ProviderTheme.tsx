import React from "react";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";
import { lightModeTheme, darkModeTheme } from "../../config/themes";


const ProviderTheme = ({ children, lightMode }: any) => {

    const themeConditional = lightMode ? lightModeTheme : darkModeTheme

    return (
        <ThemeProvider theme={themeConditional}>
            {children}
        </ThemeProvider>
    )
}

const mapStateToProps = (state: any) => ({
    lightMode: state.themeReducer.lightMode
})

export default connect(mapStateToProps, null)(ProviderTheme)