import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import Requests from '../Requests'

const Home = () => {
  return (
    <>
        <Main></Main>
        <Row rowId='1' title="UpComing" fetchURL={Requests.requestUpcoming} />
        <Row rowId='2' title="Popular" fetchURL={Requests.requestPopular} />
        <Row rowId='3' title="Top Rated" fetchURL={Requests.requestTopRated} />
        <Row rowId='4' title="Trending" fetchURL={Requests.requestTrending} />
        <Row rowId='5' title="Horror" fetchURL={Requests.requestHorror} />
    </>
  )
}

export default Home