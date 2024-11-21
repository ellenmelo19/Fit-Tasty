import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import RecipeList from './components/RecipeList';
import SearchForm from './components/SearchForm';
import Footer from './components/Footer';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

function MainPage() {
  return (
    <div>
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
