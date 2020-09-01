import React, { Component } from 'react'
import ProjectCard from './project-card'
import styles from '../../styles/main.scss'
import Projects from '../../resources/projects.json'

class ContentProjects extends Component {
    render() {
        const { header,
            reference } = this.props

        const projectComponents = []
        Projects.map(p => {
            projectComponents.push(<ProjectCard
                repoLink={p.repoLink}
                projectType={p.projectType}
                repoCaption={p.repoCaption}
                description={p.description}
                serviceStack={p.serviceStack}
                uiStack={p.uiStack}>
                {p.header}
            </ProjectCard>)
        })

        return (
            <div>
                <div className={styles['content-flip-cards-box']}>
                    <div className={styles['flex-container']}>
                        <div className={styles['content-item']}>
                            <div ref={reference} className={styles['content-area']}>
                                <h1>{header}</h1>
                            </div>
                        </div>
                        <div className={styles['flip-card-container']}>
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