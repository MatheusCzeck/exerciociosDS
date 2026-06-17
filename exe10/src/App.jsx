import { AppBar, Toolbar, Typography, CssBaseline } from '@mui/material'
import Dashboard from './pages/Dashboard'

export default function App() {
 return (
   <>
     <CssBaseline />

     <AppBar position="static">
       <Toolbar>
         <Typography variant="h6">
           Sistema React + MUI
         </Typography>
       </Toolbar>
     </AppBar>

     <Dashboard />
   </>
 )
}
