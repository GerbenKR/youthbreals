<?php

use craft\helpers\App;

return [
    'useDevServer' => App::env('ENVIRONMENT') === 'dev' || App::env('CRAFT_ENVIRONMENT') === 'dev',
    'manifestPath' => '@webroot/dist/.vite/manifest.json',
    'devServerPublic' => 'http://localhost:3000',
    'serverPublic' => App::env('PRIMARY_SITE_URL') . '/dist/', 
    'errorEntry' => 'src/js/app.js',
    'cacheKeySuffix' => '',
    'devServerInternal' => 'http://localhost:3000',
    'checkDevServer' => true,
    'includeReactRefreshShim' => false,
    'includeModulePreloadShim' => true
];
