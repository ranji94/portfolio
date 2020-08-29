import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAnimateSkillbars } from '../../redux/actions'
import styles from '../../styles/main.scss'
import { CheckOutlined } from '@material-ui/icons'

function getSkillBarCaption(caption, value) {
    if(typeof caption === 'undefined') {
        return value + '%'
    }
    else {
        return caption
    }
}

class SkillBar extends Component {
    render() {
        const { barPercentage,
            children,
            animateSkillbars,
            setAnimateSkillbars,
            skillBarCaption } = this.props

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
                    <div onAnimationEnd={() => setAnimateSkillbars(false)}
                        style={{ width: limitedBarPercentage + '%' }}
                        className={animateSkillbars ? skillBarStyles.animated : skillBarStyles.static}>
                        {barPercentage === '101' ? <CheckOutlined /> : getSkillBarCaption(skillBarCaption, limitedBarPercentage)}
                    </div>
                </div>
            </div>
        </div>)
    }
}

const mapStateToProps = (state) => {
    const { animateSkillbars } = state.animateSkillbars || false
    return { animateSkillbars }
}

export default connect(
    mapStateToProps, 
    { setAnimateSkillbars }
)(SkillBar)