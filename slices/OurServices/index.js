import React from 'react';
import { array, shape } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import Grid from '@material-ui/core/Grid'
import { Container, Typography } from '@material-ui/core'
import style from './style'
import { withStyles } from '@material-ui/core/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const renderItem = (text, index)=> {
  return <Grid spacing={3} justify="flex-start" alignItems="center" item key={index} container direction="row">
                          <Grid item><FontAwesomeIcon size="lg" icon={['far', 'check-square']} /></Grid>
                          <Grid item><h3>{text}</h3></Grid>
                   </Grid>
}

const OurServices = ({ slice, classes }) => (

  <Grid container direction="column" className={classes.container}>
    <a name="services">
      
      </a>    
      <h2 className={classes.title}>{slice.primary.title}</h2>
    <Grid justify="center" spacing={5} container item xs={12} sm={12} md={12} direction="row">
      <Grid item>
      {
           slice.items.map((field,index) => {
                  return index < 4 ?  
                  renderItem(field.service,index)
                   : ""
           })
         }
      </Grid>
        <Grid item>
        {
           slice.items.map((field,index) => {
            return index > 3 ?  
            renderItem(field.service,index)
             : ""
           })
         }
        </Grid>
       
    </Grid>
  </Grid>
);

OurServices.propTypes = {
  slice: shape({
    primary: shape({
      title: String.isRequired,
    }).isRequired,
  }).isRequired,
};

export default withStyles(style)(OurServices)

