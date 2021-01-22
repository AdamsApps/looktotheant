const styles = (theme) => ({
  container: {
    paddingTop: 80,
    paddingBottom: 80
  },
  grid: {
    //backgroundColor: 'blue',
    alignItems: "flex-start",
    "& h1": {
      marginTop: 0,
      verticalAlign: "text-top",
      lineHeight: '48px'
    }
  },
    image: {
     width: 400,
     height: 400,
     padding: 0,
     boxShadow: '0 20px 40px rgb(0 0 0 / 30%);'
    },
    line: {
      content: '',
      display: 'block',
      width: 100,
      height: 3,
      background: theme.palette.primary.main,
      marginTop: 20,
      marginBottom: 5
    }
  })
  export default styles
  