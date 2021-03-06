import angular from 'angular';

// Necessary CSS files from vendors
import 'angular/angular-csp.css';
import 'angular-material/angular-material.css';
import 'mdi/css/materialdesignicons.css';
import 'angular-loading-bar/build/loading-bar.css';
import 'angular-rating-icons/dist/angular-rating-icons.min.css';
import 'font-awesome/css/font-awesome.min.css';

// Main SCSS file for application
import './index.scss';

// Application modules
import core from './core/core.module';
import dependencies from './dependencies/dependencies.module';
import filters from './filters/filters.module';
import layout from './layout/layout.module';
import modules from './modules/modules.module';
import resources from './resources/resource.module';
import services from './services/services.module';

import appConfiguration from './app.config';
import appTheme from './app.theme';

const app = angular.module('app', [
  dependencies,
  core,
  layout,
  filters,
  modules,
  resources,
  services,
  'ngMaterial',
]);

appConfiguration(app);
appTheme(app);

angular.bootstrap(document.documentElement, ['app']);
