import React, { Component } from 'react'
import styles from '../styles/main.scss'

class Content extends Component {
    render() {
        const { headerId,
            header,
            content } = this.props

        return (
            <div>
                <div className={styles['flex-container']}>
                    <div className={styles['content-item']}>
                        <div id={headerId} className={styles['content-area']}>
                            <h1>{header}</h1>
                            {this.capitalizeFirstLetter(content)}
                        </div>
                    </div>
                </div>
            </div>)
    }

    capitalizeFirstLetter(rawText) {
        const text = rawText.join('')

        return (
            <div>
                <span className={styles['first-letter']}>{text.substr(0, 1)}</span>
                {text.substr(1)}
            </div>)
    }
}

Content.defaultProps = {
    header: 'Header',
    content: 'Content',
    headerId: '#defaultHeaderId'
}
export default Content