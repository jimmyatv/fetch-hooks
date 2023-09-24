import {React, useContext, useMemo, useState} from 'react';
import FetchContext from '../contexts/FetchContext';

const Fetch = () => {

  const {universities} = useContext(FetchContext);
  const [search, setSearch] = useState('');
  
  
  const finalSearch = useMemo(() => {
    const regrx = new RegExp(search, 'gi')
    return(
      universities.filter(unix => unix.name.match(regrx))
    )
  },[search, universities])

  return (
    <div>
      <h3>Universities</h3>
      <input value={search} onChange={(e) => setSearch(e.target.value)} type='text' placeholder='Search universities' />
      <hr />
      <ul style={{listStyle:'none'}}>
        {finalSearch.map((unix, idx) => {
          return(
            <li key={idx}>
              {unix.name}
            </li>
          )
        })}
      </ul>
    </div>
  )
};

export default Fetch;