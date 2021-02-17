const styles = (theme) => ({
  container: {
    paddingTop: 80,
    paddingBottom: 80
  },
  grid: {
    alignItems: "flex-start",
    [theme.breakpoints.down('sm')]: {
      alignItems: "center",
      justify: "center"
     },
    "& h1": {
      color: "#5D5E60",
      [theme.breakpoints.down('sm')]: {
        textAlign:"center",
       },
      marginTop: 0,
      verticalAlign: "text-top",
      lineHeight: '48px'
    }
  },
    image: {
     width: 300,
     height: 300,
     marginRight: 50,
     [theme.breakpoints.down('sm')]: {
      marginRight: 0,
      marginBottom: 20
     },
     boxShadow: '0 20px 40px rgb(0 0 0 / 30%);'
    },
    line: {
      content: '',
      display: 'flex',
      width: 100,
      height: 3,
      background: theme.palette.primary.main,
      marginTop: 20,
      marginBottom: 20
    }
  })
  export default styles
  