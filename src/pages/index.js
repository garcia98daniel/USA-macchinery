import React from "react"
import Layout from "../containers/layout"
import ForkLiftImageHero from "../containers/ForkLiftImageHero"
import ShowMoreBtn from "../components/ShowMoreBtn"
import ServiceSection from "../containers/ServiceSection"
import ServiceImageSection from "../containers/ServiceImageSection"
import WeSection from "../containers/WeSection"
import ExperienceSection from "../containers/ExperienceSection"
import OurClients from "../containers/OurClients"

const IndexPage = () => {
  return (
    <Layout>
      <ForkLiftImageHero />
      <ShowMoreBtn />
      <ServiceSection />
      <ServiceImageSection />
      <WeSection />
      <ExperienceSection />
      <OurClients />
    </Layout>
  )
}

export default IndexPage
