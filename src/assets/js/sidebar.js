/* global bootstrap: false */
(function () {
  'use strict'
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
    new bootstrap.Tooltip(tooltipTriggerEl)
  })
})()

$(document).ready(function () {

  // $('#sidebarCollapse').on('click', function () {
  //   $('.sidebar').toggleClass('active');
  //   $('.fab').toggleClass('active');
  // });

  // $('#sidebarCitasOptionsCollapse').on({
  //   mouseenter: function () {
  //     //stuff to do on mouseover
  //     $('.sidebar-options').toggleClass('active');
  //     // $('.fab').toggleClass('active');
  //     console.log('onhover')
  //   },
  //   mouseleave: function () {
  //     //stuff to do on mouseleave
  //   }
  // });

  // $("#side").hover(function(){
  //   $(this).css("background-color", "yellow");
  //   console.log('hover');
  //   }, function(){
  //   $(this).css("background-color", "pink");
  // });

  function mostrarOcultar() {

  }

});
