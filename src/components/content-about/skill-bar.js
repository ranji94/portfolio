import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setAnimateSkillbars } from '../../redux/actions'
import styles from '../../styles/main.scss'
import { CheckOutlined } from '@material-ui/icons'

export const SkillBar = ({ barPercentage,
    children,
    skillBarCaption }) => {

    function getSkillBarCaption(caption, value) {
        if (typeof caption === 'undefined') {
            return value + '%'
        }
        else {
            return caption
        }
    }


    const animateSkillbars = useSelector(state => state.animateSkillbars.animateSkillbars)
    const dispatch = useDispatch()

    const limitedBarPercentage = barPercentage > 100 ? 100 : barPercentage
    const skillBarStyles = {
        static: styles['skill-bar'],
        animated: styles['skill-bar-animated']
    }

    return (<div className={styles['skill-bar-container']}>
        <div className={styles['skill-bar-description']}>
            {children}
        </div>
        <div className={styles['skill-bar-box']}>
            <div className={styles['skill-bar-wrapper']}>
                <div onAnimationEnd={() => dispatch(setAnimateSkillbars(false))}
                    style={{ width: limitedBarPercentage + '%' }}
                    className={animateSkillbars ? skillBarStyles.animated : skillBarStyles.static}>
                    {barPercentage === '101' ? <CheckOutlined /> : getSkillBarCaption(skillBarCaption, limitedBarPercentage)}
                </div>
            </div>
        </div>
    </div>)
}