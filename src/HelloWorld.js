import React from 'react'

class HelloWorld extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            string: 'world'
        }    
    }

    handleClick = (e) => {
        let newString = e.currentTarget.id
        this.setState({
            string: newString
        })
    }

    render() {
        return (
            <div>
                <p>Hello {this.state.string}</p>
                <button onClick={this.handleClick} id='world'>World</button>
                <button onClick={this.handleClick} id='friend'>Friend</button>
                <button onClick={this.handleClick} id='react'>React</button>
            </div>
        )
    }
}

export default HelloWorld;