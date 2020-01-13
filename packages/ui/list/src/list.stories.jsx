import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line
// import { Button } from '@storybook/react/demo';
import List from './index';

storiesOf('List', module)
    .add('with data', () => (
        <List data={[
            {
                _id: '1'
            },
            {
                _id: '2'
            }
        ]}
        />
    ));
