import React from "react"

class Main extends React.Component {


render() {
    return <div>
        <h2>Main part of the page</h2>
        <h1>The counter changed to {this.props.count} </h1>
    </div>
}
}

export default Main