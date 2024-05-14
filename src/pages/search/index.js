import React, { useState, useEffect } from 'react';
import Hero from '../../components/hero';
import { getPets } from '../../api/petfinder';
import Pet from '../../components/pet';
// Import useSearchParams
import { useSearchParams } from 'react-router-dom';
const SearchPage = () => {

  // Get searchParams object from useSearchParams

  const [searchParams]  = useSearchParams();
  console.log(searchParams,"innnnn")  // Get query parameter using searchParams object
const petToFind = searchParams.get('name');
console.log(petToFind)
  const [pets, setPets] = useState([]);

  useEffect(() => {
    async function getPetsData() {
      const petsData = await getPets('', petToFind);

      setPets(petsData);
    }

    getPetsData();
  }, [petToFind]);

  return (
    <div className="page">
      <Hero displayText={`Results for ${petToFind}`} />

      <h3>Pets available for adoption near you</h3>

      <main>
        <div className="grid">
          {pets.map((pet) => (
            <Pet animal={pet} key={pet.id} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default SearchPage;
