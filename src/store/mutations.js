export default {
    toggleDark (state) {
        state.dark = !state.dark
    },
    changePage (state, newPage) {
        state.currentPage = newPage
    }
};