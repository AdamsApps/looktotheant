import React from 'react'
import PropTypes from 'prop-types'
import Header from '../Header'
import Footer from '../Footer'
import { useLayout } from '../../utils/layout-context';

const Layout = ({ children }) => {


  const { layout } = useLayout();

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Layout
