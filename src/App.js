//Impotying Bootstap and Componets
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './mycomponents/footer';
import Header from './mycomponents/header';
import Content from './mycomponents/content';
import Create from './mycomponents/create';
import Read from './mycomponents/read';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        {/* Create Navbar */}
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="content">Content</Nav.Link>
              <Nav.Link href="footer">Footer</Nav.Link>
              <Nav.Link href="create">Create</Nav.Link>
              <Nav.Link href="read">Read</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        {/* Placeing Content under Navbar */}
        <Routes>
          <Route path="/" element={<Header></Header>}></Route>
          <Route path="content" element={<Content></Content>}></Route>
          <Route path="footer" element={<Footer></Footer>}></Route>
          <Route path="create" element={<Create></Create>}></Route>
          <Route path="read" element={<Read></Read>}></Route>
        </Routes>

      </div>
    </BrowserRouter>
  
  );
}

export default App;
