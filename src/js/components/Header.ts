export default () => ({
    open: false,

    openNavigation() {
        this.open = true;
        document.body.style.overflow = 'hidden';
    },

    closeNavigation() {
        this.open = false;
        document.body.style.overflow = '';
    },
});
