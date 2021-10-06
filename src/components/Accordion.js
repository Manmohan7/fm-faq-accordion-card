import AccordionItem from "./AccordionItem"

function Accordion({ list }) {
  return (
    <div>
      {list.map((item, index) => (
        <AccordionItem key={index} data={item} />
      ))}
    </div>
  )
}

export default Accordion;