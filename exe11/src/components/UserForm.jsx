import { useForm } from 'react-hook-form';
import { TextField, Button, Stack, Paper } from '@mui/material';

const UserForm = () => {
  // Inicialização do React Hook Form (Etapa 5)
  const { register, handleSubmit, reset } = useForm();

  // Função disparada no envio (Etapa 4 e 5)
  const onSubmit = (data) => {
    console.log("Dados Enviados:", data);
    reset(); // Limpa o formulário (Bônus)
  };

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 400, mx: 'auto' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <TextField
            label="Nome"
            variant="outlined"
            fullWidth
            {...register("nome", { required: true })}
          />
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            {...register("email", { required: true })}
          />
          <TextField
            label="Senha"
            type="password"
            variant="outlined"
            fullWidth
            {...register("senha", { required: true })}
          />
          <Button type="submit" variant="contained" size="large">
            Cadastrar
          </Button>
        </Stack>
      </form>
    </Paper>
  );
};

export default UserForm;