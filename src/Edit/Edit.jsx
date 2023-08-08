import './edit.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const editPlace = async (placeID, placeData) => {
  try {
    const response = await fetch(`https://galana-backend-8prv.onrender.com/destination/${placeID}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(placeData,{isDeleted:false}),
    });

    if (response.ok) {
      alert('Successfully Updated');
      window.location.href='/';
    }
  } catch (error) {
    console.log('Error updating place:', error);
  }
};

function Edit() {
  const { id } = useParams(); // Get the place ID from the URL parameters
  const [imageURL, setImageURL] = useState('');
  const [placeName, setPlaceName] = useState('');
  const [description, setDescription] = useState('');

  const fetchPlaceDetails = async () => {
    try {
      const response = await fetch(`https://galana-backend-8prv.onrender.com/destination/${id}`);
      const data = await response.json();
      setImageURL(data.image || '');
      setPlaceName(data.place || '');
      setDescription(data.description || '');
    } catch (error) {
      console.log('Error fetching place details:', error);
    }
  };

  useEffect(() => {
    fetchPlaceDetails(); // Fetch the place details on component mount
  }, [id]);

  const handleFormSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Prepare the place data to be updated
    const placeData = {
      image: imageURL,
      place: placeName,
      description: description,
    };

    // Call the editPlace function to send the update to the server
    editPlace(id, placeData);
  };

  return (
    <div id='bodyEdit'>
      <div id='containerForm'>
        <form onSubmit={handleFormSubmit} id='form'>
          <h1>Update Place</h1>
          <label htmlFor='Images'>Image URL:</label>
          <br />
          <input
            type='text'
            name='PlaceId'
            id='imageFile'
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor='Place'>Place</label>
          <br />
          <input
            type='text'
            placeholder='Place'
            id='placeInput'
            value={placeName}
            onChange={(e) => setPlaceName(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor='Description'>Description</label>
          <br />
          <textarea
            name='description'
            id='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <br />
          <br />
          <button id='buttonSubmit' type='submit'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Edit;
