import React from 'react';
import { 
  Box, 
  TextField, 
  Button, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Fab 
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function CadastroProduto() {
  return (
    // O Box funciona como o fundo da tela (elevação zero) [1]
    <Box sx={{ flexGrow: 1, p: 4, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      
      <Typography variant="h4" gutterBottom>
        Cadastro de Produto - ERP Controle de Estoque
      </Typography>

      {/* O Grid2 organiza o layout de forma responsiva [1] */}
      <Grid2 container spacing={3}>
        <Grid2 size={{ xs: 12, md: 8 }}>
          
          {/* O Card cria a percepção de profundidade e elevação [1] */}
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Informações Básicas
              </Typography>

              <Grid2 container spacing={2}>
                {/* Substituição de inputs HTML manuais pelo TextField do MUI [1] */}
                <Grid2 size={{ xs: 12, sm: 6 }}>
                  <TextField 
                    fullWidth 
                    label="Nome do Produto" 
                    variant="outlined" 
                  />
                </Grid2>
                
                <Grid2 size={{ xs: 12, sm: 6 }}>
                  <TextField 
                    fullWidth 
                    label="Preço" 
                    type="number" 
                    variant="outlined" 
                  />
                </Grid2>

                <Grid2 size={12}>
                  <TextField 
                    fullWidth 
                    label="Descrição" 
                    multiline 
                    rows={4} 
                  />
                </Grid2>

                <Grid2 size={12}>
                  {/* Uso do Button com variante 'contained' conforme sugerido [1] */}
                  <Button variant="contained" size="large">
                    Salvar Produto
                  </Button>
                </Grid2>
              </Grid2>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>

      {/* Botão Flutuante (FAB) para representar a Ação Primária [1] */}
      <Fab 
        color="primary" 
        aria-label="add" 
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        <AddIcon />
      </Fab>
    </Box>
  );
}