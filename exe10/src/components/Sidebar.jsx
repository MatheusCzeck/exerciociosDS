import { Drawer, List, ListItem, ListItemText } from '@mui/material'

export default function Sidebar({ open, onClose }) {
 return (
   <Drawer open={open} onClose={onClose}>
     <List sx={{ width: 250 }}>
       <ListItem button>
         <ListItemText primary="Dashboard" />
       </ListItem>
       <ListItem button>
         <ListItemText primary="Usuários" />
       </ListItem>
       <ListItem button>
         <ListItemText primary="Configurações" />
       </ListItem>
     </List>
   </Drawer>
 )
}
