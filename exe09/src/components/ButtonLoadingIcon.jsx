import { Button, CircularProgress, Box } from "@mui/material";

function ButtonLoadingIcon({
 loading,
 icon,
 children,
 ...props
}) {
 return (
   <Button
     {...props}
     disabled={loading || props.disabled}
     startIcon={
       loading ? (
         <CircularProgress size={20} color="inherit" />
       ) : (
         icon
       )
     }
     sx={{ position: "relative" }}
   >
     <Box
       sx={{
         visibility: loading ? "hidden" : "visible",
       }}
     >
       {children}
     </Box>
   </Button>
 );
}

export default ButtonLoadingIcon;
