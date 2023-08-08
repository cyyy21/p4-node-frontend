import React, { useState } from "react";

function Add() {
  const [imageURL, setImageURL] = useState('');
  const [placeName, setPlaceName] = useState('');
  const [description, setDescription] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();
if(imageURL.length === '' || imageURL.length === 0 ) {
    alert('image url is required');
    return; 
}
if(placeName.length === '' || placeName.length === 0 ) {
    alert('placeName is required');
    return;
}
    // Prepare the place data to be added
    const placeData = {
      image: imageURL,
      place: placeName,
      description: description,
    };
    

    try {
      const response = await fetch('https://galana-backend-8prv.onrender.com/destination', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(placeData), 
        // to convert object in json string
        // Output: {"image":"<value of imageURL>", "place":"<value of placeName>", "description":"<value of description>"}
      });

      if (response.ok) {
        alert('Successfully added');
        //  reset the form after a successful addition
        setImageURL('');
        setPlaceName('');
        setDescription('');
   //if success direct to homepage ;
   window.location.href = '/';
      } else {
        alert('Failed to add the place');
      }
    } catch (error) {
      console.log('Error adding place:', error);
    }
  };

  return (
    <div>
      <div id='bodyEdit'>
        <div id='containerForm'>
          <form onSubmit={handleFormSubmit} id='form'>
            <h1>Add Place</h1>
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
    </div>
  );
}

export default Add;
