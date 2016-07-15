/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

menuVerticalModule.controller('menuVerticalCtrl',
    [ 
        '$scope',
        'MenuItemsList',
        
        function($scope,MenuItemsList){       
           $scope.menuVerticalItems = MenuItemsList.query();            
           
            $scope.changeClass = function(){
                if($('.toggleable-container').hasClass("hidden")){
                    $('.toggleable-container').removeClass('hidden');
                }else{
                    $('.toggleable-container').addClass('hidden');
                }              
              
           }           
        }    
    ]                
); 

