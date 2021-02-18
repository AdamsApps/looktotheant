import React from 'react'
import PropTypes from 'prop-types'
import Header from 'next/head'

const Head = ({ data }) => {
  return (
    <Header>


      {data &&
        <>
          {data.meta_title && <title>{data.meta_title}</title>}
          {data.meta_description && <meta name="description" content={data.meta_description} />}
          <meta property="og:image" content="https://images.prismic.io/personal-training-jerusalem/9ce461e0-ee16-42cf-8de7-244384911695_Bethany066.jpg?auto=compress,format" />
          <meta property="og:type" content="website"/>
          <meta property="og:url" content="https://www.personaltrainingjerusalem.com" />
          <meta property="og:title" content="Your fitness, your way"/ >
          <meta property="og:description" content="A safe, personaliized fitness experience, tailored to your goals!"/>
        </>
      }
    </Header>
  )
}

Head.propTypes = {
  data: PropTypes.objectOf(PropTypes.any)
}

export default Head
