var MakeBreakDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="http://thenorthsider.com.au/wp-content/uploads/2013/12/break-dancer.jpg" class="break-dancer">');
  this.spin();
};

MakeBreakDancer.prototype = Object.create(MakeDancer.prototype);
MakeBreakDancer.prototype.constructor = MakeBreakDancer;


//access to this.$node was prevented because create wasn't invoked
MakeBreakDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node.toggle();
};

MakeBreakDancer.prototype.spin = function() {

  

};


//replace toggle with a rotate transition
 
//write our tests in the specFolder for new dancer
  