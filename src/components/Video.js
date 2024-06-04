import React from 'react'
import { useParams } from 'react-router-dom'

export default function Video(prop) {
  //let {id} =  useParams()

  return (
    <div>
        <div className='border p-4 rounded mt-5'>
        <h1>Video detail page</h1>
        <video src={prop.video} width={600} height={300} controls autoplay muted></video>
        <p>loesdfsdf</p>
        </div>
    </div>
  )
}
