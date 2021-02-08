/*global angular */
var app = angular.module('app', []);

app.controller("toDoCtrl", function ($scope) {
    "use strict";
    $scope.toDoList = [
    ];
    
    $scope.addTask = function (taskInfo) {
        $scope.toDoList.push({
        taskName: taskInfo.taskName,details: taskInfo.details, deadline: taskInfo.deadline 
        });      
    };
    
    $scope.removeRow = function(item) { 
        var index = $scope.toDoList.indexOf(item);
        $scope.toDoList.splice(index, 1);     
    };
});