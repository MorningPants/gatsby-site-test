import React from "react"

class App extends React.Component {
    constructor(){
        super()   
        this.state = {
            isLoggedIn: true,
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
    this.setState(prevState => ({
      isLoggedIn: !prevState.isLoggedIn
       }))
     }
    render(){
        var inOut = ""
        
        if (this.state.isLoggedIn){
            inOut = "in"
        }
        else {
            inOut = "out"
        }
        
        return(
            <div>
                <h1>You are currently logged {inOut}</h1>
                      <button onClick={this.handleClick}>Log {this.state.isLoggedIn ? 'out' : 'in'}</button>
            </div>
        )
    }
}

export default App