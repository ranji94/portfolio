import React from 'react'
import styles from '../styles/main.scss'
import { loadText } from '../operations'
import MenuItem from './menu-item'
import BUTTONS from '../resources/buttons.json'

export function AppHeader() {
    return (
        <div className={styles['header-container']}>
            {getAnimatedLinesBackground()}
            <div>
                <div className={styles['header-main']}><h1>{loadText('header-main')}</h1></div>
                <div className={styles['header-sub']}>{loadText('header-sub')}</div>
                <div className={styles['flex-container']}>
                    <div className={styles['flex-item']}>
                        <div className={styles['header-button']}>
                            <div><MenuItem>{loadText('menu-item-view', BUTTONS)}</MenuItem></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function getAnimatedLinesBackground () {
    return(
        <div className={styles['lines']}>
            <div className={styles['line']}></div>
            <div className={styles['line']}></div>
            <div className={styles['line']}></div>
        </div>
    )
}