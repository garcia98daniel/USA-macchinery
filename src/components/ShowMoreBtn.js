import React from "react"
import styled from "@emotion/styled"

const ConoceMasbtn = styled.div`
  display: flex;
  align-items: center;
  border-radius: 3rem;
  border: solid 1px var(--seconday-gray);
  padding: 0.1rem 0.5rem;
  width: 15rem;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  color: var(--seconday-gray);
  font-weight: bold;
  position: relative;
  z-index: 1;
  i {
    cursor: pointer;
  }
`

const ShowMoreBtn = () => {
  return (
    <ConoceMasbtn>
      CONOCE MÁS
      <i className="fas fa-chevron-down"></i>
    </ConoceMasbtn>
  )
}

export default ShowMoreBtn
