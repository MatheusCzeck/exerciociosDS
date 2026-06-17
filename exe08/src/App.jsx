import { Button, Container, Typography } from "@mui/material";

function App() {
  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Projeto React + Vite + MUI
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        Este é um exemplo simples usando Material UI.
      </Typography>

      <Button variant="contained" color="primary">
        Clique aqui
      </Button>
    </Container>
  );
}

export default App;
