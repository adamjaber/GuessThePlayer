import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import SearchBar from '../searchBar/searchBar';
import Leaderboard from '../Leaderboard/Leaderboard';
import './App.css';

function App() {
  const handleSearch = (query) => {
    // Here you can handle the search logic, such as filtering data or calling an API.
    console.log('Searching for:', query);
  };

  return (
    <div className='main-div'>
      <Header />
      <main className="main-content" > 
      <div className='center-div'>
        <SearchBar onSearch={handleSearch} />
        </div>
      <aside className="leaderboard">
        <Leaderboard />
      </aside>
      </main>
      <Footer />
    </div>
  );
}

export default App;
