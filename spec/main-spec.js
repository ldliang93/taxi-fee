const calculatePrice = require('../main/main');

describe('taxi fee', function () {
  it('should return 6 when input 2km', function() {
    let input = 2;
    let summary = calculatePrice(input);
    let expected = 6;
    expect(summary).toEqual(expected)
  });

  it('should return 6.8 when input 3km', function() {
    let input = 3;
    let summary = calculatePrice(input);
    let expected = 6.8;
    expect(summary).toEqual(expected)
  });
});
