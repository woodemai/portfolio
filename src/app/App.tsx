import { PageProvider } from "./providers/PageProvider"
import { ThemeProvider } from "./providers/ThemeProvider/theme-provider"

function App() {
  return (
      <ThemeProvider>
        <PageProvider />
      </ThemeProvider>
  )
}

export default App
