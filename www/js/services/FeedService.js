google.load("feeds", "1");

function FeedService ($q, $rootScope) {
  var FeedService = {};
  
  FeedService.get = function(url) {
	var d = $q.defer();
	var feed = new google.feeds.Feed(url);
	feed.setNumEntries(10);
	feed.load(function(result) {
		$rootScope.$apply(d.resolve(result));
	});
	return d.promise;
  };

  return FeedService;
}

angular.module('App').factory('FeedService', ['$q', '$rootScope', FeedService]);