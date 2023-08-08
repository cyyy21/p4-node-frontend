

import { Link } from "react-router-dom";
import './home.css';
import { useState, useEffect } from "react";
import { FaBeer} from 'react-icons/fa';
import {FaEdit} from 'react-icons/fa'
import {FaPlus} from 'react-icons/fa'


function Home() {
    const [places, setPlaces] = useState([]);

    const fetchPlaces = async () => {
   try {
    const response = await fetch('https://galana-backend-8prv.onrender.com/destination')
    const { data } = await response.json();
    const activePlaces = data.filter((place) => !place.isDeleted);

        setPlaces(activePlaces);

   }
           catch(error) {
            console.log("Error fetching Places", error);
           }
    };

    useEffect(() => {
        fetchPlaces();
    }, []);



    const mapPlace =
         places.map((place) => (
            
            <div key={place._id} className="box">
                <div>
                    <img src={place.image} alt={place.place} id='image' />
                    <Link to={`/edit/${place._id}`}><button id="edit"><FaEdit/></button></Link>
                    <h1>{place.place}</h1> 
                    <p className="description">{place.description}</p>
                    {/* <Link to={`/${place._id}`} >
                        <button className="detailButton"></button>
                    </Link> */}
                     <button id="deletePlace" onClick={() => deleteList(place._id)}><FaBeer/></button>
                   
                </div>
             
            </div>
        ));

//DELETE THE PLACE ;

const deleteList = async (place) => {
    try{
        const response = await fetch(`https://galana-backend-8prv.onrender.com//delete/${place}`, {
            method: 'PUT',//method put for soft deletion.
            headers: {
                "Content-Type": "application/json",
              }, 
      body: JSON.stringify({isDeleted: true})
      
    });
if(response.ok) {
    alert('Deleted successfully')
    //update the list of places ;
  setPlaces((previousPlace) => previousPlace.filter((item) => item._id !== place));
  
}
    }
    catch(error) {
        console.log(error)
    }
}



    return (
        <div>
            <header>
                <nav>
                    <p id="logo">GALANA</p>
                    <ul>
                        <li><Link to='' id="link">Home</Link></li>
                        <li><Link to='signup' id="link">Register</Link></li>
                        <li><Link to='login' id="link">Login</Link></li>
                    </ul>
                </nav>
            </header>
            <div id="homeBody">
                <div className="welcome">
                    <p>
                        Welcome to the Philippines! Discover the tropical paradise of Southeast Asia, where stunning beaches, rich cultural heritage, and warm hospitality await you. Explore our diverse destinations, plan your dream vacation, and immerse yourself in the beauty of the Philippines.
                    </p>
                </div>

            </div>
            <div id="containerBox">
                <Link to='/add'> <button  id="add" ><FaPlus/></button></Link>
                <div className="grid">{mapPlace}</div>
            </div>

            
        </div>
    );
}

export default Home;
