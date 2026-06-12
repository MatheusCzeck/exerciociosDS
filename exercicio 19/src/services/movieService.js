export async function searchMovies(query) {
    try {
      const response = await fetch('https://ghibliapi.vercel.app/films');
      
      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }
  
      const movies = await response.json();
      
      // Filtra os filmes onde o título inclui o termo da query (case-insensitive)
      const filteredMovies = movies.filter(movie => 
        movie.title.toLowerCase().includes(query.toLowerCase())
      );
  
      return filteredMovies;
    } catch (error) {
      console.error(`Erro ao buscar filmes usando o termo "${query}":`, error);
      return [];
    }
  }