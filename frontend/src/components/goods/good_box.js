import React from 'react';

class GoodBox extends React.Component {
    render() {
        return (
            <div>
                <h3>{ this.props.title }</h3>
            </div>
        );
    }
}

export default GoodBox;