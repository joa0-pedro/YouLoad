import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { FoldersContextProvider } from "./context/FolderContext";

export function App() {
  return (
		<ThemeProvider theme={defaultTheme}>
			<BrowserRouter>
			<FoldersContextProvider>
				<Router />
			</FoldersContextProvider>
				<GlobalStyle />
			</BrowserRouter>
		</ThemeProvider>
  )
}

