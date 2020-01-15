import React from 'react';
import PropTypes from 'prop-types';
import loadable from '@loadable/component';
import List from '@mussia/list';
const Stam = loadable(() => import(/* webpackChunkName: "stam" */'./Stam'));
// import Stam from './Stam';


// those fail in webserver1, webpack worked but failes in server side
// import ButtonList from '@krupnik/button-group';

const Screen1 = (props) => {
    const { children } = props;
    console.log('children', children);
    return (
        <div>
            <h2>
                I am dunamic aad
            </h2>
            <Stam/>
            <List
                data={[
                    {
                        _id: 1
                    },
                    {
                        _id: 2
                    }
                ]}
            />
        </div>
    );
};

Screen1.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.func,
        PropTypes.string,
        PropTypes.element
    ])
};

export default Screen1;
