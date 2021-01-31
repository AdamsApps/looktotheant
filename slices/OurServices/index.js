import React from 'react';
import { array, shape } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import Grid from '@material-ui/core/Grid'
import { Container, Typography } from '@material-ui/core'
import style from './style'
import { withStyles } from '@material-ui/core/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useMediaQuery from '../../utils/media-query'

const renderItem = (text, index)=> {
  return <Grid spacing={3}  alignItems="center" item key={index} container direction="row">
                          <Grid item><FontAwesomeIcon size="lg" icon={['far', 'check-square']} /></Grid>
                          <Grid item><h3>{text}</h3></Grid>
                   </Grid>
}

const OurServices = ({ slice, classes }) =>  { 
  
  
  let isPageSmall = useMediaQuery('(max-width: 600px)')
  
  
  return (

  <Grid container direction="column" className={classes.container}>
    <a name="services">
      
      </a>    
      <h2 className={classes.title}>{slice.primary.title}</h2>
    

{
  
!isPageSmall &&
<Grid justify="center" spacing={5} container item xs={12} sm={12} md={12} direction="row">
      <Grid item>
      {
           slice.items.map((field,index) => {
                  return !isPageSmall && index < 4 ?  
                  renderItem(field.service,index)
                   : ""
           })
         }
      </Grid>
        <Grid item>
        {
           slice.items.map((field,index) => {
            return !isPageSmall && index > 3 ?  
            renderItem(field.service,index)
             : ""
           })
         }
        </Grid>
        
       
    </Grid>
}
    {
      
        isPageSmall && 
        <Grid justify="center" spacing={5} container item xs={12} sm={12} md={12} direction="row">
        <Grid>
          {
              slice.items.map((field,index) => {
                return renderItem(field.service,index)
              })
          }
        </Grid>
        </Grid>
      
    }
  </Grid>
)};

OurServices.propTypes = {
  slice: shape({
    primary: shape({
      title: String.isRequired,
    }).isRequired,
  }).isRequired,
};

export default withStyles(style)(OurServices)

