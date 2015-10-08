$(document).ready(function() {

  // turn on auto play when reveal anchor clicked
  // using Foundation's reveal callbacks
  $(document).on('open.fndtn.reveal', '[data-reveal]', function () {
    var modal = $(this);
    var iframe = modal.find('iframe');
    var url = iframe.attr('src');
    url = url.replace('autoplay=0', 'autoplay=1');
    iframe.attr('src', url);
  });

  // $(document).on('opened.fndtn.reveal', '[data-reveal]', function () {
  //   var modal = $(this);
  // });

  $(document).on('close.fndtn.reveal', '[data-reveal]', function () {
    var modal = $(this);
    var iframe = modal.find('iframe');
    var url = iframe.attr('src');
    url = url.replace('autoplay=1', 'autoplay=0');
    iframe.attr('src', url);
  });
});