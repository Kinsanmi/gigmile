import React from 'react'
import { Request } from '../Component/Request/Request'
import { Activity } from '../Component/Activity/Activity'

export const Dashboard = () => {
  return (
    <a href='/dashboard' className='services'>
        <Request />
        <Activity />
    </a>
  )
}
