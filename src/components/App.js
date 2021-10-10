import React from "react";
import * as API from "../utils/api"
import Accordion from "./Accordion"

class App extends React.Component {
  state = {
    accordionList: []
  }
  
  componentDidMount() {
    API.getData()
      .then(data => JSON.parse(data))
      .then(data => {
        this.setState(() => ({
          accordionList: data
        }))
      })
  }

  render() {
    const { accordionList } = this.state
    return (
      <main className="p-4 bg-white rounded-lg">
        <Accordion list={accordionList} />
      </main>
    )
  }
}

export default App;
