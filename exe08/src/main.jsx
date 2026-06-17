import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App' // Certifique-se de que o arquivo App.jsx existe na mesma pasta
import { ThemeProvider } from "@mui/material/styles"
import theme from "./theme"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)