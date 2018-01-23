var MakeBreakDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('div class = "breakDancer-Container"</div>')
  this.$node.html('<div class="break-dancerContainer" <img class="break-dancer" src="sources/break-dancer.jpg"></img></div>');
  this.spin();
};

MakeBreakDancer.prototype = Object.create(MakeDancer.prototype);
MakeBreakDancer.prototype.constructor = MakeBreakDancer;

//access to this.$node was prevented because create wasn't invoked
MakeBreakDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
};

MakeBreakDancer.prototype.spin = function() {
  MakeDancer.prototype.step.call(this);
  (this.$node).animate({
    left: '+=100'
  }, {
    duration: 5000,
    step: function( now, fx ) {
      $( this.$node).css('left', now);
    }
  });
};  


//replace toggle with a rotate transition
 
//write our tests in the specFolder for new dancer