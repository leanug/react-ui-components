import React from 'react';
import accordionItems from '../../constants/accordion'
import Item from './Item'
import PropTypes from 'prop-types'

const Accordion = () => {
    return (
        <>
          { accordionItems.map(( item, index ) => {
            const { title, info } = item
            return (
              <Item 
                info={ info }
                key={ index } 
                title={ title } 
              />
            )
          })}
        </> 
    );
};

Accordion.defaultProps = {
    data: []
}

Accordion.propTypes = {
    data: PropTypes.array.isRequired,
}

export default Accordion;