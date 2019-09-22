import React from 'react'
import {useSelector} from "react-redux";
import {Offline} from "react-detect-offline";
import './error.scss'

const Error = () => {

  const errorMessage = useSelector(state => state.errorMessage)

  return (
    <div className="friend-error">
    <div><Offline>You are offline. Please check your network connection.</Offline></div>
    <div>{errorMessage && `Error: ${errorMessage}`}</div>
  </div>)
}

export default Error
