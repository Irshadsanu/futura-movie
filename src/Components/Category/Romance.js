import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';

let API_KEY = '&api_key=ae288cb01c8a475dc39ff9bd5d72e701'
let base_url = 'https://api.themoviedb.org/3'
let url = base_url + ' /discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc' + API_KEY
function Banner() {
    const img_path = "http://image.tmdb.org/t/p/w500"
    
    const [Moviedata, setMovieData] = useState([])
    const [url_set, setUrl] = useState(url)

    useEffect(() => {
        fetch(url_set).then(res => res.json()).then(data => {
            console.log(data.results)
            setMovieData(data.results)
    
        })
    }, [])




    return (
        <div className='bg-dark'>
           <div className='mx-4'> 
            <h1 className='text-danger'>High rated</h1>
            <Container fluid>
            
            {
                 Moviedata.map((info) => {
                     return (
                       <div className='p-4 mx-2 d-inline-flex'>     
                        <Card className='bg-black text-white shadow-lg' style={{ width: '18rem',height:'25rem' }}>
                            <Card.Img variant="top"  style={{ width: '18rem',height:'18rem' }} src = { img_path + info.backdrop_path } />
                            <Card.Body>
                                <Card.Title>{info.title}</Card.Title>
                                <Card.Text>
                                    {info.release_date}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </div>
                    )
                })
            }
        
            </Container>
            </div>
        </div>
    );
}

export default Banner;
