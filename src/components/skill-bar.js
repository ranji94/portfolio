import React, { Component } from 'react'
import styles from '../styles/main.scss'

class SkillBar extends Component {
    render() {
        const { barPercentage,
            children } = this.props

        return (<div className={styles['skill-bar-container']}>
            <div className={styles['skill-bar-description']}>
                {children}
            </div>
            <div className={styles['skill-bar-box']}>
                <div className={styles['skill-bar-wrapper']}>
                    <div style={{ width: barPercentage + '%' }} className={styles['skill-bar']}>
                        {barPercentage + '%'}
                    </div>
                </div>
            </div>
        </div>)
    }
}

export default SkillBar