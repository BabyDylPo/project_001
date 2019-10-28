import { connect } from 'react-redux';
import { manufactureGood } from '../../actions/good_actions';


import NavBar from './navbar';

const mapStateToProps = state => ({

});

export default connect(
    mapStateToProps,
    { manufactureGood }
)(NavBar);