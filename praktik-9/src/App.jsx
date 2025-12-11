import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";

import { ThemeProvider } from "./context/ThemeContext";
import { UserProvider } from "./context/UserContext";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <CartProvider>
          <div className="app">
            <Header />
            <Home />
          </div>
        </CartProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
