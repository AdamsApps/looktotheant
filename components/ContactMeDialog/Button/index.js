import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { useLayout } from '../../../utils/layout-context'
import style from './style'
import ContactMeDialog from '../Dialog'
import Button from '@material-ui/core/Button'

const ContactMeButton = ({classes,text,size}) => {

    console.log("text",text,"classes",classes)
    const {layout} = useLayout()

    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = (value) => {
      setOpen(false);
    };
  
    return (
      <div>
        <Button variant="contained" color="primary" size={size} onClick={handleClickOpen}>{text}</Button>
        <ContactMeDialog selectedValue={'1'} open={open} onClose={handleClose} />
      </div>
    );
  }

  ContactMeButton.propTypes = {
    classes: PropTypes.objectOf(PropTypes.any).isRequired,
  }
  export default withStyles(style)(ContactMeButton)