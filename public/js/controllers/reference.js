/**
 * Created by matt on 11/16/13.
 */
angular.module('mean.reference').controller('RefCtrl', ['$scope', 'Global', '$routeParams','$location','Reference', function ($scope, Global,$routeParams, $location, Reference) {
    $scope.global = Global;

    $scope.rating = 5;
    $scope.selectedType = "";

    $scope.saveRatingToServer = function(rating) {
        console.log('Rating selected - ' + rating);
    };

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
            type: this.selectedType,
            text: this.text,
            vote: this.vote,
            rating: this.rating
        })
        console.log(ref)
        ref.$save(function(response) {
            $location.path("references/" + response._id);
            console.log(response);
        });

        this.title = "";
        this.url = "";
        this.type = "";
        this.text = "";
        this.vote = "";
        this.rating = "";
    };

    $scope.findOne = function() {
        Reference.get({
            referenceId: $routeParams.referenceId
        }, function(reference) {
            $scope.reference = reference;
        });
    };

}]);

