import React, { Component } from 'react'
import styles from '../styles/main.scss'
import Advantage from './advantage'

class Advantages extends Component {
    render() {
        return (<div className={styles['flex-container']}>
            {this.renderAdvantages()}
        </div>)
    }

    renderAdvantages() {
        const { items } = this.props
        const advantageItems = []

        items.forEach(a => {
            advantageItems.push(<div className={styles['advantage-item']}>
                <Advantage {...{
                    header: a.header,
                    description: a.description,
                    icon: a.icon,
                    iconBackgroundColor: a.iconBackgroundColor
                }} /></div>)
        })

        return advantageItems
    }
}

export default Advantages