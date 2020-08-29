import React, { Component } from 'react'
import styles from '../../styles/main.scss'
import { loadText } from '../../operations'

function renderChips(array) {
    const chipsArray = []

    array.forEach(i => {
        chipsArray.push(<div className={styles['chips-item']}><div className={styles['technology-chips']}>{i}</div></div>)
    })

    return chipsArray
}

class Project extends Component {
    constructor(props) {
        super(props)
        this.state = { currentColorIndex: 0 }
    }

    render() {
        const { description,
            children,
            serviceStack,
            uiStack,
            repoLink,
            repoCaption,
            projectType } = this.props

        return (<div className={styles['project-box']}>
            <div className={styles['project-header']}><h1><span>{children}</span></h1></div>
            <div className={styles['flex-container']}>
                <div className={styles['project-description']}>
                    <div className={styles['project-type']}>
                        {loadText('project-type') + ': ' + projectType}
                    </div>
                    {description}
                </div>
            </div>
            <div className={styles['flex-container']}>
                <h3>{loadText('service-stack')}:</h3>
            </div>
            <div className={styles['chips-container']}>
                {
                    typeof serviceStack === 'undefined'
                        ? <span />
                        : renderChips(serviceStack)
                }
            </div>
            <div className={styles['flex-container']}>
                <h3>{loadText('ui-stack')}:</h3>
            </div>
            <div className={styles['chips-container']}>
                {
                    typeof uiStack === 'undefined'
                        ? <span />
                        : renderChips(uiStack)
                }
            </div>
            <div className={styles['flex-container']}>
                {
                    typeof repoLink === 'undefined'
                        ? <span className={styles['project-note']}>{repoCaption}</span>
                        : <div className={styles['project-button']}><a target="_blank" href={repoLink}>{repoCaption}</a></div>
                }

            </div>
        </div>)
    }
}

export default Project