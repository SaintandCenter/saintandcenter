import React from 'react'
import styled from 'styled-components'
import { device } from '../utils/devices'

const Block = styled.section`
  margin: 2rem 0;
  padding: 2rem 5vw;
  background: ${props => props.bg};
  color: ${props => props.color};

  @media ${device.laptop}{
    margin: 4rem 0;
  }

  span {
    display: block;
    text-align: center;
    font-size: 24px;
    font-weight: 400;
    text-transform: uppercase;
    margin-top: 2rem;
  }
`;

const Title = styled.div`
  text-transform: uppercase;
  position: relative;
  text-align: center;

  h2 {
    font-size: 5vw;
    font-weight: 300;
    margin: 0 0 2rem;
  }
`;

const Text = styled.div`
  font-size: 18px;
  font-weight: 200;
  text-align: center;
  line-height: 24px;

  @media ${device.laptop}{
    font-size: 30px;
    line-height: 48px;
  }
`;

const Image = styled.div`
  width: 50vw;
  margin: 2rem auto 0;

  @media ${device.laptop}{
    width: 20vw;
    min-width: 300px;
    margin: 2rem auto;
  }

  img {
    width: 100%;
    margin: 0 auto;
  }
`;

const TextBlockWithImage = ({bgColor, textColor, children, image, title, reverse, actionText}) => (
  <Block bg={bgColor} color={textColor} reverse={reverse}>
    <Image><img src={image} alt='placer' /></Image>
    <Title><h2>{title}</h2></Title>
    <Text>
      {children}
    </Text>
    <span>{actionText} ></span>
  </Block>
);

export default TextBlockWithImage;
