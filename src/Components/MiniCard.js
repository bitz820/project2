import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from "styled-components"
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import logo3 from "../Media/3Team.png"
import logo5 from "../Media/5Team.png"

const MiniCardDiv = styled.div`
    display: block;
    border: 3px solid black;
    margin-bottom: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: 1rem;
    min-width: 30%;
    background-color: ${props => props.color};
    color: ${props => props.color === "White" || props.color === "Yellow" ? "black" : "white"};
`

const StyleModal = styled(Modal)`
text-align: center;
`

const MiniCard = ({ data }) => {
    const { name, type, playersNeeded, color, date, court } = data

    const teamTypeStyle = type === "3v3" ? logo3 : logo5
    const available = playersNeeded > 0 ? `Players Needed: ${playersNeeded}` : "Team Full!"
    const [show, setShow] = useState(false)
    const history = useHistory()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleJoinGame = () => history.push("/playInAGame")

    return (
        <MiniCardDiv color={color} id='minicards' className={`card-container ${name}`}>
            <div className='card-title'>
                <h1>Team: {name}</h1>
            </div>
            <div className='image-container'>
                <img src={teamTypeStyle} alt="type of game" />
            </div>
            {/* This will eventually be a redirect to a route for the card clicked on, viewing full details of that team! */}
            <div className='miniCard-body'>
                <p>Game Date: {date}</p>
                <Button variant="secondary" size="sm" onClick={handleShow}>See More Info</Button>
                <StyleModal show={show}>
                    <Modal.Body> 
                    {show ? (<div>
                    <h2>TEAM: {name.toUpperCase()} </h2>
                    <h5>{available} </h5>
                    <img className="img-modal" src={teamTypeStyle} alt="type of game"></img>
                    <p>Team Color: {color} </p>
                    <p>Court Number: {court}</p>
                    <p>Game Date: {date}</p>
                    
                </div>)
                    :
                    null}
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="primary" onClick={handleJoinGame}>Join</Button>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    </Modal.Footer>
                </StyleModal> 
            </div>
        </MiniCardDiv>
    )
}

export default MiniCard