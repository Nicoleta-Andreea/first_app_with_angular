/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var menuVerticalModule = angular.module('menu-vertical',['ngResource','ui.router']);

menuVerticalModule.service('MenuItemsList',[
    '$resource',           
     this.retrieveMenuItems = function($resource) {
         return $resource('json/:itemsFile.json', {}, {
           query: {
             method: 'GET',
             params: {itemsFile: 'menu-vertical'},
             isArray: true
           }
         });
     }
]);




