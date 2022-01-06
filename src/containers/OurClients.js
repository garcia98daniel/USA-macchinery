import React from "react"
import styled from "@emotion/styled"
import purikor from "../images/purikor.png"
import altamira from "../images/altamira.png"
import hidrocontrol from "../images/hidrocontrol.png"
import aquapak from "../images/aquapak.png"
import kassai from "../images/kassai.png"

const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 4rem;
  h1 {
    margin: 0;
    text-align: center;
    line-height: 1;
    font-size: var(--lg);
    color: var(--warn-black);
  }
  div {
    margin: 2rem;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  img {
    width: 9rem;
  }
  @media (min-width: 768px) {
    padding: 5rem 0 5rem 0;
    div {
      justify-content: space-around;
    }
    img {
      transform: scale(2);
    }
    h1 {
      margin-bottom: 5rem;
    }
  }
`

const OurClients = () => {
  return (
    <Container>
      <section id="clientes">
        <h1>
          Nuestros <br /> Clientes
        </h1>
        <div>
          <img src={purikor} alt="purikor" />
          <img src={altamira} alt="altamira" />
          <img src={hidrocontrol} alt="aquapark" />
          <img src={aquapak} alt="kassai" />
          <img src={kassai} alt="hidrocontrol" />
        </div>
      </section>
    </Container>
  )
}

export default OurClients
