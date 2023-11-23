import { Grid } from '@mui/material'
import React from 'react'
import BuildApplication from './BuildApplication'

function Applications({applications}) {
  return (
    <div className='applications'>
      <Grid container spacing={2}>
        {applications.map((application, index) => (
          <BuildApplication application={application} key={index}/>
        ))}
      </Grid>
    </div>
  )
}

export default Applications