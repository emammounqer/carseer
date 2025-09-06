import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Home from "./pages/home/Home";
import { VehicleTypeFilterProvider } from "./context/VehicleTypeFilterProvider";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <VehicleTypeFilterProvider>
        <Home />
      </VehicleTypeFilterProvider>
    </QueryClientProvider>
  );
}

export default App;
