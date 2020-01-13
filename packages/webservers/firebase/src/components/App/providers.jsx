import { createElement } from 'react';
import PropTypes from 'prop-types';

/**
 * Data providers
 * @module sdas
 */
const Providers = (props) => props.providers
    .reduceRight((acc, c) => createElement(c, {}, acc), props.children);

Providers.propTypes = {
    children: PropTypes.element.isRequired,
    providers: PropTypes.arrayOf(PropTypes.func).isRequired
};

export default Providers;
