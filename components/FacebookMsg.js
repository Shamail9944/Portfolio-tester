
import React, { Component} from 'react';
import { FacebookProvider, CustomChat } from 'react-facebook';

const FacebookMsg = () => {
  return (
    <div>          
      <FacebookProvider appId="1028134491947827" chatSupport>
        <CustomChat pageId="139168849275585" minimized={true}/>
      </FacebookProvider>    
    </div>
  )
}

export default FacebookMsg