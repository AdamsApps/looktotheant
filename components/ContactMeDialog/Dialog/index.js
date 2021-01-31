import React,{useRef} from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { useLayout } from '../../../utils/layout-context'
import style from './style'
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Button from '@material-ui/core/Button'

const ContactMeDialog = ( {classes,onClose,open} ) => {

    const name = useRef('');
    const email = useRef('');
    const phone = useRef('');
    const message = useRef('');

    const handleSubmit = (event)=> {

      event.preventDefault()

      let myForm = document.getElementById('contact-form');
      let formData = new FormData(myForm)
      let encoded = new URLSearchParams(formData).toString()
      
      fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encoded
      }).then(() => {
        console.log('Form successfully submitted')
        handleClose()
      }).catch((error) =>
        alert(error))
    }

    const handleClose = () => {
      console.log(name.current?.value,email.current?.value,phone.current?.value,message.current?.value)
      onClose(1);
    };
    
    return (

      <Dialog  open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <div style={{padding: 10}}>
        <form onSubmit={handleSubmit} id="contact-form" name="contact" method="POST">
        <DialogTitle className={classes.title} id="form-dialog-title">Contact Us</DialogTitle>
        <DialogContent >
          <DialogContentText>
            Enter your details and we will get back to you ASAP!
          </DialogContentText>
          <TextField
            inputRef={name}
            autoFocus
            margin="dense"
            id="moniker"
            name="moniker"
            label="Name"
            type="text"
            fullWidth
          />
          <TextField
            inputRef={email}
            margin="dense"
            id="email"
            name="email"
            label="Email"
            type="email"
            fullWidth
          />
          <TextField
          inputRef={phone}
            margin="dense"
            id="phone"
            name="phone"
            label="Phone Number"
            type="text"
            fullWidth
          />
          <TextField
          inputRef={message}
            margin="dense"
            id="message"
            name="message"
            label="Message"
            type="text"
            fullWidth
            multiline
            rowsMax={4}
          />
          <input type="hidden" name="form-name" value="contact" />
        </DialogContent>
        <DialogActions style={{padding: 24}}>
          <Button type="submit" variant="contained" color="primary">
            SUBMIT
          </Button>
        </DialogActions>
        </form>
        </div>
        
      </Dialog>
  
    );
}

ContactMeDialog.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired
}
export default withStyles(style)(ContactMeDialog)
