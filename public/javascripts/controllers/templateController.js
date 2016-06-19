(function ( angular ) {
  var mod = angular.module( 'templateController', [] );

  mod.controller( 'TemplateCtrl', function ( $scope, $log, $location ) {
    $log.log( 'TemplateCtrl invoked' );

    $scope.isActive = function (viewLocation) { 
      return viewLocation === $location.path();
    };
  
  } );

})( angular );

