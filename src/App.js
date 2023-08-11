import MovieApp from "./MovieApp";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <SnackbarProvider>
      <MovieApp />
    </SnackbarProvider>
  );
}

export default App;
