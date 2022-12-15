import React, { Component }  from "react";

export class Counter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    incrementAsyc() {
        // this.state.count = this.state.count + 1
        this.setState(
            {
                count: this.state.count + 1
            },
            () => {
                console.log('Call back value',this.state.count)
            })
        console.log(this.state.count)
    }

    incrementFiveAsyc() {
        this.incrementAsyc()
        this.incrementAsyc()
        this.incrementAsyc()
        this.incrementAsyc()
        this.incrementAsyc()
    }

    incrementSyc() {
        // this.state.count = this.state.count + 1
        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }),
        () => {
            console.log('Call back value',this.state.count)
        })
        console.log(this.state.count)
    }

    incrementFiveSyc() {
        this.incrementSyc()
        this.incrementSyc()
        this.incrementSyc()
        this.incrementSyc()
        this.incrementSyc()
    }

    render() {
        return (
            <div>
                <div>Count: {this.state.count}</div>
                <button onClick={() => this.incrementAsyc()}>Increment Asyc</button>
                <button onClick={() => this.incrementFiveAsyc()}>Increment Five Asyc</button>
                <button onClick={() => this.incrementSyc()}>Increment Syc</button>
                <button onClick={() => this.incrementFiveSyc()}>Increment Five Syc</button>
            </div>
        )
    }
}

export default Counter