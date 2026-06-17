import { Box, Container, CssBaseline } from '@mui/material';
import Header from './components/Header';
import UserForm from './components/UserForm';

function App() {
  return (
    <Box sx={{ 
      width: '100vw',
      minHeight: '100vh', 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',  
      background: 'linear-gradient(135deg, #2193b0 0%, #6dd5ed 46%, #240b36 100%)',
      py: 4,
    // Garante que não haja preenchimento externo
    }}>
       <CssBaseline /> {/* Normaliza o CSS e remove margens do body [2] */}
      
      <Container maxWidth="sm">
        <Header />
        <UserForm />
      </Container>
    </Box>
  );
}
export default App;
