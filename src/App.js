import logo from './logo.svg';
import './App.css';
import Header  from './my components/Header';
import { Main } from './my components/Main';
import { Footer } from './my components/Footer';

function App() {
    return ( 
        <div className='App'>
        <Header/>
        <Main/>
        <Footer/>
        </div>
        
    );
}

export default App;