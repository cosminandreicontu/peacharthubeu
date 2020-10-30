import React from 'react';
import fab from './assests/fab5g.svg';
import logo from './assests/pp1.png';
import './Home.css'
import Footer from './Footer';
import {Nav, Navbar, Button} from 'react-bootstrap';
import Player from './THEOplayerWrapper'

export default function Home(props) {
    let source = [
        {
            sources: [{
                // src: "//cdn.theoplayer.com/video/elephants-dream/playlist.m3u8",
                src: process.env.PUBLIC_URL + '/static/media/Fericire eterna.mp4',
                // type: "application/x-mpegurl"
                type: "video/mp4",
            }],
            vr:{
                360: true
            }
        },
        {
            sources: [{
                // src: "//cdn.theoplayer.com/video/elephants-dream/playlist.m3u8",
                src: process.env.PUBLIC_URL + '/static/media/Fericire eterna -small.mp4',
                // type: "application/x-mpegurl"
                type: "video/mp4",
            }],
            vr:{
                360: true
            }
        },
    ]
    return(
        <div className="web-container">
            <div className="header">
                
                <div className="menu">
                <Navbar bg="light" expand="lg" id="nav">
                    <Navbar.Brand href="#home">
                    <div className="logo">
                    <img src={logo} alt='logo'/>
                </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                        <Nav.Link href="http://peachartcrew.com/">Home</Nav.Link>
                        <Nav.Link href="http://peachartcrew.com/about/">About</Nav.Link>
                        <Nav.Link href="http://peachartcrew.com/projects/">Projects</Nav.Link>
                        <Nav.Link href="http://peachartcrew.com/our-partners/">Partners</Nav.Link>
                        <Nav.Link href="http://peachartcrew.com/contact-us/">Contact Us</Nav.Link>
                        </Nav>
                        
                        <Button variant="primary">Join the PeachART Crew</Button>
                    </Navbar.Collapse>
                </Navbar>
                </div>
            </div>
            <div className="layout top">
                <h2>Projects We Develop<br/>
                <span>PeachART HUB</span></h2>
                {/* <img src={section} style={{background: '#6cc083', width: '100%', height: 'auto'}}/> */}
            </div>
            <div className="content">
                <img src={fab} alt='fab' />
            </div>
            <div className="snd-content">
            </div>
            <div className="multimedia">
                <div className="title">
                    <h2>Content Examples</h2>
                </div>
                <div className="video">
                    <div className={"PlayerDiv"}>
                        <Player source={source[0]} onPlay={() => {console.log("The player has started playing.")}}/>
                        <h3>First video example</h3>
                    </div>
                    <div className={"PlayerDiv"}>
                        <Player source={source[1]} onPlay={() => {console.log("The player has started playing.")}}/>
                        <h3>Second video example</h3>
                    </div>
                    <div className={"PlayerDiv"}>
                        <Player source={source[0]} onPlay={() => {console.log("The player has started playing.")}}/>
                        <h3>Third video example</h3>
                    </div>
                    <div className={"PlayerDiv"}>
                        <Player source={source[1]} onPlay={() => {console.log("The player has started playing.")}}/>
                        <h3>Fourth video example</h3>
                    </div>
                </div>
            </div>
            <div className="layout bottom">
                <h2>Do you like our approach?  Join The Crew!</h2>
                <Button variant="outline-light">Let's work together</Button>
                {/* <img src={section} style={{background: '#6cc083', width: '100%', height: 'auto'}}/> */}
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}