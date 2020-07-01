import React, { Component } from 'react';

class Test extends Component {
    componentDidMount() {
        //console.log(this.props.match.params);
        console.log(this.props.history.location.state);
    }
    render() {
        return (
            <div>
                test component
            </div>
        );
    }
}

export default Test;