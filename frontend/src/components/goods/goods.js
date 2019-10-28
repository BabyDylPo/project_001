import React from 'react';
import { withRouter } from 'react-router-dom';
import GoodBox from './good_box';

class Good extends React.Component {
    
    componentDidMount() {
        this.props.fetchGoods();
    }
    
    // componentWillRecieveProps(newState) {
    //     this.setState({ goods: newState.goods });
    // }
    
    render() {
        if (this.props.goods.length === 0) {
            return (<div>There are no Goods available</div>)
        } else {
            return (
                <div className="good-div">
                    <h2>All Goods</h2>
                    <div className="good-container">
                        { this.props.goods.map(good => (
                            <GoodBox key={ good._id } good={ good } />
                        ))}
                    </div>
                </div>
            );
        }
    }
}

export default withRouter(Good);