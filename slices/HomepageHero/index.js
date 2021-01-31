import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { RichText } from 'prismic-reactjs'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import style from './style'
import CustomLink from '../../components/CustomLink'
import VideoModal from '../../components/VideoModal'
import { structuredTextPropTypes, imagePropTypes } from '../../utils/prop-types'
import ContactMeButton from '../../components/ContactMeDialog/Button'

const HomepageHero = (props) => {
  const { slice, classes } = props
  const { primary } = slice
  const [openModal, setOpenModal] = useState(false)

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

  return (
    <div className={classes.background} style={styles}>
      <div className={classes.backgroundOverlay}>
        <Grid container direction="column" justify="center" alignItems="center">
          {/* {primary.preTitle && (
            <Typography variant="subtitle1" className={classes.preTitle}>
              {RichText.asText(primary.preTitle)}
            </Typography>
          )} */}
          {primary.title1 && (
            <Typography variant="h1" className={classes.heroTitle}>
              {RichText.asText(primary.title1)}
            </Typography>
          )}
          {primary.title2 && (
            <Typography variant="h2" className={classes.heroSubTitle}>
              {RichText.asText(primary.title2)}
            </Typography>
          )}
          <div className={classes.heroButton}>
            <ContactMeButton text= {RichText.asText(primary.primaryCtaButtonText)}></ContactMeButton>
            {!primary.secondaryButtonType &&
              <CustomLink link={primary.primaryCtaButtonLink}>
                <Button variant="outlined">
                  {RichText.asText(primary.secondaryCtaButtonText)}
                </Button>
              </CustomLink>
            }
            {primary.secondaryButtonType &&
              <Button variant="outlined" onClick={openVideoDialog}>
                {RichText.asText(primary.secondaryCtaButtonText)}
              </Button>
            }
          </div>
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