import React from 'react';
import routes from './routes';
import Router from '../../Router';

export default React.memo(() => (
    <Router routes={routes} />
));
