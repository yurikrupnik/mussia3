// const assert = require('assert');
// const sinon = require('sinon');
// const uuid = require('uuid');

const { func1 } = require('../index');

it('func1 test', () => {
    // Mock ExpressJS 'req' and 'res' parameters
    // const name = uuid.v4();
    const req = {
        query: {},
        body: {
            name: 'yuri'
        },
    };
    const res = { status: jest.fn(), send: jest.fn() };

    // console.log('s', s);
    func1(req, res);

    // Verify behavior of tested function
    expect(res.send).toHaveBeenCalledTimes(1);
    expect(res.send).toHaveBeenCalledWith({ all: 'aa' });
    // assert.ok(res.send.calledOnce);
    // assert.deepStrictEqual(res.send.firstCall.args, [{ all: 'aa' }]);
});
