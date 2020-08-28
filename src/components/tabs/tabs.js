import React, { Component } from 'react'
import styles from '../../styles/main.scss'
import Tab from './tab'
import cx from 'classnames'

class Tabs extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 1, animate: false }
    }

    selectTab = (id) => {
        if(this.state.activeTab !== id) {
            this.setState({ animate: true })
        }

        this.setState({ activeTab: id })
    }

    render() {
        const { tabs } = this.props
        const { animate } = this.state

        return (<div className={styles['tabs-container']}>
            <div className={styles['tabs-switcher']}>
                {this.renderTabs()}
            </div>
            <div className={styles['tab-content-container']}>
                <div className={animate ? styles['tab-content'] : ''} onAnimationEnd={() => this.setState({ animate: false })}>
                    {tabs[this.state.activeTab - 1].content}
                </div>
            </div>
        </div>)
    }

    renderTabs() {
        const items = []
        const { tabs } = this.props

        tabs.forEach(t => {
            items.push(<Tab onClick={this.selectTab} activeTab={this.state.activeTab} id={t.id}>{t.item}</Tab>)
        })

        return items
    }
}

export default Tabs