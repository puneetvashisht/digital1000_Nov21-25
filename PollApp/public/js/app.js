		var app = angular.module('myApp', ['ngRoute']);
		
		app.config(function($routeProvider){
			$routeProvider.when('/polls',{
//				template: "List of all the polls"
				templateUrl: "./partials/pollList.html",
				controller: "polls"
			}).when('/pollItem',{
//				template: "Poll Item"
				templateUrl: "./partials/pollItem.html",
				controller: "pollItem"
			}).when('/newPoll',{
//				template: "Create a new Poll here"
				templateUrl: "./partials/newPoll.html",
				controller: 'newPoll'
			}).otherwise({
				redirectTo: "/polls"
			})
		});

		app.service('PollService', function(){
			return {
				ques: '',
				choices: [
					{choice: ''},
					{choice: ''}
				]
			}
		})
		
		app.controller('polls', function($scope, $http, PollService, $location){
//			console.log('hit db and get polls');
			$scope.pollService = PollService;
			$http({
					method: 'get',
					url: '/polls'
				})
				.success(function(data){
					console.log(data);
					if(data.success){
						$scope.polls = data.polls;
					}
				})
				.error(function(xhr, status, error){
					console.log(status)
				})
			
			$scope.openPoll = function(poll){
				console.log(poll);
				for(var key in poll){
//					console.log(key + ":" + poll[key])
					$scope.pollService[key] = poll[key];
				}
//				$scope.pollService = poll;
				$location.path("/pollItem")
			}
		})
		app.controller('newPoll', function($scope, $http){
			$scope.poll = {
				ques: '',
				choices: [
					{choice: ''},
					{choice: ''}
				]
			}
			$scope.addChoice = function(){
				$scope.poll.choices.push({choice: ''});
			}
			$scope.createPoll = function(){
//				console.log($scope.poll);
				$http({
					method: 'post',
					url: '/createPoll',
					data: $scope.poll
				})
				.success(function(data){
					console.log(data);
					if(data.success){
						$scope.poll = {
							ques: '',
							choices: [
								{choice: ''},
								{choice: ''}
							]
						}
					}
				})
				.error(function(xhr, status, error){
					console.log(status)
				})
			}
		})

		app.controller('pollItem', function($scope, PollService, $http){
			$scope.pollService = PollService;
			$scope.selectedChoice = function(choice){
				console.log(choice);
				$scope.selectedAns = choice.choice;
			}
			console.log($scope.pollService)
		})