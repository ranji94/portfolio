import React, { Component } from 'react'
import { AppHeader } from './components/header'
import ContentAbout from './components/content-about/content-about'
import Menu from './components/menu'
import Separator from './components/separator'
import { loadText } from './operations'
import MENU_ITEMS from './resources/menu-items.json'

class MainView extends Component {
  render() {
    return (<div>
      <AppHeader />
      <Menu />
      <ContentAbout {...{
        headerId: '#about',
        header: loadText('menu-item-about', MENU_ITEMS),
        content: loadText('about-description')
      }} />
      <Separator headerQuote {...{
        header: loadText('quote-1'),
        subtext: loadText('quote-1-author'),
        headerStyle: 'italic',
        subtextStyle: 'italic'
      }} />
      {/* <Content {...{
        headerId: '#projects',
        header: loadText('menu-item-projects', MENU_ITEMS),
        content: loadText('projects-description')
      }} /> */}
    </div>)
  }
}

export default MainView;
