var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  
  MakeDancer.call(this, top, left, timeBetweenSteps); 
  // this.oldStep = MakeDancer.prototype.step; 
};

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;


//access to this.$node was prevented because create wasn't invoked
MakeBlinkyDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node.toggle();
};


