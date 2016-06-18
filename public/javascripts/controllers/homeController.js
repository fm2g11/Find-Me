(function ( angular ) {
  var mod = angular.module( 'homeController', [] );

  mod.controller( 'HomeCtrl', function ( $scope, $log ) {

  	$scope.add = function(){
  		window.localStorage.setItem($scope.key, $scope.val);
  		$scope.get();
  	};

  	$scope.get = function(){
  		$scope.items = [];
  		for (var i = 0; i < window.localStorage.length; i++){
		  	$scope.items.push( {
		  		key: localStorage.key(i),
		  		val: localStorage.getItem(localStorage.key(i))
		  	});
		  }
  	}

  	$scope.get();
    
  } );

})( angular );