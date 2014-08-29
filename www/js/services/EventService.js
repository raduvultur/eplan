function EventService () {
  var EventService = {};
  
  EventService.generateUUID = function (){
      var d = new Date().getTime();
      var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = (d + Math.random()*16)%16 | 0;
          d = Math.floor(d/16);
          return (c=='x' ? r : (r&0x7|0x8)).toString(16);
      });
      return uuid;
  }
  
  // Initialise. If the database doesn't exist, it is created
  var eplanDB = new localStorageDB('eplan', localStorage);
  
  EventService.deleteEvent = function(eventId) {
    eplanDB.deleteRows("events", {ID: eventId});
    eplanDB.commit();
  };
  
  EventService.getEvent = function(eventId) {
    var event = eplanDB.query("events", {ID: eventId})[0];
    event.time = JSON.parse(event.time);
    event.date = JSON.parse(event.date);
    return event;
  };

  EventService.saveEvent = function(event) {
    var eventtime = JSON.stringify(event.time);
    var eventdate = JSON.stringify(event.date);
    if (!event.background || event.background === ''){
      event.background = 'event.jpg';
    }
    eplanDB.insertOrUpdate('events',
      {guid: event.guid},
      {guid: event.guid, name: event.name, date: eventdate, time: eventtime, location: event.location, details: event.details, background: event.background}
    );
    eplanDB.commit();
  };
    
  EventService.list = function() {
    return eplanDB.queryAll('events', { sort: [['date', 'DESC'], ['name', 'ASC']] });
  };
  
  return EventService;
}
angular.module('App').factory('EventService', EventService);