/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

calendarModule.directive('calendar',function(){
     return{
         restrict:'E',
         templateUrl:'modules/calendar/view/calendar.template.html',
         replace:true         
     };
});

