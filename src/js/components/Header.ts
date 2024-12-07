export default () => ({
    open: false,

    openNavigation() {
        this.open = true;
    },

    closeNavigation() {
        this.open = false;
    },
});
