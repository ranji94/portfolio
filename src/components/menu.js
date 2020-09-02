import React, { Component } from 'react'
import { loadText } from '../operations';
import Fade from 'react-reveal/Fade'

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
            <Fade top cascade>
                <ul>
                    {navItems}
                </ul>
            </Fade>
        )
    }
}

export default Menu