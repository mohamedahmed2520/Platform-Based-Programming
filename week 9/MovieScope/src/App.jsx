import { useState, useEffect } from 'react'
import { Container, Typography } from '@mui/material'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import MovieGrid from './components/MovieGrid'

const API = 'https://api.themoviedb.org/3'
const TOKEN = import.meta.env.VITE_TMDB_TOKEN

export default function App() {
  const [page, setPage] = useState('home')
  const [popularMovies, setPopularMovies] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [recommendations, setRecommendations] = useState([])

  useEffect(() => {
    loadPopularMovies()
  }, [])

  const loadPopularMovies = async () => {
    const res = await fetch(`${API}/movie/popular`, {
      headers: { Authorization: `Bearer ${TOKEN}` },
    })
    const data = await res.json()
    setPopularMovies(data.results || [])
  }

  // ✅ ALWAYS SEARCH FROM TMDb
  const searchMovies = async (query) => {
    if (!query.trim()) return

    setPage('search')
    setSearchResults([])
    setRecommendations([])

    const res = await fetch(
      `${API}/search/movie?query=${encodeURIComponent(query)}`,
      {
        headers: { Authorization: `Bearer ${TOKEN}` },
      }
    )

    const data = await res.json()
    setSearchResults(data.results || [])
  }

  // Recommendations only after clicking a movie
  const recommend = async (movieId) => {
    setRecommendations([])

    const res = await fetch(
      `${API}/movie/${movieId}/recommendations`,
      {
        headers: { Authorization: `Bearer ${TOKEN}` },
      }
    )

    const data = await res.json()
    setRecommendations(data.results || [])
  }

  return (
    <>
      <Navbar onNavigate={setPage} />

      <Container sx={{ py: 4 }}>
        <Typography variant="h3" align="center" gutterBottom>
          🎬 MovieScope
        </Typography>

        <SearchBar onSearch={searchMovies} />

        {/* HOME PAGE */}
        {page === 'home' && (
          <MovieGrid
            title="Popular Movies"
            movies={popularMovies}
            onRecommend={recommend}
          />
        )}

        {/* SEARCH PAGE */}
        {page === 'search' && (
          <>
            <MovieGrid
              title="Search Results"
              movies={searchResults}
              onRecommend={recommend}
            />

            {recommendations.length > 0 && (
              <MovieGrid
                title="Because You Selected"
                movies={recommendations}
              />
            )}
          </>
        )}
      </Container>
    </>
  )
}
