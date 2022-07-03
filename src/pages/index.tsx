import type { NextPage } from 'next'
import HomeComponent from '../components/Home'
import Lists from '../components/Lists'

const Home: NextPage = () => {
  return (
    <>
      <HomeComponent />
      <Lists />
    </>
  )
}

export default Home
