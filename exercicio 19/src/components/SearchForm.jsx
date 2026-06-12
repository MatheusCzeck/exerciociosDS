import { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export function SearchForm({ onSearchSubmit }) {
  const [term, setTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!term.trim()) return;

    onSearchSubmit(term);
    setTerm('');
  };

  return (
    <Box 
      component="form" 
      onSubmit={handleSubmit} 
      sx={{ 
        display: 'flex', 
        gap: 2, 
        maxWidth: 600, 
        mx: 'auto', 
        mb: 4 
      }}
    >
      <TextField
        fullWidth
        variant="outlined"
        label="Buscar filme..."
        placeholder="Digite o nome do filme (ex: Totoro)..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        size="small"
      />
      <Button 
        type="submit" 
        variant="contained" 
        startIcon={<SearchIcon />}
        sx={{ px: 3 }}
      >
        Buscar
      </Button>
    </Box>
  );
}