var ExplodeDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer explode"></span>');
  this.setPosition(top, left);
};

ExplodeDancer.prototype = Object.create(Dancer.prototype);
ExplodeDancer.prototype.constructor = ExplodeDancer;
ExplodeDancer.prototype.oldStep = ExplodeDancer.prototype.step;
ExplodeDancer.prototype.step = function() {
  this.oldStep();
  this.$node.effect( 'explode', { times: 2 }, 'slow' );
};