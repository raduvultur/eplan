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
    eplanDB.insertOrUpdate('events',
      {guid: event.guid},
      {guid: event.guid, name: event.name, date: eventdate, time: eventtime, location: event.location, details: event.details, background: event.background}
    );
    eplanDB.commit();
  };
    
  EventService.list = function() {
    var events = eplanDB.queryAll('events', { sort: [['date', 'DESC'], ['name', 'ASC']] });
    
    var index;
    var len = events.length;
    for (index = 0; index < len; ++index) {
      event = events[index];
      event.time = JSON.parse(event.time);
      event.date = JSON.parse(event.date);
      //console.log(events[index]);
    }
    
    return events;
  };
  
  EventService.suppliers = function(eventGuid) {
    var suppIDs = eplanDB.queryAll("eventSuppliers", { query: {"guidevent": eventGuid} });
    
    var eventSuppliers = [];
    
    var index;
    var len = suppIDs.length;
    for (index = 0; index < len; ++index) {
      var supplier = eplanDB.query("suppliers", {ID: suppIDs[index].idsupplier})[0];
      eventSuppliers.push(supplier);
    }
    
    return eventSuppliers;
  }
  
  EventService.addSupplier = function(eventGuid, idsupplier) {
    console.log('adding eventguid=' + eventGuid + ' idsupplier=' + idsupplier);
    
    //check if supplier already added to the event - prevent duplicate suppliers  
    var supplierExists = eplanDB.queryAll("eventSuppliers", { query: {"guidevent": eventGuid, "idsupplier": JSON.stringify(idsupplier)} });
    if (supplierExists.length<1) {
      eplanDB.insert("eventSuppliers", {guidevent: eventGuid, idsupplier: idsupplier});
      eplanDB.commit();
    }
  }
  
  EventService.removeSupplier = function(eventGuid, idsupplier) {
    console.log('deleting eventguid=' + eventGuid + ' idsupplier=' + idsupplier);
    eplanDB.deleteRows("eventSuppliers", {guidevent: eventGuid, idsupplier: idsupplier});
    eplanDB.commit();
  }
  
  return EventService;
}
angular.module('App').factory('EventService', EventService);