import React from 'react'

class ContentHider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
            isShowing: true
        }

    }

    handleClick = (e) => {
        const newValue = this.state.counter + 1
        console.log('button clicked', e)

        let shouldShow = true

        this.setState({
            counter: newValue,
            isShowing: shouldShow
        })
    }

    render() {
        let displayText = null
        let text = `I have been clicked ${this.state.counter} times!`
        if (this.state.isShowing === true) {
            displayText = (<div>{text}</div>)
            return (
                <div>
                    <button onClick={this.handleClick}>Click Me</button>
                    {displayText}
                </div>
            )
        }
    }
}

export default ContentHider;
