import React from "react"
import PropTypes from "prop-types"
import "./Accordion.scss"
import AccordionItem from "../AccordionItem"

class Accordion extends React.Component {
  state = {
    selectedIndex: 2
  }

  toggleItem(index) {
    const { selectedIndex } = this.state

    index = index === selectedIndex
      ? -1
      : index

    this.setState(() => ({
      selectedIndex: index
    }))
  }

  render() {
    const { list } = this.props
    const { selectedIndex } = this.state

    return (
      <div className="accordion">
        {list.map((item, index) => (
          <AccordionItem 
            key={index} 
            data={item}
            isOpen={index === selectedIndex}
            toggleItem={() => this.toggleItem(index)}
          />
        ))}
      </div>
    )
  }
}

Accordion.propTypes = {
  list: PropTypes.array.isRequired
}

export default Accordion;