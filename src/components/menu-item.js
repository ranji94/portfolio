import React, { Component } from 'react'

export class MenuItem extends Component {
    render () {
        const { link,
            children } = this.props
        return (<a href={link}>{children}</a>)
    }
}

export default MenuItem