function AccordionItem({ data, isOpen, toggleItem }) {
  const { question, answer } = data

  return (
    <div className="border-b-2">
      <button 
        className={
          "w-full pr-8 py-4 text-left "
          + (isOpen ? "font-bold" : "")
        }
        onClick={() => toggleItem()}
      >{question}</button>
      
      <div 
        className={'pb-4 pr-8 transform ' + (
          isOpen ? 'h-full visible' : 'h-0 invisible'
        )}
      >{answer}</div>
    </div>
  )
}

export default AccordionItem;