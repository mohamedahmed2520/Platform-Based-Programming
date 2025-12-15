import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Rating,
} from '@mui/material'
import { useState, useEffect } from 'react'

const IMG = 'https://image.tmdb.org/t/p/w300'

export default function MovieCard({ movie, onRecommend }) {
  const storageKey = `rating-${movie.id}`
  const [rating, setRating] = useState(0)

  useEffect(() => {
    const saved = localStorage.getItem(storageKey)
    if (saved) setRating(Number(saved))
  }, [])

  const handleRating = (value) => {
    setRating(value)
    localStorage.setItem(storageKey, value)
  }

  const watchTrailer = () => {
    window.open(
      `https://www.youtube.com/results?search_query=${movie.title} trailer`,
      '_blank'
    )
  }

  return (
    <Card
      sx={{
        backgroundColor: '#181818',
        transition: 'transform 0.3s',
        '&:hover': {
          transform: 'scale(1.08)',
          zIndex: 10,
        },
      }}
    >
      <CardMedia
        component="img"
        height="320"
        image={
          movie.poster_path
            ? IMG + movie.poster_path
            : 'https://via.placeholder.com/300x450'
        }
      />

      <CardContent>
        <Typography variant="subtitle1" noWrap>
          {movie.title}
        </Typography>

        <Rating
          size="small"
          value={rating}
          onChange={(e, v) => handleRating(v)}
        />

        {onRecommend && (
          <Button
            fullWidth
            size="small"
            variant="outlined"
            sx={{ mt: 1 }}
            onClick={() => onRecommend(movie.id)}
          >
            Similar
          </Button>
        )}

        <Button
          fullWidth
          size="small"
          variant="contained"
          sx={{ mt: 1 }}
          onClick={watchTrailer}
        >
          Watch Trailer
        </Button>
      </CardContent>
    </Card>
  )
}
