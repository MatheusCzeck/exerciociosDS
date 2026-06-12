import { useState } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  CircularProgress, 
  Card, 
  CardContent, 
  Grid, 
  Alert 
} from '@mui/material';
import { SearchForm } from './components/SearchForm';
import { searchMovies } from './services/movieService';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleSearch = async (query) => {
    setLoading(true);
    setSearched(true);
    try {
      const results = await searchMovies(query);
      setMovies(results);
    } catch (error) {
      console.error("Erro ao atualizar o estado de filmes:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      {/* Cabeçalho */}
      <Box sx={{ textAlign: 'center', mb: 5 }}>
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom 
          fontWeight="bold"
          color="primary.main"
        >
          MovieFinder
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Descubra as produções do Studio Ghibli
        </Typography>
      </Box>
      
      {/* Formulário de Busca */}
      <SearchForm onSearchSubmit={handleSearch} />

      {/* Feedback de Carregamento */}
      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress size={50} />
        </Box>
      )}

      {/* Exibição dos Resultados */}
      {!loading && movies.length > 0 && (
        <Grid container spacing={3}>
          {movies.map((movie) => (
            <Grid item xs={12} sm={6} md={4} key={movie.id}>
              <Card 
                elevation={3} 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': { transform: 'scale(1.02)' }
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" component="h2" gutterBottom fontWeight="600">
                    {movie.title}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary" gutterBottom sx={{ fontStyle: 'italic' }}>
                    {movie.original_title} — {movie.release_date}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>
                    {movie.description.length > 180 
                      ? `${movie.description.substring(0, 180)}...` 
                      : movie.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Estado Vazio ou Inicial */}
      {!loading && movies.length === 0 && (
        <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
          <Alert severity={searched ? "info" : "warning"} variant="outlined">
            {searched 
              ? "Nenhum filme encontrado para o termo digitado. Tente outra palavra-chave!" 
              : "Digite um termo acima para começar sua busca pelos clássicos do Ghibli."}
          </Alert>
        </Box>
      )}
    </Container>
  );
}