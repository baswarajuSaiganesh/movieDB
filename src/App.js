import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { useState } from 'react';

import Header from './components/Header'
import HomePage from './components/HomePage';
import UpComingMoviePage from './components/UpComingMoviePage'
import TopRatedMoviePage from './components/TopRatedMoviePage'
import SingleMovieDetailPage from './components/SingleMovieDetailPage';
import SearchMoviePage from './components/SearchMoviePage'
import SearchContext from './context/SearchContext';
import './App.css';

const App = () => {
  const [searchInput, setSearchInput] = useState('')
  
  const updateSearchInput = currentInput => {
    setSearchInput(currentInput)
  }

  return (
    <SearchContext.Provider value = {{
      searchInput,
      updateSearchInput: updateSearchInput
    }}
    >
      <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path='/'  component={HomePage} />
            <Route exact path='/upcoming'  component={UpComingMoviePage} />
            <Route exact path='/toprated'  component={TopRatedMoviePage} />
            <Route exact path='/movie/:id' component={SingleMovieDetailPage }/>
            <Route exact path='/search' searchInput={searchInput} component={SearchMoviePage}/>
          </Switch>
      </BrowserRouter>
    </SearchContext.Provider>
  )
}

export default App;
