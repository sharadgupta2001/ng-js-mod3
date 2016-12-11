

(function () {
'use strict';

angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService);

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
    var controller = this;
    controller.searchText = "";

    controller.searchMenu = function() {
      console.log('Search text', controller.searchText);
    }
};

function MenuSearchService() {

}

})();
