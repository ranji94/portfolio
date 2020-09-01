import React, { Component } from 'react'
import styles from '../styles/main.scss'
import { LinkedIn, GitHub, Facebook } from '@material-ui/icons'
import { loadText } from '../operations'

const SOCIAL_ICON_SIZE = '50px'

function getIcon(iconName) {
    let component = null
    const defaultIconProps = {
        style: { fontSize: SOCIAL_ICON_SIZE },
        className: styles['social-media-icon']
    }

    const iconFactory = [
        { name: 'linkedin', iconComponent: <LinkedIn {...defaultIconProps} /> },
        { name: 'github', iconComponent: <GitHub {...defaultIconProps} /> },
        { name: 'facebook', iconComponent: <Facebook {...defaultIconProps} /> }
    ]

    iconFactory.forEach(ico => {
        if (ico.name === iconName) {
            component = ico.iconComponent
        }
    })

    return component
}

class Contact extends Component {
    render() {
        const { reference, socialIconsData } = this.props
        const socialIcons = []

        socialIconsData.map(s => {
            socialIcons.push(<div className={styles['social-icon']}>
                <a href={s.link} target={'_blank'}>{getIcon(s.icon)}</a>
            </div>)
        })

        return (<div>
            <div className={styles['flex-container']}>
                <div className={styles['contact-clipped-stripe-1']} />
                <div className={styles['contact-clipped-stripe-2']} />
            </div>
            <div className={styles['contact-container']}>
                <div className={styles['contact-data-container']}>
                    <div ref={reference} className={styles['content-area']}>
                        <h1>{loadText('contact-header')}</h1>
                    </div>
                    <div className={styles['flex-container']}>
                        <div className={styles['contact-email']}>
                            <a href={`mailto:${loadText('contact-email')}?subject=${loadText('contact-subject')}`}>{loadText('contact-email')}</a>
                        </div>
                    </div>
                    <div className={styles['flex-container']}>
                        <div className={styles['social-container']}>
                            {socialIcons}
                        </div>
                    </div>
                    <div className={styles['flex-container']}>
                        <div className={styles['footer-text']}>
                            {loadText('footer-text')}
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }
}

export default Contact