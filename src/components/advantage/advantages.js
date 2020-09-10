import React from 'react'
import styles from '../../styles/main.scss'
import { Advantage } from './advantage'
import {
    WebOutlined,
    CodeOutlined,
    PeopleOutlined,
    DevicesOutlined,
    EmojiObjectsOutlined
} from '@material-ui/icons'
import Zoom from 'react-reveal/Zoom'

export const Advantages = ({ advantagesData }) => {

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

        iconFactory.map(ico => {
            if (ico.name === iconName) {
                component = ico.iconComponent
            }
        })

        return component
    }

    function renderAdvantages() {
        const advantageComponents = []

        advantagesData.map(({ header, description, icon, backgroundColor }) => {
            advantageComponents.push(<div className={styles['advantage-item']}>
                <Advantage {...{
                    header,
                    description,
                    icon: getIcon(icon),
                    iconBackgroundColor: backgroundColor
                }} /></div>)
        })

        return advantageComponents
    }

    return (<div className={styles['flex-container']}>
        <Zoom clear>
            {renderAdvantages()}
        </Zoom>
    </div>)
}