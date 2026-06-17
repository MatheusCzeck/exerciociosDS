import { useState } from 'react'
import {
 Box,
 Button,
 TextField,
 Select,
 MenuItem,
 Checkbox,
 Switch,
 FormControlLabel,
 Tabs,
 Tab
} from '@mui/material'

import Sidebar from '../components/Sidebar'
import LoadingButton from '../components/LoadingButton'

export default function Dashboard() {
 const [drawerOpen, setDrawerOpen] = useState(false)
 const [tab, setTab] = useState(0)
 const [loading, setLoading] = useState(false)

 function handleSubmit() {
   setLoading(true)
   setTimeout(() => setLoading(false), 2000)
 }

 return (
   <Box sx={{ p: 3 }}>
     {/* Botão abrir menu */}
     <Button onClick={() => setDrawerOpen(true)}>
       Abrir Menu
     </Button>

     <Sidebar open={drawerOpen} onClose={() => setDrawerOpen(false)} />

     {/* Tabs */}
     <Tabs value={tab} onChange={(e, v) => setTab(v)} sx={{ mb: 3 }}>
       <Tab label="Cadastro" />
       <Tab label="Preferências" />
     </Tabs>

     {/* Aba 1 */}
     {tab === 0 && (
       <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400 }}>
         <TextField label="Nome" />
         <TextField label="Email" />

         <Select defaultValue="">
           <MenuItem value="">Selecione o perfil</MenuItem>
           <MenuItem value="admin">Administrador</MenuItem>
           <MenuItem value="user">Usuário</MenuItem>
         </Select>

         <FormControlLabel
           control={<Checkbox />}
           label="Aceito os termos"
         />

         <LoadingButton loading={loading} onClick={handleSubmit}>
           Salvar
         </LoadingButton>
       </Box>
     )}

     {/* Aba 2 */}
     {tab === 1 && (
       <Box>
         <FormControlLabel
           control={<Switch />}
           label="Receber notificações"
         />
       </Box>
     )}
   </Box>
 )
}
