const styles = (theme) => ({
  container: {
    backgroundColor: "#F6F6F6",
    paddingTop: 40,
    paddingBottom: 65,
    justify: "center",
    alignItems: "center"
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
  title: {
    //marginBottom: 0
  },
  icon: {
    fontSize: 30,
    color: "red"
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
