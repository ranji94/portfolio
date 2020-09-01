import React, { Component } from 'react'
import styles from '../styles/main.scss'
import { loadText } from '../operations';

class Menu extends Component {
    render() {
        const { scrollToAboutNode,
            scrollToProjectsNode,
            scrollToContactNode } = this.props

        const navItems = [
            <li onClick={() => scrollToAboutNode()}>{loadText('menu-item-about')}</li>,
            <li onClick={() => scrollToProjectsNode()}>{loadText('menu-item-projects')}</li>,
            <li onClick={() => scrollToContactNode()}>{loadText('menu-item-contact')}</li>
        ]

        return (
            <ul>
                {navItems}
            </ul>
        )
    }
}

export default Menu