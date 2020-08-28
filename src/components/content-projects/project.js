import React, { Component } from 'react'
import styles from '../../styles/main.scss'

function renderChips(array) {
    const chipsArray = []

    array.forEach(i => {
        chipsArray.push(<span className={styles['technology-chips']}>{i}</span>)
    })

    return chipsArray
}

class Project extends Component {
    render() {
        const { description,
            children,
            serviceStack,
            uiStack } = this.props

        return (<div className={styles['project-box']}>
            <div className={styles['project-header']}><h1><span>{children}</span></h1></div>
            <div className={styles['flex-container']}>
                <div className={styles['project-description']}>
                    {description}
                </div>
            </div>
            <div className={styles['flex-container']}>
                <h3>Service Stack:</h3>
            </div>
            <div className={styles['chips-container']}>
                {
                    typeof serviceStack === 'undefined'
                        ? <span />
                        : <div className={styles['chips-item']}>
                            {renderChips(serviceStack)}
                        </div>
                }
            </div>
            <div className={styles['flex-container']}>
                <h3>UI Stack:</h3>
            </div>
            <div className={styles['chips-container']}>
                {
                    typeof uiStack === 'undefined'
                        ? <span />
                        : <div className={styles['chips-item']}>
                            {renderChips(uiStack)}
                        </div>
                }
            </div>
            <div className={styles['flex-container']}>
                <div className={styles['project-button']}>Link to repository</div>
            </div>
        </div>)
    }
}

export default Project