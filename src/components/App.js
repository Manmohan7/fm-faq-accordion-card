import React from "react";
import * as API from "../utils/api"
import Accordion from "./Accordion"
import ImagePattern from "./ImagePattern"

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
      <main className="pb-16 px-8 bg-white rounded-3xl">
        <ImagePattern />
        <Accordion list={accordionList} />
      </main>
    )
  }
}

export default App;
