/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

menuHorizontalModule.controller('horizontalMenuItemsCtrl',['ReadItemsFromJson','$scope',horizontalMenuItemsCtrl]);     
    function horizontalMenuItemsCtrl(ReadItemsFromJson,$scope){      
       ReadItemsFromJson.Items({itemsFile:'menu-horizontal'}).then(getItemsSuccess,getItemsError);   
       
       function getItemsSuccess(items){
           $scope.horizontalMenuItems = items;
           console.log($scope.horizontalMenuItems);
       }
       
       function getItemsError(reason){
           console.log(reason);
       }
    }  

menuHorizontalModule.controller('MenuRightCtrl',['$scope',MenuRightCtrl]);  
     function MenuRightCtrl($scope){
         var rightMenuItems = [
             {
                 "label":"facebook",
                 "href":"#"
             },
             {
                 "label":"twitter",
                 "href":"#"
             },
             {
                 "label":"google-plus",
                 "href":"#"
             },
             {
                 "label":"user",
                 "href":"#"
             }             
         ]   
       $scope.rightMenuItems = rightMenuItems;       
    }


menuHorizontalModule.controller('searchItemsCtrl',['ReadItemsFromJson','$scope',searchItemsCtrl]); 
    function searchItemsCtrl(ReadItemsFromJson,$scope){        
        var scope = $scope;
        
        $scope.displaySearchListOptions = function(){
            var searchedText  =  $scope.searchedText,
                textLength    =  searchedText.length,
                fileName      = 'search'+textLength;   
        
            if(textLength > 0){
                ReadItemsFromJson.Items({itemsFile:'menu-horizontal'}).then(getItemsSuccess,getItemsError);   

                function getItemsSuccess(items){                    
                    console.log(items);                    
                    scope.horizontalMenuItems  = items;                
                }

                function getItemsError(reason){
                    console.log(reason);
                }          
            }                 
        }             
                     
        $scope.searchAreaDisplayed = false;
        
        $scope.displaySearchArea = function(){
            $scope.searchAreaDisplayed = ($scope.searchAreaDisplayed === true) ? false : true;             
        }        
    }   


  

  /*searchContainer      =  $(".search-results"),
        searchWrapper        =  $(".search-wrapper"),
        searchResultsList    =  searchContainer.find(".search-results-list"),
        searchField          =  searchWrapper.find(".search-text"),
        submitSearch         =  searchWrapper.find("#submitSearch"),
        searchIcon           =  searchWrapper.find("#searchIcon"),

/*menuHorizontal.service('SearchItemsList',[
    '$resource',
     this.retrieveSearchItems = function($resource,textLength,text){
         return $resource('json/:itemsFile.json', {} ,{
             query:{
                 method: 'GET',
                 params:{itemsFile: 'search',textLength: textLength},
                 isArray:true
             }
         }); 
     }
]);*/

/*$.each(data,function(index){
            var info = data[index].info,            
                listOptions = "";
            
            listOptions += "<li class='list-item clearfix'><img alt='{imageTitle}' src='{src}' full_src='{full_src}' class='image-section'><span class='list-item-content'>{content}</span><span class='info' ></span></li>";
            var  src     = "resources/images/"+data[index].image, //asa va fi json
                 full_src     = "resources/images/"+data[index].large_image, 
                 content      =  data[index].description["text"],
                 info         =  data[index].info,                    
                 extra        =  data[index].description.extra;   
                             
            listOptions  =  listOptions.replace("{src}",src).replace("{imageTitle}",content).replace("{full_src}",full_src).replace("{info",info).replace("{content}",content);                 
            searchResultsList.append(listOptions);
            searchResultsList.find('li').last().data({extraInfo: extra});
            searchResultsList.find('li').last().data({moreInfo:info});
        }); 
        */