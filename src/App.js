import React from "react"
import "./App.css"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetched: [],
      userInfo: []
    }
    this.getData = this.getData.bind(this)
    this.showData = this.showData.bind(this)
  }

async getData() {
  const result = await fetch("https://randomuser.me/api")
  const data = await result.json()
  return data.results
}

async showData() {
  const results = await this.getData()
  this.setState(prev => ({userInfo: [...prev.userInfo, ...results]}))
}

async componentDidMount() {
  const results = await this.getData()
  this.setState({fetched: JSON.stringify(results)})
}

  render() {
    return <div>
    <h1>Hi</h1>
    <p>{this.state.fetched}</p>
    <button onClick={this.showData}>Press</button>
    <div style={{display: "flex", flexWrap: "wrap"}}>
    {this.state.userInfo.map((val, idx) => {
      return <div key={idx}>
          <p>{`${val.name.title} ${val.name.first} ${val.name.last}`}</p>
          <img src={val.picture.large}/>
        </div>
    })}
    </div>
    </div>
  }
  
}

export default App

  

