/*-----------------Forms--------------*/
window.onbeforeunload = () => {
  for(const form of document.getElementsByTagName('form')) {
    form.reset();
  }
}
/*-----------------form--------------*/

/*-----------------Typed--------------*/

var typed = new Typed('.auto-Type', {
  strings: ['Web Developer','App Developer','Programmer'],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true
});

/*-----------------Typed--------------*/
