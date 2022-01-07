import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

const ItemService = styled.div`
  min-width: 23rem;
  position: relative;
  max-width: 235px;
  span {
    font-weight: 600;
    font-size: 3rem;
    color: var(--ligt-gray);
  }
  h3 {
    font-weight: bolder;
    color: var(--gray-primary);
    line-height: 1;
    margin-bottom: 1.2rem;
    font-size: 2.5rem;
  }
  p {
    font-size: 1.7rem;
    line-height: 1;
    width: 90%;
    color: var(--gray-primary);
  }
  .service-img {
    object-fit: cover;
    margin-bottom: 1rem;
  }

  .service-icon{
    border-radius: 50%;
    background-color: var(--orange-primary);
    width: 7rem;
    height: 7rem;
    padding: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 140px;
    right: 0px;
  }
`

const ServiceItem = ({
  imgSrc,
  title,
  titlebr1,
  description,
  icon,
  number,
}) => {
  return (
    <ItemService>
      <span>{number}</span>
      <h3>
        {title} <br /> {titlebr1}{" "}
      </h3>
      <img className="service-img" width={210} height={210} src={imgSrc} />
      <div className="service-icon" >
      <img  src={icon} />
      </div>
      <p>{description}</p>
    </ItemService>
  )
}

export default ServiceItem
