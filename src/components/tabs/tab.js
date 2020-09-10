import React from 'react'
import styles from '../../styles/main.scss'

export const Tab = ({ children,
    id,
    onClick,
    activeTab }) => {
    return (
        <div onClick={() => onClick(id)} className={activeTab === id ? styles['tab-item-active'] : styles['tab-item']}>
            {children}
        </div>
    )
}