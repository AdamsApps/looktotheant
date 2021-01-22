import React from 'react';
import { array, shape } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import Grid from '@material-ui/core/Grid'
import { Container, Typography } from '@material-ui/core'
import style from './style'
import { withStyles } from '@material-ui/core/styles'

const OurServices = ({ slice, classes }) => (


  <Grid container direction="column" className={classes.container}>
    {
      slice.primary.title &&
      <RichText render={slice.primary.title}/>
    }
    {
      slice.primary.description &&
      <RichText render={slice.primary.description}/>
    }
    <Grid justify="center" spacing={10} container item xs={12} sm={12} md={12} direction="row">
       <Grid item>
         {
           slice.items.map((field,index) => {
                  return index < 4 ?   <RichText key={index} render={field.service}/> : ""
           })
         }
       </Grid>
       <Grid item>
       {
           slice.items.map((field,index) => {
                  return index > 3 ?   <RichText key={index} render={field.service}/> : ""
           })
         }
       </Grid>
    </Grid>
  </Grid>
);

OurServices.propTypes = {
  slice: shape({
    primary: shape({
      title: array.isRequired,
    }).isRequired,
  }).isRequired,
};

export default withStyles(style)(OurServices)

