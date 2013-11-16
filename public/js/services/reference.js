/**
 * Created by matt on 11/16/13.
 */
angular.module('mean.reference').factory("Reference", ['$resource', function($resource) {
    return $resource('reference/:referenceId', {
        articleId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);