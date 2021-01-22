const styles = (theme) => ({
    container: {
    backgroundColor: "#F6F6F6",
      paddingTop: 80,
      paddingBottom: 80,
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
    