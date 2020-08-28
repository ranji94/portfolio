import React, { Component } from 'react'
import Project from './project'
import styles from '../../styles/main.scss'
import Projects from '../../resources/projects.json'

class ContentProjects extends Component {
    render() {
        const { header,
            reference } = this.props
        const projectComponents = []
        Projects.forEach(p => {
            projectComponents.push(<Project
                description={p.description}
                serviceStack={p.serviceStack}
                uiStack={p.uiStack}>
                {p.header}
            </Project>)
        })

        return (
            <div>
                <div className={styles['content-box']}>
                    <div className={styles['flex-container']}>
                        <div className={styles['content-item']}>
                            <div ref={reference} className={styles['content-area']}>
                                <h1>{header}</h1>
                            </div>
                        </div>
                    </div>
                    <div className={styles['content-container']}>
                        <div className={styles['projects-item']}>
                            {projectComponents}
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

ContentProjects.defaultProps = {
    header: 'Projects'
}
export default ContentProjects