import React from 'react';
import { array, shape } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import Grid from '@material-ui/core/Grid'
import { Container, Typography } from '@material-ui/core'

const MySlice = ({ slice }) => (

    <Container>
      <Grid container spacing={4} className="linksSections">
        <Grid item xs={12} sm={4} md={4} container direction="column">
          {slice.primary.image && <img src={slice.primary.image.url}/>}
        </Grid>
        <Grid item xs={12} sm={8} md={8} container direction="column">
          {
            slice.primary.title &&
              <RichText render={slice.primary.title} />
          }
           {
            slice.primary.description &&
              <RichText render={slice.primary.description} />
          }
        </Grid>
        
      </Grid>
    </Container>
);

MySlice.propTypes = {
  slice: shape({
    primary: shape({
      title: array.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MySlice;
