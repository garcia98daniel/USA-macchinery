import React from "react"
import styled from "@emotion/styled"

const ConoceMasbtn = styled.div`
  display: flex;
  align-items: center;
  border-radius: 3rem;
  border: solid 1px var(--gray-primary);
  padding: 0.1rem 0.5rem;
  width: fit-content;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  color: var(--gray-primary);
  font-weight: 400;
  position: relative;
  z-index: 1;
    cursor: pointer;
  p{
    margin:0 5px;
    padding: 3px 5px;
    font-size:1.2rem;
  }
  i{
    margin:0 5px;
  }

  @media (min-width: 768px) {
    p{
    
      font-size: 1.5rem;
    }
  }
`

const ShowMoreBtn = () => {
  return (
    <ConoceMasbtn>
      <p>CONOCE MÁS</p>
      <i className="fas fa-chevron-down"></i>
    </ConoceMasbtn>
  )
}

export default ShowMoreBtn
