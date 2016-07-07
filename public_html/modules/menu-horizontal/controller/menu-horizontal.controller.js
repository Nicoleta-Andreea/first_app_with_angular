/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

menuHorizontalModule.controller('horizontalMenuItemsCtrl',[
    'HorizontalMenuItemsList', 
    '$scope',
    
    function(HorizontalMenuItemsList,$scope){
        $scope.horizontalMenuItems = HorizontalMenuItemsList.query();
    }
]);

menuHorizontalModule.controller('searchItemsCtrl',[
    'SearchItemsList',
    '$scope',
    
    function constructSearchItemsList(SearchItemsList,$scope){
        var textLength  =  $scope.textLength,
            text        =  $scope.text,
            fileName    =  "search"+textLength,
            params      =  {'itemsFile':fileName, 'text':text};
        
            $scope.searchListOption = SearchItemsList.query(params); 
           
    }
]);


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