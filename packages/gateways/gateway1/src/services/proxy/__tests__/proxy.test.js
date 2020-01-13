import middleware from '../index';
// import { host, destPort } from '../../../config';

const {
    describe,
    it,
} = global;

describe('proxy middleware', () => {
    it('should pass with default values', () => {
        middleware();
    });
});
