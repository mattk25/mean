/**
 * Created by matt on 11/16/13.
 */
angular.module('mean.reference').controller('RefCtrl', ['$scope', 'Global', 'Reference', function ($scope, Global, Reference) {
    $scope.global = Global;

    $scope.rating = 5;
    $scope.saveRatingToServer = function(rating) {
        console.log('Rating selected - ' + rating);
    }

    $scope.types = [{
            name: 'one',
            type: 'test'
        },
        {
            name: 'two',
            type: 'test'
        },
        {
            name: 'three',
            type: 'test'
        }];


    $scope.create = function() {
        var ref = new Reference({
            title: this.title,
            url: this.url,
            type: this.type,
            text: this.text,
            vote: this.vote,
            rating: this.rating

        })



    }

}]);