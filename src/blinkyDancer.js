var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer blinky"></span>');
  this.setPosition(top, left);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;
BlinkyDancer.prototype.oldStep = BlinkyDancer.prototype.step;
BlinkyDancer.prototype.step = function() {
  this.oldStep();
  this.$node.toggle();
};


