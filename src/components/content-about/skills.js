import React from 'react'
import styles from '../../styles/main.scss'
import { SkillBar } from './skill-bar'

export const Skills = ({ skills }) => {
    function renderSkills() {
        const skillBars = []

        skills.map(s => {
            skillBars.push(<SkillBar {...{ barPercentage: s.skillPercentage, skillBarCaption: s.skillCaption }}>{s.item}</SkillBar>)
        });

        return skillBars
    }

    return (<div className={styles['skills-container']}>
        {renderSkills()}
    </div>)
}