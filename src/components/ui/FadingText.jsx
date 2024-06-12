import React, { useState, useEffect } from 'react'
import './FadingText.scss'

const FadingText = ({ texts, interval }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [show, setShow] = useState(true)

  useEffect(() => {
    const changeText = () => {
      setShow(false)
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length)
        setShow(true)
      }, 1000)
    }

    const intervalId = setInterval(changeText, interval)

    return () => clearInterval(intervalId)
  }, [texts, interval])

  return (
    <div className="fade-container">
      {texts.map((text, index) => (
        <div
          key={index}
          className={`fade-text ${
            index === currentTextIndex && show ? 'show' : ''
          }`}
        >
          {text}
        </div>
      ))}
    </div>
  )
}

export default FadingText
