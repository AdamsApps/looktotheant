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
          <meta property="fb:app_id" content="850055168873710"/>
          <meta property="og:image" content="https://images.prismic.io/personal-training-jerusalem/9ce461e0-ee16-42cf-8de7-244384911695_Bethany066.jpg?auto=compress,format&fbrefresh&query=1" />
          <meta property="og:type" content="article"/>
          <meta property="og:url" content="https://www.personaltrainingjerusalem.com" />
          <meta property="og:title" content="Your fitness, your way"/ >
          <meta property="og:description" content="A safe, personalized fitness experience, tailored to your goals!"/>
        </>
      }
    </Header>
  )
}

Head.propTypes = {
  data: PropTypes.objectOf(PropTypes.any)
}

export default Head
