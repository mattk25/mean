window.app = angular.module('mean', ['ngCookies', 'ngResource', 'ui.bootstrap', 'ui.route', 'mean.system', 'mean.articles','mean.reference']);

angular.module('mean.system', ['ngRoute']);
angular.module('mean.articles', ['ngRoute']);
angular.module('mean.reference',['ngRoute']);