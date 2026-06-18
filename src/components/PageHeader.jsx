import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import '../styles/PageHeader.css';

const PageHeader = ({title}) => {
  return (
    <div className='page-header'>
        <h1>{title}<FontAwesomeIcon icon={faAnglesRight} /></h1>
    </div>
  )
}

export default PageHeader