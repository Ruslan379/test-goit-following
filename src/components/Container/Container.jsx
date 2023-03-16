import React from 'react';
import PropTypes from 'prop-types';

import css from 'components/Container/Container.module.css' 


export const Container = ({ children }) =>
    <div className={css.Container}>
        {children}
    </div>;


Container.propTypes = {
    children: PropTypes.node.isRequired,
};


