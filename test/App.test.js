import App from '../src/App';
import getTimestamp from '../src/utility';

it('test that the testing is working', () => {
    expect(1).toEqual(1);
});

it('test timestamp for: December 23 2017 at 19:50:30', () => {
  let d = new Date("December 23 2017");
  d.setHours(19);
  d.setMinutes(50);
  d.setSeconds(30);
  let timestamp = getTimestamp(d)
  expect(timestamp).toEqual("19:50:30");
});

it('test timestamp for: December 23 2017 at midnight', () => {
  let d = new Date("December 20 2017");
  let timestamp = getTimestamp(d)
  expect(timestamp).toEqual("0:0:0");
});
