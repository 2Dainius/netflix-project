import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Request'

const Home = () => {
  return (
    <>
        <Main />
        <Row rowID='1' title='UPCOMING' fetchURL={requests.requestUpcoming} />
        <Row rowID='2' title='POPULAR' fetchURL={requests.requestPopular} />
        <Row rowID='3' title='TRENDING' fetchURL={requests.requestTrending} />
        <Row rowID='4' title='TOP RATED' fetchURL={requests.requestTopRated} />
        <Row rowID='5' title='HORROR' fetchURL={requests.requestHorror} />
    </>
  )
}

export default Home