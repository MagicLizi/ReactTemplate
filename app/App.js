/**
 * Created by MagicLizi on 2017/1/4.
 */

import {connect} from 'react-redux';
import Counter from './Counter';

//订阅props 和 store 中的state绑定
function mapStateToProps(state) {
    return {
        value: state.Counter.count
    }
}

//props中事件 和 dispatch绑定
function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch(increaseAction)
    }
}

// Action Creator
const increaseAction = { type: 'increase' }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)