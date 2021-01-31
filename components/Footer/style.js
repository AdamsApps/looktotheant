const styles = (theme) => ({
  icon: {
    color: "white",
    textAlign: "center"
  },
  footer: {
    justify: "center",
    alignItems: "center",
    background: 'linear-gradient(90deg, rgba(65,150,203,1) 0%, rgba(235,226,188,1) 100%);',
    padding: theme.spacing(2),
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    '& .title': {
      marginBottom: 16,
      textAlign: "center",
      color: '#ffffff',
      textTransform: 'uppercase',
      fontWeight: 700,
      fontSize: 20,
      [theme.breakpoints.down('xs')]: {
        textAlign: 'center',
      },
    },
    '& .address p': {
      textAlign: "center",
      color: '#ffffff',
      fontSize: 16,
      fontWeight: 500,
      [theme.breakpoints.down('xs')]: {
        textAlign: 'center',
      },
    },
    '& .logoImg': {
      textAlign: "center",
      width: 100,
      [theme.breakpoints.down('xs')]: {
        margin: '16px auto 16px',
      },
    }
  }
})

export default styles
