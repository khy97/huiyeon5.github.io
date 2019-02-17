import React from "react"
import Header from "../components/header"
import Landing from "../components/Landing"
import SEO from "../components/seo"
import ProjectSection from '../components/ProjectSection'
import AboutMe from '../components/AboutMe'
import SkillSection from '../components/SkillSection'
import ContactMe from '../components/ContactMe'
import { graphql } from 'gatsby';
// import "../components/layout.css"

const IndexPage = ({data}) => {
    const imageList = data.allFile.edges;
    let imageMap = {}
    imageList.forEach(image => {
        imageMap[image.node.childImageSharp.fluid.originalName] = image.node.childImageSharp.fluid
    })
    return (
        <div style={{position:`relative`, overflowY:`hidden`}}>
            <SEO title="Huiyeon Kim" keywords={[`Huiyeon Kim`, `Developer`, `Writer`, `Personal Blog`, 'Software Developer', `Projects`,`Student`,`Tech Enthusiast`, `Kim`, `Huiyeon`]} />
            <Header />
            <Landing imageMap={imageMap}/>
            <ProjectSection imageMap={imageMap}/>
            <AboutMe imageMap={imageMap}/>
            <SkillSection />
            <ContactMe />
        </div>
    )
}

export default IndexPage

export const ImageQuery = graphql`
  query ImageQuery {
    allFile {
        edges {
            node {
                childImageSharp {
                    fluid(maxWidth:2600) {
                        ...GatsbyImageSharpFluid
                        originalName
                    }
                }
            }
        }
    }
}`