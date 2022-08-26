import IStateWarning from "../../models/states/IStateWarning";

export const warningTypes = {
    SET_WARNING: 'warning/SET_WARNING'
}

export const warningActions = {
    setWarning: (warning: IStateWarning) => ({
        type: warningTypes.SET_WARNING,
        payload: {
            warning
        }
    })
}