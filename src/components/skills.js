import React, { Component } from 'react'
import styles from '../styles/main.scss'
import SkillBar from './skill-bar'

class Skills extends Component {
    render() {
        return (<div className={styles['skills-container']}>
            {this.renderSkills()}
        </div>)
    }

    renderSkills () {
        const { skills } = this.props
        const skillBars = []

        skills.forEach(s => {
        skillBars.push(<SkillBar {...{ barPercentage: s.skillPercentage }}>{s.item}</SkillBar>)
        });

        return skillBars
    }
}

export default Skills