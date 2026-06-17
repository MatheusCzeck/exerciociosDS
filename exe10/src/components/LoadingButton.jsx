import { Button, CircularProgress } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save'

export default function LoadingButton({ loading, children }) {
 return (
   <Button
     variant="contained"
     disabled={loading}
     startIcon={!loading && <SaveIcon />}
   >
     {loading ? <CircularProgress size={20} color="inherit" /> : children}
   </Button>
 )
}
