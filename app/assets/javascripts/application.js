// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require jquery.ui.all
//= require twitter/bootstrap
//= require_tree .


$(document).ready(function() {
  $('.datepicker').datepicker()
  
  // Modal Link helper, just use .modal_link !
  var $modal = $('#ajax-modal');

  $('body').on('click', 'a.modal_link', function(e) {
    e.preventDefault();
    var a = $(this)[0];
    var url
    if ( (a.search + "") == "") {
      url = a.href + "?layout=false"
    } else {
      url = a.href + "&layout=false"
    }


    $modal.html('')
    $modal.load(url, '', function() {
      $modal.find('.datepicker').datepicker({ dateFormat: 'mm/dd/yy'});
      $modal.modal();
    });
  });
})
