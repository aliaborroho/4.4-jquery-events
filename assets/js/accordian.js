var button = $('.buttons');

button.on('click', function() {
  var $this = $(this);
  $this.addClass('hulk');
  $this.find('ol').slideDown();

  var others = $this.siblings();
  others.removeClass('hulk');
  others.find('ol').slideUp();
});
