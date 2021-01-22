const styles = (theme) => ({
  // headerBg: {
  //   backgroundImage: `url('/headertopbg.png')`,
  //   backgroundPosition: 'center',
  //   backgroundSize: 'cover',
  //   position: 'relative',
  //   zIndex: 10
  // },
  sticky: {
      position: 'sticky',
      top:0,
      zIndex: 100,
      margin: 0,
      width: '100%',
      backgroundColor: 'white'
  },
  header: {
    background: 'white',
    display: 'flex',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    '& .logo': {
      width: 300
    },
    '& img': {
      marginLeft: theme.spacing(2),
      display: 'block'
    },
    '& .company':{
     // fontFamily: '',
      flexDirection: 'column',
      marginLeft: theme.spacing(2),
      display: 'flex',
      color: 'grey',
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    '& .menu': {
      flex: 1,
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginRight: theme.spacing(2),
      '& a.menuLink': {
        //color: theme.palette.primary.main,
        color: 'grey',
        fontFamily: 'Raleway',
        fontSize: 18,
        fontWeight: 800,
        margin: theme.spacing(0, 4),
        textDecoration: 'none',
        textTransform: 'uppercase'
      },
      '& a.dark': {
        color: '#4c4c78',
      },
      '& button': {
        fontSize: 14,
        width: 'fit-Content',
        minWidth: 'unset',
        marginLeft: theme.spacing(2),
      },
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    '& .mobileMenu': {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      display: 'none',
      [theme.breakpoints.down('sm')]: {
        display: 'flex',
      },
      '& .drawerBtn': {
        background: '#fff',
      },
    },
  },
  drawerMenu: {
    '& a': {
      color: '#4c4c78',
      fontFamily: 'Raleway',
      fontSize: 14,
      fontWeight: 800,
      marginBottom: theme.spacing(2),
    },
  },
  sidebar: {
    '& .list': {
      marginTop: 50,
      '& .listItem': {
        width: 210,
      },
    },
    '& .button': {
      marginLeft: 16,
    },
  },
})

export default styles
