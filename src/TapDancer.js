var TapDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<div class ="tap-dancerContainer"</div>');
  $(this.$node).html('<img src="sources/tapDancer.jpg" class="tap-dancer">');
};

TapDancer.prototype = Object.create(MakeDancer.prototype);
TapDancer.prototype.constructor = TapDancer;


//access to this.$node was prevented because create wasn't invoked
TapDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.spin();
};

TapDancer.prototype.spin = function() {
  MakeDancer.prototype.step.call(this);
  var randomLeft = Math.random() * 1000;
  var randomHeight = Math.random() * 1000;
  $(this.$node).css('width', function(index) {
    return index * 2;
  });
  $(this.$node).on('mouseover', function() {
    $(this).fadeIn(100).fadeOut(100);
    $(this).css('border-style', 'solid');
    $(this).css('border-width', '3');
  });
  $( this.$node).css('left', randomLeft);
  $(this.$node).css('top', randomHeight);
  $(this.$node).animate({
    left: '+=100',
    bottom: '+=150',
    top: '+=100',
    right: '+=200'
  }, 'slow');
};  