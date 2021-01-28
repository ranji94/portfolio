import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setAnimateSkillbars } from '../../redux/actions'
import styles from '../../styles/main.scss'
import { CheckOutlined } from '@material-ui/icons'
import { MONTHS_IN_YEAR } from '../../constants'

export const SkillBar = ({ barPercentage,
    children,
    skillBarCaption ,
    beginningDate }) => {

    if (typeof beginningDate !== 'undefined') {
        const expMessageBuilder = (years, months) => {
            const getFormattedTimeUnit = (timeUnit, msg) => { return timeUnit + ' ' + msg + (timeUnit > 1 ? 's' : '') }
            return getFormattedTimeUnit(years, 'year') + ((months > 0) ? ' and ' + getFormattedTimeUnit(months, 'month') : '')
        }

        const expInHumanUnits = (exp) => {
            let yrs = 0
            let mnths = 0

            while(exp > 0) {
                if (exp >= 12) {
                    yrs++
                    exp-=12
                } 
                else {
                    mnths = exp
                    exp = 0
                }
            }

            return expMessageBuilder(yrs, mnths)
        }
        const startDate = new Date(beginningDate)
        const currentDate = new Date()
        
        const totalExpInMonths = (currentDate.getFullYear() - startDate.getFullYear())*MONTHS_IN_YEAR + currentDate.getMonth() - startDate.getMonth()

        skillBarCaption = expInHumanUnits(totalExpInMonths)
    }

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