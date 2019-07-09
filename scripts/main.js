console.log("Require Js is working");
//configuration
require.config({
  paths: {
    'knockout': '../node_modules/knockout/build/output/knockout-latest.debug',
    'jquery': '../node_modules/jquery/dist/jquery.min',
    'req-txt':'../node_modules/requirejs-text/text'
  }
});

define(['jquery', 'knockout','req-txt'], 
  function($, ko,txt) {
    $(document).ready(function() {
     console.log("define working");
    });
})

