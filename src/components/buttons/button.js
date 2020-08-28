import React, { Component } from 'react'
import styles from '../../styles/main.scss'

class Button extends Component {
    render() {
        return(<button className={styles['button']}>ABCDEF</button>)
    }
}

export default Button