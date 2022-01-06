import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "@emotion/styled"

const ServiceSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
`

const ImageBackground = styled(BackgroundImage)`
  height: 480px;
  max-width: 680px;
  margin: 0 auto;
  transform: rotate(8deg);
  @media (min-width: 768px) {
    width: 110%;
    height: 500px;
    margin-bottom: 0.5rem;
  }
`

const ForkLiftImage = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "8.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const TextoImagen = styled.div`
    color: var(--orange-primary);
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
    transform: rotate(-8deg);

    h1 {
      font-size: var(--lg);
      margin: 0;
      @media (min-width: 768px) {
        font-size: 10rem;
      }
      @media (min-width: 992px) {
        font-size: 10rem;
      }
    }
    }
  `
  return (
    <ServiceSection id="inicio">
      <ImageBackground fadeIn="soft" tag="section" fluid={image.sharp.fluid}>
        <TextoImagen>
          <h1>Lift with us</h1>
        </TextoImagen>
      </ImageBackground>
    </ServiceSection>
  )
}

export default ForkLiftImage
