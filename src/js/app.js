/**
 * Alpine configuration
**/
import Alpine from 'alpinejs'

// Alpine Plugins
import focus from '@alpinejs/focus'
Alpine.plugin(focus)

// Alpine components
import Header from './components/Header';

Alpine.data('Header', Header);

// Alpine start
Alpine.start();

/**
 * Accept HMR as per: https://vitejs.dev/guide/api-hmr.html
**/
if (import.meta.hot) {
    import.meta.hot.accept(() => {
        console.log("HMR")
    });
}
