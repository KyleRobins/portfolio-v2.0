import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from "./utils/Themes";
import Navabar from './components/Navbar';
import Hero from './components/HeroSection';
import Skills from './components/Skills';
const Body = styled.div` 
background-color: ${({ theme }) => theme.bg};
width: 100%;
height: 100%;
overflow-x: hidden;
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Navabar/>
      <Body>Portfolio</Body>
      <Hero/>
      <Skills/>
    </ThemeProvider>
    
  );
}

export default App;
