import { Typography, Box } from '@mui/material';

const Header = () => {
  return (
    <Box sx={{ textAlign: 'center', my: 4 }}>
      <Typography 
        variant="h4" 
        component="h1" 
        sx={{ color: 'black !important' }} // O !important força a aplicação da cor
      >
        Cadastro de Usuário
      </Typography>
    </Box>
  );
};

export default Header;