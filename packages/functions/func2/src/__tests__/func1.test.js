// const assert = require('assert');
// const sinon = require('sinon');
// const uuid = require('uuid');

const { func2 } = require('../index');

function chainObject() {
    return this;
}

it('func2 test', () => {
    // Mock ExpressJS 'req' and 'res' parameters
    // const name = uuid.v4();
    const req = {
        query: {},
        body: {
            name: 'yuri',
        },
    };

    const json = jest.fn();
    // const stub = sinon.stub();

    const res = { status: jest.fn(chainObject), json };

    // console.log('s', s);
    // Call tested function
    func2(req, res);
    expect(json).toHaveBeenCalledTimes(1);
    expect(json).toHaveBeenCalledWith({ ok: 'yes' });
    // expect(send.calls.length).toHaveBeenCalledTimes(1)
    // console.log('res.send.mock.calls', res.send.mock.calls);
    // console.log('res.send.mock.calls', res.send.calls.length);
    // expect(res.send.mock.calls).toEqual([
    //     '4'
    // ]);
    // Verify behavior of tested function
    // assert.ok(res.send.calledOnce);
    // assert.deepStrictEqual(res.send.firstCall.args, [{ all: 'ssssssd' }]);
});
