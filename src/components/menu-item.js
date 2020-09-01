import React, { Component } from 'react'
import styles from '../styles/main.scss'

export class MenuItem extends Component {
    render() {
        const { children,
            header,
            icon } = this.props
        return (<div className={header ? '' : styles['menu-button']}>
            <div className={styles['menu-button-container']}>
                <div className={styles['menu-button-description']}>{children}</div>
                {
                    typeof icon === 'undefined'
                        ? <span />
                        : <div className={styles['menu-button-icon']}>{icon}</div>
                }
            </div>
        </div>)
    }
}

export default MenuItem