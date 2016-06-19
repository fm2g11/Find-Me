(function ( angular ) {
  var mod = angular.module( 'parserFactory', [] );

  mod.factory( 'ParserFactory', function () {
  	var pattern = new RegExp("(http(s)?:\/\/[^ \n]+)", 'ig');
    return {
      parse: function(text) {
        return text.replace(pattern, '<a href="$1" target="_blank">$1</a>')
        					 .replace(/\n/g, '<br />');
      }
    };
  });

})( angular );