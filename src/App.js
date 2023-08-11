import MovieApp from "./MovieApp";
import { SnackbarProvider } from "notistack";
import ErrorBoundary from "./ErrorBoundry";

function App() {
  return (
    <SnackbarProvider
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <ErrorBoundary>
        <MovieApp />
      </ErrorBoundary>
    </SnackbarProvider>
  );
}

export default App;
