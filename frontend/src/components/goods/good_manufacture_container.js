import { connect } from 'react-redux';
import { manufactureGood } from '../../actions/good_actions';
import GoodManufacture from './good_manufacture';

const mapStateToProps = ( state ) => {
    return {
        newGood: state.entities.goods.new
    };
};

const mapDispatchToProps = dispatch => {
    return {
        manufactureGood: data => dispatch(manufactureGood(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GoodManufacture);