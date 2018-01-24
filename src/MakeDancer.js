var MakeDancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.setPosition(top, left);
  this.step();

};

MakeDancer.prototype.step = function(timeBetweenSteps) {
  
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step

  
  var tapLeft = this.tapLeft ? Number(this.tapLeft.slice(0, -2)) : 1;
  var tapTop = this.tapTop ? Number(this.tapTop.slice(0, -2)) : 1;
  var breakTop = this.breakTop ? Number(this.breakTop.slice(0, -2)) : 1;
  var breakLeft = this.breakLeft ? Number(this.breakLeft.slice(0, -2)) : 1;
  var breakAggregate = Math.abs( Math.round(breakTop) + Math.round(breakLeft) );
  var tapAggregate = Math.abs( Math.round(tapLeft) + Math.round(tapTop));

  // console.log(tapAggregate, breakAggregate);

  // if (Math.abs(tapAggregate - breakAggregate) <= 25) {
  //   console.log(this.$node);
  //   var randomLeft = Math.random() * 1000;
  //   var randomHeight = Math.random() * 1000;
  //   $(this.$node).css('left', randomLeft);
  //   $(this.$node).css('top', randomHeight);
  //   $(this.$node).animate({
  //     transform: 'rotate(360deg)'
  //   });
  // }
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};


MakeDancer.prototype.setPosition = function(top, left) {
// Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/

  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);    
};

// MakeDancer.prototype.calculateDistance = function() {
  
// };






//add interaction of dancers based on relative position to each other
//add at least two additional unit tests
  