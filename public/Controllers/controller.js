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

$scope.addcontact1=function()
{
console.log($scope.contact);
$http.post('/Detail',$scope.contact).success(function(response)

{

	console.log(response);
	refresh1();
});

};

$scope.addcontact2=function()
{
console.log($scope.Notes);
$scope.Notes.Date=new Date();

$http.post('/Notes',$scope.Notes).success(function(response)
{

	console.log(response);
	refresh1();
});

};




});