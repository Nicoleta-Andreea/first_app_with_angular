/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var app = angular.module('menu-vertical-list',[]);

app.service('retrieveMenuItems',[
         '$resource',           
          this.menuItems = function($resource) {
              return $resource('resources/files/:itemsFile.json', {}, {
                query: {
                  method: 'GET',
                  params: {itemsFile: 'menu-vertical-items'},
                  isArray: true
                }
              });
          }
]);        



