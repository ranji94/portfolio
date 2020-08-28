import { SET_ANIMATE_SKILLBARS } from '../action-types'

const initialState = {
    animateSkillbars: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_ANIMATE_SKILLBARS: {
            const { content } = action.payload
            return {
                ...state,
                animateSkillbars: content
            }
        }
        default:
            return state
    }
}