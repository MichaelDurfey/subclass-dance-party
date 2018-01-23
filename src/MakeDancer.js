var MakeDancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top, left);
};

MakeDancer.prototype.step = function(timeBetweenSteps) {
  
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};


MakeDancer.prototype.setPosition = function(top, left) {
// Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  var randomBottom = Math.random() * 1000;
  var randomRight = Math.random() * 1000;

  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);    
};






