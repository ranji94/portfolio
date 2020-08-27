import React, { Component } from 'react'
import styles from '../styles/main.scss'
import { Avatar } from '@material-ui/core'
import { loadText } from '../operations'

class AvatarCard extends Component {
    render() {
        const { photo,
            header,
            description } = this.props

        return (
            <div className={styles['avatar-box']}>
                <div className={styles['avatar-image']}>
                    <img src={photo} />
                </div>
                <div className={styles['avatar-description']}>
                    <h1>{header}</h1>
                    <p>{description}</p>
                </div>
            </div>
        )
    }
}

export default AvatarCard