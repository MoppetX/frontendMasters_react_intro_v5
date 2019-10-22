import React, { useState, useEffect } from "react";
// parcel will install this automatically if not found in your dependencies :)
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  const [location, updateLocation] = useState("Seattle, WA");
  const [breeds, updateBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, updateBreed] = useDropdown("Breed", "", breeds);
  
  useEffect(() => {
    updateBreeds([]);
    updateBreed("");
    pet.breeds(animal).then(({ breeds }) => {
      const breedStrings = breeds.map(({ name }) => name);
      updateBreeds(breedStrings);
    }, console.error);
  }, [animal]);
  
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
