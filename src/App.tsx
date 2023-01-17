import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
		<ThemeProvider theme={defaultTheme}>
			<BrowserRouter>
				<Router />
				<GlobalStyle />
			</BrowserRouter>
		</ThemeProvider>
  )
}

