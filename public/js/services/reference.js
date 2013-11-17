/**
 * Created by matt on 11/16/13.
 */
angular.module('mean.reference').factory("Reference", ['$resource', function($resource) {
    return $resource('references/:referenceId', {
        referenceId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);