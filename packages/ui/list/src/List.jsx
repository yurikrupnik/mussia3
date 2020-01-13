import React from 'react';
import PropTypes from 'prop-types';
import Button from '@krupnik/button';
import Select from 'react-select';

// import styles from './style.css';
// import styles from './styles.sass';
// import styles from './tooltip.scss';
// import styles from './list.module.scss';
import Item from './Item/Item';

/**
 * List module.
 * @module @krupnik/list
 *
 * @typedef data
 * @property {array} data
 *
 */
const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];
const List = (props) => {
    const { data } = props;
    // console.log('type', type); // eslint-disable-line
    const [selectedOption, setSelected] = React.useState(null);

    // const handleChange = React.useCallback((e) => {
    //     setSelected(e);
    // });

    return (
        <>
            <Select
                value={selectedOption}
                onChange={setSelected}
                options={options}
            />
            {
                data.map((v) => (<Item key={v._id} item={v} />))
            }
            <div>
                <h1>button part</h1>
                <Button onClick={() => {}}>ohh button</Button>
            </div>
        </>
    );
};

List.defaultProps = {
    data: [],
    // type: 'a'
};

List.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        context: PropTypes.string,
    })),
    // type: PropTypes.string
};

export default List;
