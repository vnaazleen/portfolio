import React from 'react';
import styled from 'styled-components';
import './App.css'

const Progress = ({done}) => {
  const [style, setStyle] = React.useState({});
  
  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`
    }
    
    setStyle(newStyle);
  }, 200);
  
  return (
    <div className="progress">
      <div className="progress-done" style={style}>
      </div>
    </div>
  )
}

export default Progress;