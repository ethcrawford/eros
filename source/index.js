// index.js [entry point]

/**
 * This is the entry point to the application.
 * No scripts! Import only.
 */

/**
 * normalize.css
 * Enable if you are using Normalize CSS from node_modules.
 * But not together with Bootstrap.
 * Is disabled by default
 */
// import 'normalize.css';

/**
 * bootstrap.js
 * Enable if you are using Bootstrap from node_modules.
 * Is disabled by default
 */
// import 'bootstrap';

/**
 * main.styl
 * Import all application styles.
 * Is enabled by default
 */



import '../lib/_reboot.styl';
import '../lib/_visually-hidden.styl';
import '../lib/_flex-grid-framework.styl';


// import './styl/_google-fonts.styl'
// import './styl/_font-awesome-brands.styl';
// import './styl/_font-awesome-regular.styl';
// import './styl/_font-awesome-solid.styl';
// import './styl/_font-awesome.styl';


import './main.styl';
import './components/page-header.styl';
import './components/main-nav.styl';
import './components/section-1.styl';
import './components/main-logo.styl';
import './components/section-2.styl';
import './components/section-2-block.styl';
import './components/section-3.styl';
import './components/section-4.styl';
import './components/section-5.styl';
import './components/section-6.styl';
import './components/page-footer.styl';
import './components/social.styl';

// Import all application scripts.
import './pages/index/index.js';

/**
 * Tracking.
 * Disable after debugging.
 * Is enabled by default
 */
console.log('initialized [in entry point]');
