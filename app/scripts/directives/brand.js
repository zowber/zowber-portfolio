'use strict';

/**
 * @ngdoc directive
 * @name zowberApp.directive:brand
 * @description
 * # brand
 */
angular.module('zowberApp')
  .directive('brand', function () {
    return {
      templateUrl: 'views/partials/brand.html',
      restrict: 'E'
    };
  });
