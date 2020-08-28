import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from '../../styles/main.scss'
import Tab from './tab'
import { setAnimateSkillbars } from '../../redux/actions'

class Tabs extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 1 }
    }

    selectTab = (id) => {
        const { setAnimateSkillbars } = this.props

        this.setState({ activeTab: id })
        setAnimateSkillbars(true)
    }

    render() {
        const { tabs } = this.props

        return (<div className={styles['tabs-container']}>
            <div className={styles['tabs-switcher']}>
                {this.renderTabs()}
            </div>
            <div className={styles['tab-content-container']}>
                <div className={styles['tab-content']}>
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

const mapStateToProps = (state) => {
    const { animateSkillbars } = state.animateSkillbars || false
    return { animateSkillbars }
}

export default connect(
    mapStateToProps, 
    { setAnimateSkillbars }
)(Tabs)