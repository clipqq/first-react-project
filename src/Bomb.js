import React from 'react'

class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
        }
    }

    render() {
        let bombText = ''
        if (this.state.count >= 8) {
            bombText = 'BOOM'
        } else if (this.state.count % 2 === 0) {
            bombText = 'tick...'
        } else {
            bombText = 'tock...'
        }

        return (
            <div>
                <p>{bombText} </p>
            </div>
        )
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            console.log('interval fired')
            this.setState({ count: this.state.count + 1 })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }





}

export default Bomb;