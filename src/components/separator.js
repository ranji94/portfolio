import React from 'react'
import styles from '../styles/main.scss'
import Slide from 'react-reveal/Slide'

export const Separator = ({ header,
    subtext,
    headerStyle,
    headerQuote,
    subtextStyle } ) => {
        return (
            <div>
                <div className={styles['separator-container-secondary']}></div>
                <div className={styles['separator-container-primary']}>
                    <div className={styles['separator-item']}>
                        <div>
                            <Slide left>
                            <div className={styles['separator-header-' + headerStyle]}>
                                { headerQuote
                                    ? <blockquote>{header}</blockquote>
                                    : header
                                }
                            </div>
                            </Slide>
                            <Slide right>
                            <div className={styles['separator-subtext-' + subtextStyle]}>
                                {subtext}
                            </div>
                            </Slide>
                        </div>
                    </div>
                </div>
                <div className={styles['separator-container-secondary']}></div>
            </div>
        )
}

Separator.defaultProps = {
    headerStyle: 'default',
    headerQuote: false,
    subtextStyle: 'default'
}