/**
 * Created by MagicLizi on 2017/1/4.
 */

export function Counter(state = { count: 0 }, action) {
    const count = state.count
    switch (action.type) {
        case 'increase':
            return { count: count + 1 }
        default:
            return state
    }
}