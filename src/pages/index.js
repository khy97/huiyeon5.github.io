import React, { useState, useEffect } from 'react'
import Layout from '../components/layout'
import Panel from '../components/Panel'
import SEO from '../components/seo'
import Content from '../components/content'
import '../styles/index.css'

const ResumeContext = React.createContext();

const IndexPage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({})

  useEffect(() => {
    const url = `https://gitconnected.com/v1/portfolio/huiyeon5`;
    const fetchData = async () => {
      try {
        const resumeData = await fetch(url)
        const output = await resumeData.json()
        setData(output)
        setLoading(false)
      } catch (e) {
        if (e) {
          console.log(e.message, 'Try updating the API key in App.js')
        }
      }
    }
    fetchData();
  }, [])


  return (
    <Layout>
      <ResumeContext.Provider value={{
        loading,
        data
      }}>
        <SEO title="Huiyeon Kim" keywords={[`Huiyeon Kim`, `Developer`, `Writer`, `Personal Blog`, 'Software Developer', `Projects`, `Student`, `Tech Enthusiast`, `Kim`, `Huiyeon`]} image={require('../images/Huiyeon Kim.jpg')} />
        <Panel />
        <Content />
      </ResumeContext.Provider>
    </Layout>
  )
}

export { ResumeContext }
export default IndexPage