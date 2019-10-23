import React, { useState, useEffect } from "react";
// parcel will install this automatically if not found in your dependencies :)
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";
// console.log(ANIMALS);

const SearchParams = () => {
  const [location, updateLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  
  useEffect(() => {
    setBreeds([]);
    setBreed("");
    
    pet.breeds(animal).then(({ breeds: apiBreeds }) => {
      const breedStrings = apiBreeds.map(({ name }) => name);
      setBreeds(breedStrings);
    }, console.error);
  }, [animal, setBreed, setBreeds]);
  // the above are the dependencies for useEffect - the variables that will cause useEffect to update should a
  // change occur to them
  
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => updateLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;

//
//   return (
//     <div className="search-params">
//       <form>
//         <label htmlFor="location">
//           Location
//           <input
//             id="location"
//             value={location}
//             placeholder="Location"
//             onChange={e => setLocation( e.target.value )}
//           />;
//         </label>
//
//         <AnimalDropdown/>
//         <BreedDropdown/>
//
//         <button>Submit</button>
//       </form>
//
//       {/*<label htmlFor="animal">*/}
//       {/*  Animal*/}
//       {/*  <select*/}
//       {/*    id="animal"*/}
//       {/*    value={animal}*/}
//       {/*    onChange={e => setAnimal( e.target.value )}*/}
//       {/*    onBlur={e => setAnimal( e.target.value )}*/}
//       {/*  >*/}
//       {/*    <option>{allAnimals}</option>*/}
//       {/*    {ANIMALS.map( animal => (*/}
//       {/*      <option key={animal} value={animal}>*/}
//       {/*        {animal}*/}
//       {/*      </option>*/}
//       {/*    ) )}*/}
//       {/*  </select>*/}
//       {/*</label>*/}
//
//       {/*<label htmlFor="breed">*/}
//       {/*  Breed*/}
//       {/*  <select*/}
//       {/*    disabled={!breeds.length}*/}
//       {/*    // same as: disabled={!breeds.length === 0}*/}
//       {/*    id="breed"*/}
//       {/*    value={breed}*/}
//       {/*    onChange={e => setBreed( e.target.value )}*/}
//       {/*    onBlur={e => setBreed( e.target.value )}*/}
//       {/*  >*/}
//       {/*    <option value="All">All</option>*/}
//       {/*    {*/}
//       {/*      breeds.map( breed => (*/}
//       {/*        <option key={breed} value={breed}>*/}
//       {/*          {breed}*/}
//       {/*        </option>*/}
//       {/*      ) )*/}
//       {/*    }*/}
//       {/*  </select>*/}
//       {/*</label>*/}
//     </div>
//   );
// };
