const reverse = require('../reverse');
const assert = require('chai').assert;




describe('#reverse', () => {
  it('returns "mctdgbh"', () => {
    assert.strictEqual(reverse('hbgdtcm'), 'mctdgbh')
  });
})



//console.log(reverse("hbgdtcm"))
