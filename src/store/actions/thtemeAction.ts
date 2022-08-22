import ITheme from "../../models/ITheme"

export const Types = {
    CHANGE_COLOR: 'theme/CHANGE_COLOR'
}

export const themeAction = {
    changeColor: (color: ITheme) => ({
        type: Types.CHANGE_COLOR,
        payload: {
            color
        }
    })
}