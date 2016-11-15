(function(module) {
try {
  module = angular.module('TicTacToe');
} catch (e) {
  module = angular.module('TicTacToe', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/views/grid.html',
    '<div class="row" id="board" ng-show="displayBoard" ng-init="initialize()">\n' +
    '  <div class="container-fluid grid">\n' +
    '    <div class="row" id="row1">\n' +
    '      <div data-row="0" data-column="0" class="col-sm-4 cell" ng-click="cellClick($event)"></div>\n' +
    '      <div data-row="0" data-column="1" class="col-sm-4 cell" ng-click="cellClick($event)"></div>\n' +
    '      <div data-row="0" data-column="2" class="col-sm-4 cell" ng-click="cellClick($event)"></div>\n' +
    '    </div>\n' +
    '    <div class="row">\n' +
    '      <div data-row="1" data-column="0" class="col-sm-4 cell" ng-click="cellClick($event)"></div>\n' +
    '      <div data-row="1" data-column="1" class="col-sm-4 cell" ng-click="cellClick($event)"></div>\n' +
    '      <div data-row="1" data-column="2" class="col-sm-4 cell" ng-click="cellClick($event)"></div>\n' +
    '    </div>\n' +
    '    <div class="row">\n' +
    '      <div data-row="2" data-column="0" class="col-sm-4 cell" ng-click="cellClick($event)"></div>\n' +
    '      <div data-row="2" data-column="1" class="col-sm-4 cell" ng-click="cellClick($event)"></div>\n' +
    '      <div data-row="2" data-column="2" class="col-sm-4 cell" ng-click="cellClick($event)"></div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('TicTacToe');
} catch (e) {
  module = angular.module('TicTacToe', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/views/no_winner.html',
    '<div class="modal-content">\n' +
    '  <div class="modal-header text-center">\n' +
    '    <button type="button" class="close" ng-click="close()">&times;</button>\n' +
    '    <h4 class-"modal-title">It\'s a Draw!</h4>\n' +
    '  </div>\n' +
    '  <div class="modal-body text-center">\n' +
    '    <p>Looks like no one won.<br><br> ¯\\_(ツ)_/¯<br><br>You should try again.</p>\n' +
    '  </div>\n' +
    '  <div class="modal-footer">\n' +
    '    <button type="button" class="btn btn-default center-block" ng-click="playAgain()">Play Again?</button>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('TicTacToe');
} catch (e) {
  module = angular.module('TicTacToe', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/views/winner_popup.html',
    '<div class="modal-content">\n' +
    '  <div class="modal-header text-center">\n' +
    '    <button type="button" class="close" ng-click="close()">&times;</button>\n' +
    '    <h4 class-"modal-title">Congratulations!</h4>\n' +
    '  </div>\n' +
    '  <div class="modal-body text-center">\n' +
    '    <p>Player {{winner()}} Wins!</p>\n' +
    '  </div>\n' +
    '  <div class="modal-footer">\n' +
    '    <button type="button" class="btn btn-default center-block" ng-click="playAgain()">Play Again?</button>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);
})();
