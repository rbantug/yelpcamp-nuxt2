export const state = () => ({
    errorMsg: '',
    errorIsVisible: null,
})

export const mutations = {
    addErrorMessage(state, {value}) {
        state.errorMsg = value
    },
    showErrorPopup(state, {value}) {
        state.errorIsVisible = value
    }
}

export const actions = {}

export const getters = {}