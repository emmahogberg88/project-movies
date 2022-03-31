import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { MAIN_URL, TOP_RATED_URL} from './utils/urls'
import { MovieList } from 'Components/MovieList'
import { MovieDetails } from 'Components/MovieDetails'
import { LoadingItem } from 'Components/LoadingItem'
import { NotFound } from 'Components/NotFound'
import { Navbar } from 'Components/Navbar'
import { TopRatedList} from 'Components/TopRatedList'



export const App = () => {

  const [movieList, setMovieList] = useState([])
  const [topRatedMovieList, setTopRatedMovieList] = useState([])
  const [loading, setLoading] = useState(false)

  

  useEffect(() => {
    setLoading(true)
    fetch(MAIN_URL).then(res => res.json()).then(data => setMovieList(data.results))
    .finally( () => setLoading(false))
    fetch(TOP_RATED_URL).then(res => res.json()).then(data => setTopRatedMovieList(data.results))
  }, [])

  console.log(movieList)

  return (
 <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={ <>{loading && <LoadingItem />}{!loading && <MovieList movieList={movieList} />}</>}/>
        <Route path='/details/:movieId' element={<MovieDetails />}/>
        <Route path='/toprated' element={<TopRatedList movieList={topRatedMovieList}  />}/> 
        <Route path='/404' element={<NotFound/>}/>
        <Route path='*' element={<Navigate to="/404" replace/>} />
      </Routes>
    </BrowserRouter>
  </>
  )
}


