import React from 'react'
import 'bootstrap';
import { Container, Row, Col, Image} from 'react-bootstrap';

const HomeAbout = () => {
    return (
        <Container fluid>
                    <div className="bluebackground">
                        <div className='container'>
                        <div className='row'>
                            <div className='col-md-6 mx-auto'>
                                <h2 className='tussentitel mt-5 text-white'>Hi I'm Joris</h2>
                                <p className='tekstabout mt-5 m-2'>I am a student programming at Thomas More highshool based in Belgium Antwerp.
                                <br/>I have a serious passion for design and animations.</p>
                            </div>
                            <div className='row mt-5'>
                                <div className='col-md-4'>
                                    <div className='card'>
                                        <div className='card-body'>
                                            <h5 className='card-title'>Designer</h5>
                                            <p className='card-text'>Building brands or updating existing brands that reflect your business strategy. Services such as logo design, design for print  (posters, flyers, whitepapers, business cards), illustrations and more!</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-md-4'>
                                        <div className='card'>
                                            <div className='card-body'>
                                                <h5 className='card-title'>Webdesign</h5>
                                                <p className='card-text'>Building brands or updating existing brands that reflect your business strategy. Services such as logo design, design for print  (posters, flyers, whitepapers, business cards), illustrations and more!</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-md-4'>
                                        <div className='card'>
                                            <div class="card-body">
                                                <h5 className='card-title'>Programming</h5>
                                                <p className='card-text'>Using my experience as a designer I love to design and build websites that look amazing,  All my websites run on bootstrap and are responsive across all devices.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </Container>
    )
}
export default HomeAbout;
