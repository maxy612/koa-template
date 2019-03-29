const expect = require('chai').expect;
const time = require('../../util/time');

describe('should get right date', () => {
  it('测试 time.format', () => {
    expect(time.format(1553854646346)).to.be.equal('2019-03-29 18:17:26');
    expect(time.format(1553854646346)).to.be.not.equal('2019-03-29 18:17:22');
  })

  it('测试 time.add', () => {
    expect(time.add(3, 2, 1, 1)).to.be.equal(7);
  })
})
