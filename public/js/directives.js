window.app.directive("zippy", function() {
    return {
        restrict:"E",
        scope:{
            title:"@"
        },
        transclude: true,
        template: '<div><h3 ng-click="toggleContent()">{{title}}</h3><div ng-show="isContentVisible" ng-transclude></div></div>',
        link: function (scope) {
            scope.isContentVisible=false;


    scope.toggleContent = function() {
        scope.isContentVisible = !scope.isContentVisible;
    };
}
};
})
window.app.directive("bmrating", function() {
    return {
        restrict: "E",
        scope:{
            ratingValue: '=',
            max: '=',
            readonly:'@',
            onRatingSelected: '&'
        },
        templateUrl: "../views/partials/rating.html",
        link: function(scope, elem, attrs) {

            var updateStars = function() {
                scope.stars = [];
                for (var i = 0; i < scope.max; i++) {
                    scope.stars.push({filled: i < scope.ratingValue});
                }
            }

            scope.toggle = function(index) {
                if(scope.readonly && scope.readonly ==='true') {
                    return;
                }
                scope.ratingValue = index+1;
                scope.onRatingSelected({rating: index+1});
            };

            scope.$watch('ratingValue', function(oldVal, newVal) {
                if(newVal) {
                    updateStars();
                }
            })

        }
    }
});
