import React from 'react';
import PropTypes from 'prop-types';
import './AccordionItem.scss';

const AccordionItem = ({ data, isOpen, toggleItem }) => {
  const { question, answer } = data

  return (
    <div className={
      "accordion-item "
      + (isOpen ? "accordion-item-active" : "")
    }>
      {/* use icon from public/images/ instead of after */}
      <button 
        className="accordion-item-header"
        onClick={() => toggleItem()}
      >{question}</button>
      
      <div className="accordion-item-content">{answer}</div>
    </div>
  )
}

AccordionItem.propTypes = {
  data: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleItem: PropTypes.func.isRequired
};

export default AccordionItem;
