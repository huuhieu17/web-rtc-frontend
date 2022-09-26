import React, { useContext } from 'react'
import { SocketContext } from '../Context'

const VideoPlayer = () => {
    const { call,
        callAccepted,
        myVideo,
        userVideo,
        stream,
        name,
        setName,
        callEnded,
        me,
        callUser,
        leaveCall,
        answerCall,} = useContext(SocketContext)
  return (
    <div className='flex flex-wrap w-full gap-5 text-white'>
        {stream && (
            <div className='flex flex-col border'>
                <video playsInline muted ref={myVideo} autoPlay></video>
                <div className='text-sm'>{name || "Name"}</div>
            </div>
        )}
        {callAccepted && !callEnded && (
             <div className='flex flex-col border'>
             <video playsInline muted ref={userVideo} autoPlay></video>
             <div className='text-sm'>{call.name || "Name"}</div>
              </div>
        )}
    </div>
  )
}

export default VideoPlayer