$(document).ready(function() {

  var controller = new ScrollMagic.Controller();
  var scene = new ScrollMagic.Scene({
    triggerElement : '.aboutcards'
  })
  .setClassToggle('.aboutcards','fade-in')
  .addTo(controller);

});
