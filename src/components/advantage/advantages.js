import React, { Component } from 'react'
import styles from '../../styles/main.scss'
import Advantage from './advantage'
import { WebOutlined,
    CodeOutlined,
    PeopleOutlined,
    DevicesOutlined,
    EmojiObjectsOutlined } from '@material-ui/icons'

const ADVANTAGE_ICON_SIZE = '5vw'

function getIcon(iconName) {
    let component = null
    const defaultIconProps = {
        style: { fontSize: ADVANTAGE_ICON_SIZE },
        className: styles['advantage-icon']
    }

    const iconFactory = [
        { name: 'web', iconComponent: <WebOutlined {...defaultIconProps} /> },
        { name: 'code', iconComponent: <CodeOutlined {...defaultIconProps} /> },
        { name: 'people', iconComponent: <PeopleOutlined {...defaultIconProps} /> },
        { name: 'devices', iconComponent: <DevicesOutlined {...defaultIconProps} /> },
        { name: 'emojiobjects', iconComponent: <EmojiObjectsOutlined {...defaultIconProps} /> },
    ]

    iconFactory.forEach(ico => {
        if (ico.name === iconName) {
            component = ico.iconComponent
        }
    })

    return component
}

class Advantages extends Component {
    render() {
        return (<div className={styles['flex-container']}>
            {this.renderAdvantages()}
        </div>)
    }

    renderAdvantages() {
        const { advantagesData } = this.props
        const advantageComponents = []

        advantagesData.forEach(a => {
            advantageComponents.push(<div className={styles['advantage-item']}>
                <Advantage {...{
                    header: a.header,
                    description: a.description,
                    icon: getIcon(a.icon),
                    iconBackgroundColor: a.backgroundColor
                }} /></div>)
        })

        return advantageComponents
    }
}

export default Advantages