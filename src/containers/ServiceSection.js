import React from "react"
import { css } from "@emotion/react"
import ServiceList from "../components/ServiceList"

const ServiceSection = () => {
  return (
    <section
      id="servicios"
      css={css`
        margin-bottom: 4rem;
      `}
    >
      <h1
        css={css`
          text-align: center;
          margin-top: 3rem;
          font-size: 5rem;
        `}
      >
        Servicios
      </h1>
      <ServiceList />
    </section>
  )
}

export default ServiceSection
