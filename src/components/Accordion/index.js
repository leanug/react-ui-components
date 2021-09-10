import React from 'react';
import accordionItems from '../../constants/accordion'
import Item from './Item'

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

export default Accordion;