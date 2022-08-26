export const loadingTypes = {
    SET_LOADING: 'loading/SET_LOADING'
}

export const loadingActions = {
    setloading: (loading:Boolean) => ({
        type: loadingTypes.SET_LOADING,
        payload: loading
    })
}