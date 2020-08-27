import React, { Component } from 'react'
import styles from '../styles/main.scss'

class Separator extends Component {
    render() {
        const { header,
            subtext,
            headerStyle,
            headerQuote,
            subtextStyle } = this.props
        return (
            <div>
                <div className={styles['separator-container-secondary']}></div>
                <div className={styles['separator-container-primary']}>
                    <div className={styles['separator-item']}>
                        <div>
                            <div className={styles['separator-header-' + headerStyle]}>
                                { headerQuote
                                    ? <blockquote>{header}</blockquote>
                                    : header
                                }
                            </div>
                            <div className={styles['separator-subtext-' + subtextStyle]}>
                                {subtext}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles['separator-container-secondary']}></div>
            </div>
        )
    }
}

Separator.defaultProps = {
    headerStyle: 'default',
    headerQuote: false,
    subtextStyle: 'default'
}
export default Separator