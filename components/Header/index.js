import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import { RichText } from 'prismic-reactjs'
import Button from '@material-ui/core/Button'
import Link from 'next/link'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Drawer from '@material-ui/core/Drawer'
import style from './style'
import { useLayout } from '../../utils/layout-context'
import CustomLink from '../CustomLink'
import {useRouter} from 'next/router'
import clsx from 'clsx'
import Subheader from '../SubHeader'
import ContactMeButton from '../ContactMeDialog/Button'

const Header = ({ classes }) => {
  const [open, setOpen] = React.useState(false)
  const {layout, headerColor} = useLayout()
  const router = useRouter()

  const handleSidebarOpen = () => {
    setOpen(true)
  }

  const handleSidebarClose = () => {
    setOpen(false)
  }

  const clickItem = (link) => {
    location.href = link;
    setOpen(false)
  }

  return (
    <div className={classes.sticky}>
      <Subheader/>
      <Container className={classes.header}>
  
        <Link href="/">
          <a>
           
              <img src={layout.colored_logo.url} className="logo" alt="" />
           
          </a>
        </Link>
        <div className="menu">
          {
          layout.menu_items.map((menu_item, key) =>   (
            <Link 
              as={key === 0 ? "#about" : "#services"}
              href={key === 0 ? "#about" : "#services"}
              key={key}>
              <a href="#about" className={clsx('menuLink', {
                //'dark': headerColor
              })}>
                {RichText.asText(menu_item.link_title)}
              </a>
            </Link>
          ))
          
          }
          <ContactMeButton {...{size:"small", text:RichText.asText(layout.give_button_text)}}></ContactMeButton>
        </div>
        <div className="mobileMenu">
          <IconButton
            aria-label="Drawer"
            component="span"
            className="drawerBtn"
            aria-owns={open ? 'mouse-over-popover' : undefined}
            aria-haspopup="true"
            onClick={handleSidebarOpen}
          >
            <MenuIcon />
          </IconButton>
        </div>
        <Drawer
          anchor="right"
          open={open}
          onClose={handleSidebarClose}
          className={classes.sidebar}
        >
          <List className="list">
            {layout.menu_items.map((menu_item, index) => (
              <ListItem button key={index} className="listItem" onClick={() => clickItem(index === 0 ? "#about" : "#services")}>
                <ListItemText primary={RichText.asText(menu_item.link_title)} />
              </ListItem>
            ))}
          </List>
          <ContactMeButton {...{size:"small", text:RichText.asText(layout.give_button_text)}}></ContactMeButton>
        </Drawer>
        
      </Container>
      <Subheader/>
      </div>
  )
}

Header.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired
}

export default withStyles(style)(Header)
