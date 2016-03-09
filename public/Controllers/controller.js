var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope,$http)
{

var refresh=function(){
$http.get('/contactlist').success(function(response){

	console.log("in m new controler now");
	$scope.contactlist=response;
	$scope.contact="";
});
};

refresh();
$scope.addcontact=function()
{
console.log($scope.contact);
$http.post('/contactlist',$scope.contact).success(function(response)

{

	console.log(response);
	refresh();
});

};

});