import React from 'react'
import PropTypes from 'prop-types'
import { RichText } from 'prismic-reactjs'
import { withStyles } from '@material-ui/core/styles'
import { Container, Typography } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import { useLayout } from '../../utils/layout-context'
import CustomLink from '../CustomLink'
import style from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = ({ classes }) => {
  const { layout } = useLayout();

  return (
          <Grid
          className={classes.footer}
            container
            spacing={6}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid justify="center" alignItems="center" item xs={12} sm={4} md={4} container direction="column">
            
              <Typography className="title">{RichText.asText(layout.contact_us_title)}</Typography>
              <div className="address">
              
                {layout.contact_details.map((contact, index) => {

                  let font;
                  let icon;
                  let href;
                  if (index === 0){
                      font = "far"
                      icon = "envelope"
                      href= `mailto:${RichText.asText(contact.contact_details1)}`
                  }else {
                      font = "fas"
                      icon = "phone"
                    
                      href=`tel:${RichText.asText(contact.contact_details1)}`
                  }
      

                  return (<div className={classes.icon} key={index}>
                    <FontAwesomeIcon  size="lg" icon={[font, icon]} />
                    <a className={classes.bareLink} href={href}>{RichText.render(contact.contact_details1)}</a>
                    </div>)
                })}
              </div>
              <img src={layout.logo1.url} alt="" className="logoImg" />
            </Grid>
          </Grid>
 
  )
}

Footer.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
}
export default withStyles(style)(Footer)
