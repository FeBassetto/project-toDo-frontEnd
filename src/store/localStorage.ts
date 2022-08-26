export const loadState = () => {
    try {
        const localStorageState = localStorage.getItem('userReducer')
        if (localStorageState === null) {
            return undefined
        }
        return JSON.parse(localStorageState)
    } catch (err) {
        console.log('Nao foi possivel recuperar o estado', err)
        return undefined
    }
}

export const saveState = (state: any) => {
    try {
        const localStorageState = JSON.stringify(state)
        localStorage.setItem('userReducer', localStorageState)
    } catch (err) {
        console.log('Nao foi possivel salvar o estado', err);
    }
}