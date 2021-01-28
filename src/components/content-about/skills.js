import React from 'react'
import styles from '../../styles/main.scss'
import { SkillBar } from './skill-bar'

export const Skills = ({ skills }) => {
    function renderSkills() {
        const skillBars = []

        skills.map(({ skillPercentage, skillCaption, beginningDate, item }) => {
            skillBars.push(<SkillBar {...{ barPercentage: skillPercentage, skillBarCaption: skillCaption, beginningDate }}>{item}</SkillBar>)
        });

        return skillBars
    }

    return (<div className={styles['skills-container']}>
        {renderSkills()}
    </div>)
}