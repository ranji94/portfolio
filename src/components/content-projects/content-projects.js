import React from 'react'
import { ProjectCard } from './project-card'
import styles from '../../styles/main.scss'
import Projects from '../../resources/projects.json'
import Fade from 'react-reveal/Fade'

export const ContentProjects = ({ header, reference }) => {
    const projectComponents = []
    Projects.map(({ repoLink,
        projectType,
        repoCaption,
        description,
        serviceStack,
        uiStack,
        header }) => {
        projectComponents.push(<ProjectCard {...{
            repoLink,
            projectType,
            repoCaption,
            description,
            serviceStack,
            uiStack
        }}>
            {header}
        </ProjectCard>)
    })

    return (
        <div>
            <div className={styles['content-flip-cards-box']}>
                <div className={styles['flex-container']}>
                    <div className={styles['content-item']}>
                        <div ref={reference} className={styles['content-area']}>
                            <Fade bottom>
                                <h1>{header}</h1>
                            </Fade>
                        </div>
                    </div>
                    <div className={styles['flip-card-container']}>
                        {projectComponents}
                    </div>
                </div>
            </div>
        </div>)
}

ContentProjects.defaultProps = {
    header: 'Projects'
}