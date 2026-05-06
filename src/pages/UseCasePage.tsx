import React from 'react'
import {useNavigate, useParams} from 'react-router-dom'

const UseCasePage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  return (
    <div>

    </div>
  )
}

export default UseCasePage