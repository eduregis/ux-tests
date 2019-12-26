export default {
    getProjectByPath: (state) => (path) => {
    return state.projectCards.find(project => project.path === path)
    }
};