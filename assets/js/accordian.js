var button = $('.buttons');

button.on('click', function() {
  var $this = $(this);
  $this.addclass('hulk');
  $this.find('ol').slideDown();

  var others = $this.siblings();
  others.removeClass('hulk');
  others.find('ol').slideUp();
});
