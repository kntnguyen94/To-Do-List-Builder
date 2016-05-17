/*global angular */
var app = angular.module('app', []);

app.controller("toDoCtrl", function ($scope) {
    "use strict";
    $scope.toDoList = [
        {taskName: "Dishes", deadline: "March 1"},
        {taskName: "Laundry", deadline: "April 2"}
    ];
    
    $scope.addTask = function (taskInfo) {
        $scope.toDoList.push({
        taskName: taskInfo.taskName, deadline: taskInfo.deadline 
        });      
    };
    
    $scope.removeRow = function(item) { 
        var index = $scope.toDoList.indexOf(item);
        $scope.toDoList.splice(index, 1);     
    };
});