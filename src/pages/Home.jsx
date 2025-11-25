import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import { searchMovies, getPopularMovies } from '../services/api';
import '../css/Home.css';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load popular movies initially
  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const data = await getPopularMovies();
        setMovies(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  // Handle search
  const handleSearch = async (e) => {
    e.preventDefault();

    // Prevent empty search
    if (!searchQuery.trim()) return;

    setLoading(true);
    try {
      const results = await searchMovies(searchQuery);
      setMovies(results);
      setError(null);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      {/* Search Form */}
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
          placeholder="Search for movies..."
        />
        <button type="submit" className="search-btn">
          Searchssaslkklkmlmkllljljklmkkmkmlmll
        </button>
      </form>

      {/* Loading / Error / Movie Grid */}
      {loading ? (
        <div className="loading">Loading...</div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        <div className="movies-grid">
          {movies.length > 0 ? (
            movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)
          ) : (
            <div className="no-results">No movies found.</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
