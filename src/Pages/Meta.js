import React from 'react'
import {Helmet} from 'react-helmet'

const Meta = ({title, description, keywords}) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keyword" content={keywords} />
        </Helmet>
    )
}

Meta.defaultProps ={
  title: "Vestedmoney",
  description: "Invest for a comfortable tomorro",
  keywords:"investment , savings, loan, agriculture, real estate"
}

export default Meta
