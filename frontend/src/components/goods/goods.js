import React from 'react';
import { withRouter } from 'react-router-dom';
import GoodBox from './good_box';

class Good extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            goods: []
        }
    }

    componentWillMount() {
        this.props.fetchGoods();
    }

    componentWillRecieveProps(newState) {
        this.setState({ goods: newState.goods });
    }

    render() {
        if (this.state.goods.length === 0) {
            return (<div>There are no Goods available</div>)
        } else {
            return (
                <div>
                    <h2>All Goods</h2>
                    { this.state.goods.map(good => (
                        <GoodBox key={ good._id } title={ good.title } />
                    ))}
                </div>
            );
        }
    }
}

export default withRouter(Good);