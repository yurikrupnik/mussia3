// const assert = require('assert');
// const sinon = require('sinon');
// const uuid = require('uuid');

const { func1 } = require('../index');

function chainObject() {
    return this;
}


it('func1 test', () => {
    // Mock ExpressJS 'req' and 'res' parameters
    // const name = uuid.v4();
    const req = {
        query: {},
        body: {
            // name: 'yuri'
        },
    };
    const res = {
        status: jest.fn(chainObject),
        json: jest.fn()
    };

    // console.log('s', s);
    func1(req, res);
    // api(req, res);

    // Verify behavior of tested function
    expect(1).toBe(1);
    expect(res.json).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith({ ok: 'yes' });
    // assert.ok(res.send.calledOnce);
    // assert.deepStrictEqual(res.send.firstCall.args, [{ all: 'aa' }]);
});
