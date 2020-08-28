import React, { Component } from 'react'
import styles from '../../styles/main.scss'


class Advantage extends Component {
    render() {
        const { header,
            description,
            icon,
            iconBackgroundColor } = this.props

        return (<div>
            <div className={styles['advantage-icon-box']}>
                <div style={{ backgroundColor: iconBackgroundColor }} className={styles['advantage-icon-background']}>
                    {icon}
                </div>
            </div>
            <div className={styles['advantage-description']}>
                <h1>{header}</h1>
                <p>{description}</p>
            </div>
        </div>)
    }
}

export default Advantage