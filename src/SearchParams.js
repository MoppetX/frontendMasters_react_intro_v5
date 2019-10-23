import React, { useState, useEffect } from 'react';
// parcel will install this automatically if not found in your dependencies :)
import pet, { ANIMALS } from '@frontendmasters/pet';
import useDropdown from './useDropdown';
import Results from './Results';


const SearchParams = () => {
  const [location, updateLocation] = useState( 'Seattle, WA' );
  const [breeds, setBreeds] = useState( [] );
  const [animal, AnimalDropdown] = useDropdown( 'Animal', 'dog', ANIMALS );
  const [breed, BreedDropdown, setBreed] = useDropdown( 'Breed', '', breeds );
  const [pets, setPets] = useState( [] );
  
  async function requestPets() {
    const { animals } = await pet.animals(
      {
        location,
        breed,
        type: animal
      } );
    
    // if nothing comes back from the API, setPets to an empty array
    setPets( animals || [] );
  }
  
  useEffect( () => {
    setBreeds( [] );
    setBreed( '' );
    
    pet.breeds( animal ).then( ( { breeds: apiBreeds } ) => {
      const breedStrings = apiBreeds.map( ( { name } ) => name );
      setBreeds( breedStrings );
    }, console.error );
  }, [animal, setBreed, setBreeds] );
  // the above are the dependencies for useEffect - the variables that will cause useEffect to update should a
  // change occur to them
  
  return (
    <div className="search-params">
      <form
        onSubmit={e => {
          // this will prevent it from setting up an html post form
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => updateLocation( e.target.value )}
          />
        </label>
        <AnimalDropdown/>
        <BreedDropdown/>
        
        <button>Submit</button>
      </form>
      
      <Results pets={pets}/>
    </div>
  );
};

export default SearchParams;

//
// import React, { useState, useEffect } from "react";
// import pet, { ANIMALS } from "@frontendmasters/pet";
// import useDropdown from "./useDropdown";
// import Results from "./Results";
//
// const SearchParams = () => {
//   const [location, updateLocation] = useState("Seattle, WA");
//   const [breeds, updateBreeds] = useState([]);
//   const [pets, setPets] = useState([]);
//   const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
//   const [breed, BreedDropdown, updateBreed] = useDropdown("Breed", "", breeds);
//
//   async function requestPets() {
//     const { animals } = await pet.animals({
//                                             location,
//                                             breed,
//                                             type: animal
//                                           });
//
//     console.log("animals", animals);
//
//     setPets(animals || []);
//   }
//
//   useEffect(() => {
//     updateBreeds([]);
//     updateBreed("");
//
//     pet.breeds(animal).then(({ breeds }) => {
//       const breedStrings = breeds.map(({ name }) => name);
//       updateBreeds(breedStrings);
//     }, console.error);
//   }, [animal]);
//
//   return (
//     <div className="search-params">
//       <form
//         onSubmit={e => {
//           e.preventDefault();
//           requestPets();
//         }}
//       >
//         <label htmlFor="location">
//           Location
//           <input
//             id="location"
//             value={location}
//             placeholder="Location"
//             onChange={e => updateLocation(e.target.value)}
//           />
//         </label>
//         <AnimalDropdown />
//         <BreedDropdown />
//         <button>Submit</button>
//       </form>
//       <Results pets={pets} />
//     </div>
//   );
// };
//
// export default SearchParams;