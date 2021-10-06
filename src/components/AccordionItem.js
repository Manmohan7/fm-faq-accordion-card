function AccordionItem({ data }) {
  const { question, answer } = data
  
  return (
    <div>
      <span><em>{question}</em></span>
      <span>{answer}</span>
    </div>
  )
}

export default AccordionItem;