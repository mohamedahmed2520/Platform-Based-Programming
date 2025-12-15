import { Grid, Typography } from '@mui/material'
import MovieCard from './MovieCard'

export default function MovieGrid({ title, movies, onRecommend }) {
  if (!movies || movies.length === 0) return null

  return (
    <>
      <Typography
        variant="h5"
        sx={{ mt: 4, mb: 2, fontWeight: 'bold' }}
      >
        {title}
      </Typography>

      <Grid container spacing={2}>
        {movies.map((movie) => (
          <Grid item xs={6} sm={4} md={2} key={movie.id}>
            <MovieCard movie={movie} onRecommend={onRecommend} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}
