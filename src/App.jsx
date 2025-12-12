import MovieCard from './components/MovieCard'
import Home from './pages/Home.jsx'
import { Routes, Route } from 'react-router-dom'
import Favorites from './pages/Favorites.jsx'
import Navbar from './components/NavBar.jsx'
import { MovieProvider } from './contexts/MovieContext.jsx'
import './css/App.css'
function App() {

  return (
    <MovieProvider>
      <Navbar></Navbar>
      <main className="main-content">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/favorites' element={<Favorites />}></Route>

        </Routes>
      </main>
    </MovieProvider>


  )
}



export default App
