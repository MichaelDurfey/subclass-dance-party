var MakeBreakDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<div class ="break-dancerContainer"</div>');
  this.$node.html('<img class="break-dancer" src="sources/break-dancer.jpg"></img>');
  this.setPosition(top, left);
  this.spin();
};

MakeBreakDancer.prototype = Object.create(MakeDancer.prototype);
MakeBreakDancer.prototype.constructor = MakeBreakDancer;

//access to this.$node was prevented because create wasn't invoked
MakeBreakDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
};

// MakeBreakDancer.prototype.setPosition = function(top, left) {
//   var styleSettings = {
//     top: top,
//     left: left,
//     bottom: randomBottom,
//     right: randomRight
//   };
//   this.$node.css(styleSettings);    
// };

MakeBreakDancer.prototype.spin = function() {
  MakeDancer.prototype.step.call(this);
  (this.$node).animate({
    left: '+=200',
    left: '+=20',
    bottom: '+=10',
    top: '+=40',
    right: '+=40'
  }, {
    duration: 1000,
    step: function( now, fx ) {
      $( this.$node).css('left', now);
    }
  });
};  


//replace toggle with a rotate transition
 
//write our tests in the specFolder for new dancer