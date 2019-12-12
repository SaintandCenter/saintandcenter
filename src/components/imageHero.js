import React, { useEffect, useRef } from "react"
import Div100vh from "react-div-100vh"
import styled from "styled-components"
import { device } from "../utils/devices"

const Wrapper = styled.section`
  position: relative;

  img {
    height: 100vh;
    width: 100%;
    object-fit: cover;
    object-position: 50% 50%;
    margin: 0;
  }
`

const Text = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  @media ${device.laptop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }

  h2 {
    color: white;
    font-size: 57px;
    font-weight: 300;
    text-align: center;
  }
`

const useScrollHandler = handler => {
  useEffect(() => {
    window.addEventListener("scroll", handler)
    return () => {
      window.removeEventListener("scroll", handler)
    }
  }, [])
}

const Curtain = props => {
  const ref = useRef()
  const handler = () => {
    if (window.scrollY < window.innerHeight) {
      ref.current.style.transform = `translateZ(0) translateY(-${window.scrollY}px)`
    } else {
      ref.current.style.transform = `translateZ(0) translateY(-${window.innerHeight}px)`
    }
  }
  useScrollHandler(handler)
  return <div ref={ref} {...props} />
}

const ImageHero = ({ src, alt }) => {
  return (
    <Curtain className="curtain first">
      {typeof document !== "undefined" && (
        <Div100vh>
          <Wrapper>
            <img src={src} alt={alt} />
            <Text>
              <h2>your higher self</h2>
              <h2>without the high</h2>
            </Text>
          </Wrapper>
        </Div100vh>
      )}
    </Curtain>
  )
}

export default ImageHero
