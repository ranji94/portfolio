import { SET_ANIMATE_SKILLBARS } from './action-types'

export const setAnimateSkillbars = (content) => {
    return {
        type: SET_ANIMATE_SKILLBARS,
        payload: {
            content
        }
    }
}