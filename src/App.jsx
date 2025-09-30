import { useState } from 'react'
import { categories, providers } from './assets/data';//importing from data.js file
import ContactForm from './components/contactForm'
import Footer from './components/footer'
import Header from './components/header'
import Hero from './components/hero'
import ServiceCard from './components/serviceCard'
import ProviderCard from './components/providerCard'
import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All');
  // selectedProvider holds the provider object for which the contact modal should open.
  // It's null when no modal is shown. We set it from ProviderCard via the onContact callback.
  const [selectedProvider, setSelectedProvider] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };
  //console.log('Selected Category:', selectedCategory); //testing

  const filteredProviders = providers.filter((provider) => {
    const matchesCategory = selectedCategory === 'All' || provider.category === selectedCategory;
    const lowerSearch = searchTerm.trim().toLowerCase();
    const matchesSearch =
      !lowerSearch ||
      provider.name.toLowerCase().includes(lowerSearch) ||
      provider.service.toLowerCase().includes(lowerSearch);

    return matchesCategory && matchesSearch;
  });


  return (
    <div>
      <Header onSearch={setSearchTerm} />
      <Hero title="Welcome to Spelman Services" />

      <main>
        <h2>Categories</h2>
        <div className="categories-container">
          {/* Loop over the 'categories' array. 
            For each 'category' in the array, render a ServiceCard.
          */}
          {categories.map((category) => (
            <ServiceCard
              key={category.name}
              category={category}
              onCategorySelect={handleCategorySelect}
            />
          ))}
        </div>

        <h2>Providers</h2>
        <div className="providers-container">
          {filteredProviders.map((provider) => (
            /* Pass setSelectedProvider as onContact so ProviderCard can request the app 
            to open the contact modal for a specific provider by calling onContact(provider).*/
            <ProviderCard key={provider.id} provider={provider} onContact={setSelectedProvider} />
          ))}
        </div>

        {/* Contact form inline */}
        {selectedProvider && (
          <div className="contact-area">
            <ContactForm provider={selectedProvider} onClose={() => setSelectedProvider(null)} />
          </div>
        )}
      </main>

      <Footer info={{ name: "SpelmanServices", year: new Date().getFullYear() }} />
    </div>
  );
}


export default App
