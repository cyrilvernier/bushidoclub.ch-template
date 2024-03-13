window.addEventListener( 'DOMContentLoaded', function(event) {

  var navToggler = document.querySelector('.nav-toggler');

  navToggler.addEventListener('click', function() {
    document.body.classList.toggle('nav-is-visible');
  });

});