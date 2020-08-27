import React, { Component } from 'react'
import styles from '../styles/main.scss'
import photo from '../resources/me.png'
import AvatarCard from './avatar-card'
import Skills from './skills'
import SKILLS_DATA from '../resources/skills.json'
import { loadText } from '../operations'
import Advantages from './advantages'
import { WebOutlined,
    CodeOutlined,
    PeopleOutlined,
    ImportantDevicesOutlined } from '@material-ui/icons'

const ADVANTAGE_ICON_SIZE = '5vw'

export const ADVANTAGES_PROPS = [
    {
        header: loadText('advantage-1-header'),
        description: loadText('advantage-1-description'),
        icon: (<WebOutlined style={{ fontSize: ADVANTAGE_ICON_SIZE }} className={styles['advantage-icon']} />),
        iconBackgroundColor: '#EE6352'
    },
    {
        header: loadText('advantage-2-header'),
        description: loadText('advantage-2-description'),
        icon: (<CodeOutlined style={{ fontSize: ADVANTAGE_ICON_SIZE }} className={styles['advantage-icon']} />),
        iconBackgroundColor: '#08B2E3'
    },
    {
        header: loadText('advantage-3-header'),
        description: loadText('advantage-3-description'),
        icon: (<PeopleOutlined style={{ fontSize: ADVANTAGE_ICON_SIZE }} className={styles['advantage-icon']} />),
        iconBackgroundColor: '#57A773'
    },
    {
        header: loadText('advantage-4-header'),
        description: loadText('advantage-4-description'),
        icon: (<ImportantDevicesOutlined style={{ fontSize: ADVANTAGE_ICON_SIZE }} className={styles['advantage-icon']} />),
        iconBackgroundColor: '#484D6D'
    }
]

class ContentAbout extends Component {
    render() {
        const { headerId,
            header,
            content } = this.props

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
                            <Skills skills={SKILLS_DATA} />
                        </div>
                    </div>
                    <div className={styles['content-container']}>
                        <Advantages items={ADVANTAGES_PROPS}/>
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