import React from 'react'
import styles from '../../styles/main.scss'

export const AvatarCard = ({ photo,
    header,
    description }) => {

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