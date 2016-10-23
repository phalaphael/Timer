var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', ()=> {
  it('should exist', () => {
    expect(Countdown).toExist();
  });
  describe('handleSetCountdown',() => {
    it('should set state to "started" in countdown', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(3);

      expect(countdown.state.count).toBe(3);
      expect(countdown.state.countdownStatus).toBe('started');
      setTimeout(()=>{
        expect(countdown.state.count).toBe(2);
        done();
      }, 1001);
    });
  });
  describe('handleSetCountdown',() => {
    it('should set state to started and check if no negatives occur', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(1);
      setTimeout(()=>{
        expect(countdown.state.count).toBe(0);
        done();
      }, 3001);
    });
  });

});
