var TapDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<div class ="tap-dancerContainer"</div>');
  $(this.$node).html('<img src="sources/tapDancer.png" class="tap-dancer">');
  this.tapLeft = this.$node[0].style.left;
  this.tapTop = this.$node[0].style.top;
};

TapDancer.prototype = Object.create(MakeDancer.prototype);
TapDancer.prototype.constructor = TapDancer;


//access to this.$node was prevented because create wasn't invoked
TapDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.spin();
};

TapDancer.prototype.spin = function() {
  var randomLeft = Math.random() * 1000;
  var randomHeight = Math.random() * 1000;
  $(this.$node).css('left', randomLeft);
  $(this.$node).css('top', randomHeight);
  

};  