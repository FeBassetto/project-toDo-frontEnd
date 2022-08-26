import ITheme from "../../models/states/IStateTheme"

export const Types = {
    CHANGE_THEME: 'theme/CHANGE_THEME'
}

export const themeActions = {
    changeTheme: (lightMode: ITheme) => ({
        type: Types.CHANGE_THEME,
        payload: {
            lightMode
        }
    })
}