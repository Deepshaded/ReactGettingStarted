import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import MainContent from './components/maincontent';

function App() {
  return (
    <div>
      <Header>
      </Header>
      <MainContent pageTitle = {"Coding hackathon"}>
      </MainContent>
      <Footer/>
    </div>
  );
}

export default App;
