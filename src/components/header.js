import React from 'react'
import styles from '../styles/main.scss'
import { loadText } from '../operations'
import { MenuItem } from './menu-item'
import { ArrowForwardIosOutlined } from '@material-ui/icons'
import Buttons from '../resources/buttons.json'

function getAnimatedLinesBackground() {
    return (
        <div className={styles['lines']}>
            <div className={styles['line']}></div>
            <div className={styles['line']}></div>
            <div className={styles['line']}></div>
        </div>
    )
}

export const AppHeader = ({ scrollToAboutNode }) => {
    return (
        <div className={styles['header-container']}>
            {getAnimatedLinesBackground()}
            <div>
                <div className={styles['header-main']}><h1>{loadText('header-main')}</h1></div>
                <div className={styles['header-sub']}>{loadText('header-sub')}</div>
                <div className={styles['header-button-container']}>
                    <div className={styles['header-button']}>

                        <div onClick={() => scrollToAboutNode()}><MenuItem header icon={<span className={styles['header-button-arrow']}><ArrowForwardIosOutlined /></span>}>{loadText('menu-item-view', Buttons)}</MenuItem></div>

                    </div>
                </div>
            </div>
        </div>
    )
}