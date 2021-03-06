import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import GithubLogo from '../../../../images/icons/github.svg'
import NetlifyLogo from '../../../../images/icons/netlify-logo.svg'
import GatsbyLogo from '../../../../images/icons/gatsby-logo.svg'
import "../styles/Footer.sass"
import prose from '../../../../assets/prose'

const MenuList = props => {
  return (
    <div className="menu-list">
      <div className="menu-list--title">{props.title}</div>
      {props.items.map((item, index) => {
        if (item.email) {
          return (
            <a key={index} href="mailto:khalilstemmler@gmail.com">
              {item.name}
            </a>
          )
        } else if (item.external) {
          return (
            <a target="blank" key={index} href={item.url}>
              {item.name}
            </a>
          )
        } else
          return (
            <Link style={{ textDecoration: 'none' }} to={item.url} key={index}>
              {item.name}
            </Link>
          )
      })}
    </div>
  )
}

const Menu = () => {
  return (
    <div className="menu-list--container">
      <MenuList
        title={'Menu'}
        items={[
          { name: 'About', url: '/about' },
          { name: 'Articles', url: '/articles' },
          { name: 'Blog', url: '/blog' },
          { name: 'Portfolio', url: '/portfolio' },
          { name: 'Wiki', url: '/wiki' }
          // TODO: Put the rest of the navigation links here
        ]}
      />
      <MenuList
        title={'Contact'}
        items={[
          {
            name: 'Email',
            url: 'khalilstemmler@gmail.com',
            email: true,
          },
          {
            name: '@stemmlerjs',
            url: 'https://twitter.com/stemmlerjs',
            external: true,
          },
        ]}
      />

      <MenuList
        title={'Social'}
        items={[
          {
            name: 'GitHub',
            url: 'https://github.com/stemmlerjs',
            external: true,
          },
          {
            name: 'Twitter',
            url: 'https://twitter.com/stemmlerjs',
            external: true,
          },
          {
            name: 'Instagram',
            url: 'https://instagram.com/stemmlerjs',
            external: true,
          },
          {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/khalilstemmler/',
            external: true,
          },
        ]}
      />
    </div>
  )
}

const FooterBanner = () => (
  <div className="footer--banner flex align-center justify-center wrap">© khalilstemmler • 2019 • Built with 
    <img src={GatsbyLogo}/> • Open sourced on 
    <img src={GithubLogo}/> • Deployed on 
    <img src={NetlifyLogo}/></div>
)

const Footer = () => (
  <>
    <footer className="footer">
      <div className="footer--description">{ prose.main.description }</div>
      <Menu/>
    </footer>
    <FooterBanner/>
  </>
)

export default Footer;