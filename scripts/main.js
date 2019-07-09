console.log("Require Js is working");
//configuration
require.config({
  paths: {
    'knockout': '../node_modules/knockout/build/output/knockout-latest.debug',
    'jquery': '../node_modules/jquery/dist/jquery.min'
  }
});

define(['jquery', 'knockout'], 
  function($, ko) {
    $(document).ready(function() {
     console.log("define working");
    });
})

