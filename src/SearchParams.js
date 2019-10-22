import React, { useState } from 'react';
// parcel will install this automatically if not found in your dependencies :)
import { ANIMALS } from '@frontendmasters/pet';


const SearchParams = () => {
  // this is a HOOK
  // all hooks begin with 'use' + 'whatever'
  // hooks never go inside of if-statemens or loops
  // second argument: good practice to always have this var start with 'set'
  const [location, setLocation] = useState( 'Seattle, WA' );
  const allAnimals = 'ALL ANIMALS';
  const [animal, setAnimal] = useState( allAnimals );
  const [breed, setBreed] = useState( '' );
  const [breeds, updateBreeds] = useState( [] );
  
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => setLocation( e.target.value )}
          />;
        </label>
        <button>Submit</button>
      </form>
      
      <label htmlFor="animal">
        Animal
        <select
          id="animal"
          value={animal}
          onChange={e => setAnimal( e.target.value )}
          onBlur={e => setAnimal( e.target.value )}
        >
          <option>{allAnimals}</option>
          {ANIMALS.map( animal => (
            <option key={animal} value={animal}>
              {animal}
            </option>
          ) )}
        </select>
      </label>
      
      <label htmlFor="breed">
        Breed
        <select
          disabled={!breeds.length}
          // same as: disabled={!breeds.length === 0}
          id="breed"
          value={breed}
          onChange={e => setBreed( e.target.value )}
          onBlur={e => setBreed( e.target.value )}
        >
          <option value="All">All</option>
          {
            breeds.map( breed => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ) )
          }
        </select>
      </label>
    </div>
  );
};

export default SearchParams;