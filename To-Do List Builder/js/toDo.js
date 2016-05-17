/*global angular */
var app = angular.module('app', []);

app.controller("toDoCtrl", function ($scope) {
    "use strict";
    $scope.toDoList = [
        {taskName: "Dishes",details: "CLEAN THEM", deadline: "03/01/2017 at 5:00AM"},
        {taskName: "Laundry",details: "DRY THEM", deadline: "04/09/2017 at 7:00PM"}
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