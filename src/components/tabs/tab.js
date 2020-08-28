import React, { Component } from 'react'
import styles from '../../styles/main.scss'

class Tab extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { children,
            id,
            onClick,
            activeTab } = this.props
        return (
            <div onClick={() => onClick(id)} className={activeTab === id ? styles['tab-item-active'] : styles['tab-item']}>
                {children}
            </div>
        )
    }
}

export default Tab