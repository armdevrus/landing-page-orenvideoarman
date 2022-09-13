import { useContext } from 'react'
import { ThemeContext } from './context';
import About from "./components/about/About";
import Contacts from "./components/contacts/Contacts";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import "./App.css";

function App() {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode

  return (
    <div style={{backgroundColor: darkMode ? '#222' : 'white', color: darkMode ? 'white' : 'black', transition: 'all 1s ease'}}>
        <Toggle />
        <Intro />
        <About />
        <ProductList />
        <Contacts />
    </div>
  );
}

export default App;
