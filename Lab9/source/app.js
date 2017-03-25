'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [])


    .controller('ViewCtrl', function ($scope, $http) {
        $scope.tagList = new Array();
        $scope.getTags = function () {
            /*var placeEntered = document.getElementById("txt_placeName").value;
            var searchQuery = document.getElementById("txt_searchFilter").value;
            if (placeEntered != null && placeEntered != "" && searchQuery != null && searchQuery != "") {
                document.getElementById('div_ReviewList').style.display = 'none';
                //This is the API that gives the list of venues based on the place and search query.*/
                var handler = $http.get("http://127.0.0.1:8081/getplace");
                handler.success(function (data)
                {console.log(data);

                    if (data != null && data.tags != null) {
                        console.log(data.tags);
                        for (var i = 0; i < data.tags.length; i++) {
                            $scope.tagList[i] = {
                                "tag": data.tags.tag[i]

                            };
                        }
                    }

                })
                handler.error(function (data) {
                    alert("There was some error processing your request. Please try after some time.");
                });
            }
    });

       /* $scope.getReviews = function (venueSelected) {
            if (venueSelected != null) {
                //This is the API call being made to get the reviews(tips) for the selected place or venue.
                var handler = $http.get("https://api.foursquare.com/v2/venues/" + venueSelected.id + "/tips" +
                    "?sort=recent" +
                    "&client_id=Q0ENF1YHFTNPJ31DCF13ALLENJW0P5MTH13T1SA0ZP1MUOCI" +
                    "&client_secret=ZH4CRZNEWBNTALAE3INIB5XG0QI12R4DT5HKAJLWKYE1LHOG&v=20160215" +
                    "&limit=5");
                handler.success(function (result) {
					console.log(result);
                    if (result != null && result.response != null && result.response.tips != null &&
                        result.response.tips.items != null && result.response.tips.count != 0) {
                        $scope.showt=true;
                        $scope.shows=false;
                        $scope.mostRecentReview = result.response.tips.items[0];
						console.log($scope.mostRecentReview);
                        //This is the Alchemy API for getting the sentiment of the most recent review for a place.
                        var callback = $http.get("http://gateway-a.watsonplatform.net/calls/text/TextGetTextSentiment" +
                            "?apikey=d0e7bf68cdda677938e6c186eaf2b755ef737cd8" +
                            "&outputMode=json&text=" + $scope.mostRecentReview.text);
                        callback.success(function (data) {
                            if(data!=null && data.docSentiment!=null)
                            {
                                $scope.ReviewWithSentiment = {"reviewText" : $scope.mostRecentReview.text,
                                                            "sentiment":data.docSentiment.type,
                                                             "score":data.docSentiment.score  };
                                document.getElementById('div_ReviewList').style.display = 'block';
                            }
                        })
                    }
					else
					{
						$scope.showt=false;
                        $scope.shows=true;
                        $scope.noText="No review";
					}
                })
                handler.error(function (result) {
                    alert("There was some error processing your request. Please try after some time.")
                })
            }

        }

    });*/
