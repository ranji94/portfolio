import React, { Component } from 'react'
import styles from '../../styles/main.scss'
import photo from '../../resources/me.png'
import AvatarCard from './avatar-card'
import Skills from './skills'
import Tabs from '../tabs/tabs'
import backendSkills from '../../resources/skills/backend.json'
import frontendSkills from '../../resources/skills/frontend.json'
import otherSkills from '../../resources/skills/other.json'
import { loadText } from '../../operations'
import Advantages from '../advantage/advantages'
import advantagesData from '../../resources/advantages.json'

class ContentAbout extends Component {
    render() {
        const { headerId,
            header } = this.props

        const tabs = [
            { id: 1, item: loadText('tab-backend'), content: <Skills skills={backendSkills} /> },
            { id: 2, item: loadText('tab-frontend'), content: <Skills skills={frontendSkills} /> },
            { id: 3, item: loadText('tab-other'), content: <Skills skills={otherSkills} /> },
        ]

        return (
            <div>
                <div className={styles['flex-container']}>
                    <div className={styles['stripe-item']} />
                </div>
                <div className={styles['content-box']}>
                    <div className={styles['flex-container']}>
                        <div className={styles['content-item']}>
                            <div id={headerId} className={styles['content-area']}>
                                <h1>{header}</h1>
                            </div>
                        </div>
                    </div>
                    <div className={styles['content-container']}>
                        <div className={styles['about-item']}>
                            <AvatarCard {...{
                                photo,
                                header: loadText('avatar-header'),
                                description: loadText('avatar-description')
                            }} />
                        </div>
                        <div className={styles['about-item']}>
                            <div className={styles['tabs-container']}>
                                <Tabs {...{ tabs }} />
                            </div>
                        </div>
                    </div>
                    <div className={styles['content-container']}>
                        <Advantages {...{ advantagesData }} />
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

ContentAbout.defaultProps = {
    header: 'Header',
    content: 'Content',
    headerId: '#defaultHeaderId'
}
export default ContentAbout