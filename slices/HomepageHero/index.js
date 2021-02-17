import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { RichText } from 'prismic-reactjs'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import style from './style'
import VideoModal from '../../components/VideoModal'
import { structuredTextPropTypes, imagePropTypes } from '../../utils/prop-types'
import ContactMeButton from '../../components/ContactMeDialog/Button'

import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css"
import "../../node_modules/slick-carousel/slick/slick-theme.css"

const HomepageHero = (props) => {
  const { slice, classes } = props
  const { primary } = slice
  const [openModal, setOpenModal] = useState(false)

  console.log("slice",slice)
  const styles = {}
  if (primary.backgroundImage) {
    styles.backgroundImage = `url(${primary.backgroundImage.url})`
  }

  const openVideoDialog = () => {
    setOpenModal(true)
  }

  const closeVideoDialog = () => {
    setOpenModal(false)
  }

  const settings = {
    autoplay: true,
    dots: true,
    arrows: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 7500,
      cssEase: "ease-in"
  }

  return (
    <div className={classes.background} style={styles}>
      <div className={classes.backgroundOverlay}>
        <Grid  container direction="column" justify="center" alignItems="center">
        <Grid className={classes.slider}  xs={12} item>
          <Slider  {...settings}>
                {slice.items.map((x, i) =>
                  <div key={i}>
                    <Typography variant="h2"  className={classes.heroTitle}>
                      {RichText.asText(x.title)}
                    </Typography>
                    <Typography variant="h4" className={classes.heroSubTitle}>
                      {RichText.asText(x.subtitle)}
                    </Typography>
                </div>
                )}
            
            </Slider>
            <div className={classes.heroButton}>
              <ContactMeButton text= {RichText.asText(primary.primaryCtaButtonText)}></ContactMeButton>
            </div>
        </Grid>
       
          
        </Grid>
      </div>
      <VideoModal open={openModal} handleClose={closeVideoDialog} video={primary.vimeoLink} />
    </div>
  )
}

HomepageHero.propTypes = {
  slice: PropTypes.shape({
    primary: PropTypes.shape({
      preTitle: structuredTextPropTypes,
      title1: structuredTextPropTypes,
      title2: structuredTextPropTypes,
      point1: structuredTextPropTypes,
      point2: structuredTextPropTypes,
      point3: structuredTextPropTypes,
      backgroundImage: imagePropTypes,
      primaryCtaButtonLink: PropTypes.objectOf(PropTypes.any),
      primaryCtaButtonText: structuredTextPropTypes,
      secondaryCtaButtonText: structuredTextPropTypes,
      secondaryCtaButtonLink: PropTypes.objectOf(PropTypes.any),
      vimeoLink: PropTypes.objectOf(PropTypes.any),
      secondaryButtonType: PropTypes.bool,
    }).isRequired,
    items: PropTypes.array.isRequired,
  }).isRequired,
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default withStyles(style)(HomepageHero)