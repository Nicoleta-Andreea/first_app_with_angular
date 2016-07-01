/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('menu-vertical-list').
  component('menu-vertical-list', {
    templateUrl:'menu-vertical-list/menu-vertical-list.template.html',
    controller: ['retrieveMenuItems',
      function menuVerticalListController(retrieveMenuItems,$scope) {
            $scope.verticalMenuItems =  retrieveMenuItems.query();
      }
    ]
  });

