angular.module('App').controller("CalendarCtrl", ["$scope", "$state", "$log", "$ionicNavBarDelegate", "$ionicModal", "$ionicPopup", "EventService", CalendarCtrl]);
function CalendarCtrl($scope, $state, $log, $ionicNavBarDelegate, $ionicModal, $ionicPopup, EventService) {

  var date = new Date();
  var d = date.getDate();
  var m = date.getMonth();
  var y = date.getFullYear();
  
  $scope.events = EventService.list();
  $scope.monthView = true;
  $scope.selectedDay = 'Nothing selected';
  
  $scope.goBack = function() {
    $ionicNavBarDelegate.back();
  };

  var createModal = function() {
  };  

  $scope.openModalNewEvent = function() {
    $scope.event = {};
    $scope.event.guid = EventService.generateUUID();
    $ionicModal.fromTemplateUrl('js/templates/modalEvent.html', {
      scope: $scope,
      animation: 'slide-in-up',
      focusFirstInput: true
    }).then(function(modal) {
      $scope.modalEvent = modal;
      $scope.modalEvent.show();
    });
  };
  
  $scope.closeModalEvent = function() {
    $scope.modalEvent.hide();
    $scope.events = EventService.list();
  };
  
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    if ($scope.modalEvent)
      $scope.modalEvent.remove();
  });
 
  /* event source that contains custom events on the scope */
  $scope.events = [
    {title: 'All Day Event',start: new Date(y, m, 1)},
    {title: 'Long Event',start: new Date(y, m, d - 5),end: new Date(y, m, d - 2)},
    {id: 999,title: 'Repeating Event',start: new Date(y, m, d - 3, 16, 0),allDay: false},
    {id: 999,title: 'Repeating Event',start: new Date(y, m, d + 4, 16, 0),allDay: false},
    {title: 'Birthday Party',start: new Date(y, m, d + 1, 19, 0),end: new Date(y, m, d + 1, 22, 30),allDay: false}
  ];
  
  //$scope.eventSources = [$scope.events];
  $scope.eventSources = [];
  
  /* alert on eventClick */
  $scope.dayClick = function( date, jsEvent, view ){
    console.log(date.format() + ' was clicked ');
    $scope.selectedDay = date.format();
    $('.calendar').find(".activeDay").removeClass("activeDay");
    $(this).addClass("activeDay");
    $scope.$$childTail.eventCalendar.fullCalendar( 'gotoDate', date )
  }; 

  $scope.renderDay = function(date, cell) {
    if (date.date()===10){
      cell.css("background-color", "red");
    }
  };

  $scope.resizeCalendar = function(view, element) {
    if(view.name === 'agendaWeek' || view.name === 'agendaDay') {
        // if height is too big for these views, then scrollbars will be hidden
        view.setHeight(9999);
        $scope.monthView = false;
        $scope.eventSources = [$scope.events];
    }
    else {
      $scope.monthView = true;
      $scope.eventSources = [];
    }
  };

  /* calendar config object */
  $scope.uiConfig = {
    calendar:{
      //height: 200,
      //contentHeight: 'auto',
			//height: 'auto',
      firstDay: 1,
      editable: true,
      header:{
        left: '',
        center: 'title',
        right: 'today'
      },
      dayClick: $scope.dayClick,
      dayRender: $scope.renderDay,
      viewRender: $scope.resizeCalendar
    }
  };
  
  $scope.next = function() {
    try {
      $scope.$$childTail.eventCalendar.fullCalendar('next');
    }
    catch (err) {
      console.log(err.message);
    }
  };
  
  $scope.previous = function() {
    try {
      $scope.$$childTail.eventCalendar.fullCalendar('prev');
    }
    catch (err) {
      console.log(err.message);
    }
  };
  
  /* Change View */
  $scope.changeView = function(view,calendar) {
    $scope.$$childTail.eventCalendar.fullCalendar('changeView',view);
  };
  
}