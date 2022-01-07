import React from "react"
import styled from "@emotion/styled"
import downArow from "../Icons/arowRegular.png"
const ConoceMasbtn = styled.div`
  display: flex;
  align-items: center;
  border-radius: 3rem;
  border: solid 1px var(--gray-primary);
  padding: 0.1rem 0.5rem;
  padding-top: 0.2rem;
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
    margin-top: -6px;
  }
  i img{
    margin-right: 7px;
    width: 14px;
    height: auto;
    color: var(--gray-primary);
    filter: brightness(10%);
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
      <i >
        <img src={downArow} alt="icon.png"/>
      </i>
    </ConoceMasbtn>
  )
}

export default ShowMoreBtn
