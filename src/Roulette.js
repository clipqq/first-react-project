import React from 'react'

class Roulette extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            chamber: null,
            spinningTheChamber: false,
            bulletInChamber: 8,
            outputText: 'You\'re Alive'
        }
    }

    triggerPull = (e) => {

        this.setState({
            spinningTheChamber: true,
            outputText: 'spinning the chamber and pulling the trigger! ...'
        })
        setTimeout(() => {
            if (this.state.spinningTheChamber) {
                let randomChamber = Math.floor(Math.random() * this.state.bulletInChamber) + 1
                console.log(randomChamber)
                this.setState({
                })
                if (randomChamber === 1) {
                    this.setState({
                        outputText: 'DEAD'
                    })
                } else {
                    this.setState({
                        outputText: `Nice... you're still alive`
                    })
                }
            }

        }, 2000)


    }


    render() {
        return (
            <div>
                <button onClick={this.triggerPull} >Pull the trigger!</button>
                <p>{this.state.outputText} </p>
            </div>
        )
    }

}

export default Roulette;