import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/NavDropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export function NavScrollExample() {

    const Navigate = useNavigate()

    const [text, setText] = useState("")
    const [Movie, setMovie] = useState([])


    const changeText = (e) => {
        setText(e.target.value)
    }

    const getMovie = (e) => {
        e.preventDefault()

        axios.get(`https://www.omdbapi.com/?s=${text}&apikey=2ebbfa4`)
            .then((responce) => {
                console.log(responce)
                setMovie(responce.data.Search)
            })

    }



    return (

        <div> 
           <div>
            <Navbar className='navbar navbar-dark bg-dark' expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">Futura Movies</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Form onSubmit={getMovie} className="d-flex mx-auto">
                            <Form.Control
                                type="search"
                                placeholder="Search movies.."
                                className="me-2"
                                aria-label="Search"
                                value={text}
                                onChange={changeText}
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        <Nav
                            className=" my-lg-0  "
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link  onClick={()=>Navigate('/')}>Home</Nav.Link>
                            <DropdownButton id="dropdown-basic-button" title="Category">
                                <Dropdown.Item onClick={()=>Navigate('/theatres')} >Theatres</Dropdown.Item>
                                <Dropdown.Item  onClick={()=>Navigate('/comedy')}>Comedy</Dropdown.Item>
                                <Dropdown.Item  onClick={()=>Navigate('/science')}>Science fiction</Dropdown.Item>
                                <Dropdown.Item  onClick={()=>Navigate('/drama')}>Drama</Dropdown.Item>
                                <Dropdown.Item  onClick={()=>Navigate('/kids')}>Kids movies</Dropdown.Item>
                                <Dropdown.Item  onClick={()=>Navigate('/highrated')}>high Rated</Dropdown.Item>
                            </DropdownButton>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </div>

            <div className='bg-dark'  >
            
                
                
                    
                {Movie.map((value) => {
                    return (
                      <div className='p-2 d-inline-flex bg-image hover-zoom '>  
                    
                        <Card className='p-2 bg-black text-white ' style={{ width: '30rem' }}>
                            <Card.Img  style={{ height: '30rem'  }} variant="top" src={value.Poster} alt="No valuable Image" />
                            <Card.Body>
                                <Card.Title>{value.Title}</Card.Title>
                                <Card.Text>
                                    { value.Type}
                                </Card.Text>
                                <Button variant="primary">{value.Year}</Button>
                            </Card.Body>
                        </Card>

                    
                    </div>
                    )
                })
                }
            
            
            </div>




        </div>
    );
}

export default NavScrollExample;