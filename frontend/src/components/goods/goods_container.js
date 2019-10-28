import { connect } from 'react-redux';
import { fetchGoods } from '../../actions/good_actions';
import Good from './goods';

const mapStateToProps = ( state ) => {
    return {
        goods: Object.values(state.entities.goods.all)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchGoods: () => dispatch(fetchGoods())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Good);