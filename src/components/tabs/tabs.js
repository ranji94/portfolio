import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styles from '../../styles/main.scss'
import { Tab } from './tab'
import { setAnimateSkillbars } from '../../redux/actions'

export const Tabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(1)
    const dispatch = useDispatch()

    function selectTab(id) {
        setActiveTab(id)
        dispatch(setAnimateSkillbars(true))
    }

    function renderTabs() {
        const items = []

        tabs.map(({ id, item }) => {
            items.push(<Tab onClick={() => selectTab(id)} activeTab={activeTab} id={id}>{item}</Tab>)
        })

        return items
    }

    return (<div className={styles['tabs-container']}>
        <div className={styles['tabs-switcher']}>
            {renderTabs()}
        </div>
        <div className={styles['tab-content-container']}>
            <div className={styles['tab-content']}>
                {tabs[activeTab - 1].content}
            </div>
        </div>
    </div>)
}