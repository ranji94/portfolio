import React, { Component } from 'react'
import styles from '../../styles/main.scss'
import { CheckOutlined } from '@material-ui/icons'

class SkillBar extends Component {
    render() {
        const { barPercentage,
            children } = this.props

        const limitedBarPercentage = barPercentage > 100 ? 100 : barPercentage

        return (<div className={styles['skill-bar-container']}>
            <div className={styles['skill-bar-description']}>
                {children}
            </div>
            <div className={styles['skill-bar-box']}>
                <div className={styles['skill-bar-wrapper']}>
                    <div style={{ width: limitedBarPercentage + '%' }} className={styles['skill-bar']}>
                        {barPercentage === '101' ? <CheckOutlined /> : limitedBarPercentage + '%'}
                    </div>
                </div>
            </div>
        </div>)
    }
}

export default SkillBar