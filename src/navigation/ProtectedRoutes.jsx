import React from 'react'
import UseAuthe from "../custom-hooks/UseAuthe"
import { Redirect } from 'react-router-dom'

const ProtectedRoutes = ({children}) => {

    const { currentUser } = UseAuthe()
  return currentUser ? children : <Redirect to="/login" />
}

export default ProtectedRoutes