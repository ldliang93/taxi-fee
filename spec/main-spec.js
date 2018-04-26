const calculatePrice = require('../main/main');

describe('taxi fee', function () {
  it('should return 6 when input 2km', function() {
    let input = {'miles': 2 , 'wait': 0};
    let summary = calculatePrice(input);
    let expected = 6;
    expect(summary).toEqual(expected)
  });

  it('should return 8 when input 4km', function() {
    let input = {'miles': 4 , 'wait': 0};;
    let summary = calculatePrice(input);
    let expected = 8;
    expect(summary).toEqual(expected)
  });

  it('should return 12 when input 9km', function() {
    let input = {'miles': 9 , 'wait': 0};;
    let summary = calculatePrice(input);
    let expected = 12;
    expect(summary).toEqual(expected)
  });

  it('should return 7 when input 2km wait 2min', function() {
    let input = {'miles': 2 , 'wait': 2};
    let summary = calculatePrice(input);
    let expected = 7;
    expect(summary).toEqual(expected)
  });

  it('should return 8 when input 3km wait 4min', function() {
    let input = {'miles': 3 , 'wait': 4};;
    let summary = calculatePrice(input);
    let expected = 8;
    expect(summary).toEqual(expected)
  });

  it('should return 12 when input 9km wait 4min', function() {
    let input = {'miles': 9 , 'wait': 4};;
    let summary = calculatePrice(input);
    let expected = 13;
    expect(summary).toEqual(expected)
  });
});
