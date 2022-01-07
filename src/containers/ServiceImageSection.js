import React, { useRef } from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "@emotion/styled"

const ServiceSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
`

const ImageBackground = styled(BackgroundImage)`
  height: 100vh;
  @media (min-width: 768px) {
    height: 700px;
    margin-bottom: 1rem;
  }
  :after{
    filter: brightness(60%);
  }
  
`

const ServiceImageSection = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "man-smilling.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const TextoImagen = styled.div`
    color: var(--white);
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
    h1 {
      font-size: var(--lg);
      margin: 0;
      text-align: center;
      line-height: 1;
      @media (min-width: 768px) {
        font-size: 10rem;
      }
      @media (min-width: 992px) {
        font-size: 10rem;
      }
    }
    
  `
  const bgRef = useRef();
  return (
    <ServiceSection>
      <ImageBackground 
      ref={bgRef}
      onStartLoad={() => bgRef.current.selfRef.classList.toggle("loading")}
      onLoad={() => bgRef.current.selfRef.classList.toggle("loading")} 
      tag="section" 
      fluid={image.sharp.fluid}>
        <TextoImagen>
          <h1 >
            Servicio <br /> 24 / 7
          </h1>
        </TextoImagen>
      </ImageBackground>
    </ServiceSection>
  )
}

export default ServiceImageSection
