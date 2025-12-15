import { AppBar, Toolbar, Typography, Button } from '@mui/material'

export default function Navbar({ onNavigate }) {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#141414' }}>
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            color: '#e50914',
            fontWeight: 'bold',
            flexGrow: 1,
          }}
        >
          MovieScope
        </Typography>

        <Button color="inherit" onClick={() => onNavigate('home')}>
          Home
        </Button>
        <Button color="inherit" onClick={() => onNavigate('search')}>
          Search
        </Button>
      </Toolbar>
    </AppBar>
  )
}
