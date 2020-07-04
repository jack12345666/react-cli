import React, { Component } from 'react';

class Test extends Component {
    state = {
        type: null
    }
    componentDidMount() {
        this.setState({
            type: this.props.history.location.state
        })
    }
    render() {
        const { type } = this.state
        return (
            <div>
                test component {type}
            </div>
        );
    }
}

export default Test;