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



    const handleClose = () => {
      console.log(name.current?.value,email.current?.value,phone.current?.value,message.current?.value)
      onClose(1);
    };
    
    return (

      <Dialog  open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <div style={{padding: 10}}>
        <DialogTitle className={classes.title} id="form-dialog-title">Contact Me</DialogTitle>
        <DialogContent >
          <DialogContentText>
            Enter your details and I will get back to you ASAP!
          </DialogContentText>
          <TextField
            inputRef={name}
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
          />
          <TextField
            inputRef={email}
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
          />
          <TextField
          inputRef={phone}
            margin="dense"
            id="phone"
            label="Phone Number"
            type="text"
            fullWidth
          />
          <TextField
          inputRef={message}
            margin="dense"
            id="message"
            label="Message"
            type="text"
            fullWidth
            multiline
            rowsMax={4}
          />
        </DialogContent>
        <DialogActions style={{padding: 24}}>
          <Button onClick={handleClose} variant="contained" color="primary">
            SUBMIT
          </Button>
        </DialogActions>
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
