import { useState } from "react";
import SaveIcon from "@mui/icons-material/Save";
import ButtonLoadingIcon from "./components/ButtonLoadingIcon";

function App() {
 const [loading, setLoading] = useState(false);

 const salvar = () => {
   setLoading(true);
   setTimeout(() => setLoading(false), 2000);
 };

 return (
   <div style={{ padding: 24 }}>
     <ButtonLoadingIcon
       loading={loading}
       icon={<SaveIcon />}
       variant="contained"
       onClick={salvar}
     >
       Salvar
     </ButtonLoadingIcon>
   </div>
 );
}

export default App;
