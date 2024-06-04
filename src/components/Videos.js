import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Video from './Video'
function Videos() {
  let [videos, setVideos] = useState(null)
  let [video,setVideo] = useState(null)
  //useEffect:
  useEffect(function () {
    //fetch api
    //row data: header, content(text->object), request, status=200,
    fetch('https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json').then((response) => response.json()).then(function (data) {
      setVideos(data)

      console.log(data) //array of objects
    })
  }, [])

  const play = (e)=>{
    let a = e.currentTarget.getAttribute('video')
    setVideo(a)
    console.log(e.currentTarget.getAttribute('video'))
  }
  return (
    <div>
      <div className='container pt-4'>
        <h3>Videos List</h3>
        <div className='row'>
          <div className='col-md-6'>
          <div className='row'>
          {(videos != null) && videos.map(function (item) {
            return <div className='col-md-4'>
              <div className='nav-link'>
                <div className='card mb-4'>
                  <div className='card-body p-0'>
                    <img src={item.thumbnailUrl} className='img-fluid' />
                    <div className='p-2'>
                      <p>{item.title}</p>
                      <p>{item.duration}</p>
                      <p>{item.author}</p>
                      <button video={item.videoUrl} onClick={play}>Play</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          })}
        </div>
          </div>
          <div className='col-md-6'>
          <Video video={video} />
          </div>
        </div>

      </div>
    </div>
  )
}
export default Videos
