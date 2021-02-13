define(['dojo/_base/declare', 'jimu/BaseWidget'],
function(declare, BaseWidget) {
  //To create a widget, you need to derive from BaseWidget.
  return declare([BaseWidget], {

    // YOUR CODE goes here

    startup: function() {
        console.log("startup function called")
        this.map.setZoom(8);
    }
    
  });
});