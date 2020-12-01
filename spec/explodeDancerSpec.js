describe('explodeDancer', function() {

  var explodeDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    explodeDancer = new ExplodeDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(explodeDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node explode', function() {
    sinon.spy(explodeDancer.$node, 'effect');
    explodeDancer.step();
    expect(explodeDancer.$node.effect.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(explodeDancer, 'step');
      expect(explodeDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(explodeDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(explodeDancer.step.callCount).to.be.equal(2);
    });
  });
});
