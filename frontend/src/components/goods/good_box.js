import React from 'react';

class GoodBox extends React.Component {
    render() {
        return (
            <div className="good-box">
                <h1>GOOD</h1>
                <p>{ this.props.good.title }</p>
                <p>{ this.props.good.description }</p>
                <p>{ this.props.good.properties }</p>
                <p>{ this.props.good.quantity }</p>
                <p>{ this.props.good.photo }</p>
            </div>
        );
    }
}

export default GoodBox;