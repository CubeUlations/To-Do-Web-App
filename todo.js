/**
 * Created by RM on 5/2/2016.
 */

function TodoCtrl($scope){

    $scope.todos = [{text:'Learn AngularJS', done:false}, {text: 'Build an app', done:false}];

    $scope.getTotalTodos = function(){
        return $scope.todos.length;
    };

    $scope.addTodo = function(){
        $scope.todos.push({text:$scope.formTodoText, done:false});
        $scope.formTodoText = "";
    };

    $scope.subtract = function(todo){
        var i = $scope.todos.indexOf(todo);
        $scope.todos.splice(i,1);
    };
}
