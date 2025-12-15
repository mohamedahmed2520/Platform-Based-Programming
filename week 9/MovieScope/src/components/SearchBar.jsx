import { useState } from 'react'
import { TextField, Button, Stack } from '@mui/material'

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('')

  const handleSearch = () => {
    onSearch(query)
  }

  return (
    <Stack direction="row" spacing={2} justifyContent="center" mb={4}>
      <TextField
        label="Search Movie"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button variant="contained" onClick={handleSearch}>
        Search
      </Button>
    </Stack>
  )
}
