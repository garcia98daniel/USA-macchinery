import React from "react"
import styled from "@emotion/styled"
import ServiceItem from "../components/ServiceItem"

import truckIcon from "../icons/truck.svg"
import toolsIcon from "../icons/tools.svg"
import threadIcon from "../icons/thread.svg"
import bateryIcon from "../icons/batery.svg"

import image1 from "../images/man-working.jpg"
import image2 from "../images/bar.png"
import image3 from "../images/bateries.png"
import image4 from "../images/reparing.jpg"

const ListServices = styled.ul`
  max-width: 1200px;
  width: 90%;
  margin: 4rem auto 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 3rem;
  overflow-x: scroll;
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 235px);
    overflow: hidden;
    justify-content: center;
  }
`

const ServiceList = () => {
  const title1 = "Venta/Renta"
  const titlebr1 = "de Montacargas"
  const description1 =
    "Con nosotros puedes rentar/comprar nuestros modelos de montacargas nuevos, seminuevos y usados."
  const title2 = "Venta de"
  const titlebr2 = "Refacciones"
  const description2 =
    "Contamos con la mejor calidad en piezas para la reparación y mantenimiento de tu montacargas."
  const title3 = "Regeneración"
  const titlebr3 = "de Baterías"
  const description3 =
    "Utilizando una tecnología de última generación, duplicamos la vida de tu batería de montacargas."
  const title4 = "Pólizas de"
  const titlebr4 = "Mantenimiento"
  const description4 =
    "Te brindamos el mantenimiento a tus montacargas con un tecnológico en planta o recibimos tu equipo en nuestro establecimiento."

  return (
    <ListServices>
      <ServiceItem
        number={"01"}
        imgSrc={image1}
        title={title1}
        titlebr1={titlebr1}
        description={description1}
        icon={truckIcon}
      />
      <ServiceItem
        number={"02"}
        imgSrc={image2}
        title={title2}
        titlebr1={titlebr2}
        description={description2}
        icon={threadIcon}
      />
      <ServiceItem
        number={"03"}
        imgSrc={image3}
        title={title3}
        titlebr1={titlebr3}
        description={description3}
        icon={bateryIcon}
      />
      <ServiceItem
        number={"04"}
        imgSrc={image4}
        title={title4}
        titlebr1={titlebr4}
        description={description4}
        icon={toolsIcon}
      />
    </ListServices>
  )
}

export default ServiceList
