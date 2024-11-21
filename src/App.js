import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import SearchForm from './components/SearchForm';
import RecipeList from './components/RecipeList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <SearchForm />
      <RecipeList />
      <Footer />
    </div>
  );
}

export default App;
