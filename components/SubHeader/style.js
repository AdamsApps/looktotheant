const styles = (theme) => ({
  subHeader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 15,
    background: 'linear-gradient(90deg, rgba(65,150,203,1) 0%, rgba(235,226,188,1) 100%);',
    color: '#fff',
    '& p': {
      fontSize: 12,
    },
    '& button': {
      height: 'auto',
      padding: '3px 20px',
      fontSize: 10,
      borderWidth: 1,
      minWidth: 'fit-content',
      marginLeft: 16,
      '&:hover': {
        borderWidth: 1
      }
    },
  },
})

export default styles
