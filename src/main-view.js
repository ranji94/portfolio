import React, { Component } from 'react'
import AppHeader from './components/header'
import ContentAbout from './components/content-about/content-about'
import Menu from './components/menu'
import Separator from './components/separator'
import { loadText } from './operations'
import ContentProjects from './components/content-projects/content-projects'
import Contact from './components/contact'
import socialIconsData from './resources/social.json'

class MainView extends Component {
  constructor(props) {
    super(props)
    this.scrollToNode = this.scrollToNode.bind(this);
  }

  scrollToNode(node) {
    node.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    return (<div>
      <AppHeader scrollToAboutNode={() => this.scrollToNode(this.about)} />

      <Menu scrollToAboutNode={() => this.scrollToNode(this.about)}
        scrollToProjectsNode={() => this.scrollToNode(this.projects)}
        scrollToContactNode={() => this.scrollToNode(this.contact)} />

      <ContentAbout {...{
        header: loadText('menu-item-about'),
        content: loadText('about-description'),
        reference: (node) => this.about = node
      }} />
      <Separator headerQuote {...{
        header: loadText('quote-1'),
        subtext: loadText('quote-1-author'),
        headerStyle: 'italic',
        subtextStyle: 'italic'
      }} />
      <ContentProjects {...{
        header: loadText('menu-item-projects'),
        reference: (node) => this.projects = node
      }} />
      <Contact {...{
        socialIconsData,
        header: loadText('contact-header'),
        email: loadText('contact-email'),
        subject: loadText('contact-subject'),
        footerText: loadText('footer-text'),
        reference: (node) => this.contact = node
      }}/>
    </div>)
  }
}

export default MainView;
