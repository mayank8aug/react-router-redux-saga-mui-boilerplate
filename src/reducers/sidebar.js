import { actions } from '../actions/sidebar';

const initialState = {
    expanded: false
}

function sidebar(prevState = initialState, action) {
    switch(action.type) {
        case actions.TOGGLE_SIDEBAR:
            return Object.assign({}, prevState, {
                expanded: !prevState.expanded
            });
        default:
            return prevState;
    }
}

export default sidebar;