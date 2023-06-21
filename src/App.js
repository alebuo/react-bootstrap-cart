//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
//import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import {Container} from "react-bootstrap";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
    return (
        <Container>
            <Header/>
            <Main/>
            <Footer/>
        </Container>
    );
}

export default App;
