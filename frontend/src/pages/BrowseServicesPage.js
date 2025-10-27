// import React from 'react';

// function AllProvidersPage() {
//   return (
//     <div style={{ padding: '50px', textAlign: 'center' }}>
//       <h1>All Service Providers</h1>
//       <p>A full list of all providers will be shown here.</p>
//     </div>
//   );
// }

// export default AllProvidersPage;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import './BrowseServicesPage.css';
// import '../components/FeaturedProfessionals.css'; // Import styles for provider cards
// import { popularServices } from '../mockData'; // Import service data for icons

// function BrowseServicesPage() {
//   const [providers, setProviders] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProviders = async () => {
//       try {
//         // Fetch ALL providers from the backend
//         const { data } = await axios.get('http://localhost:5000/api/providers');
//         setProviders(data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Could not fetch providers:', error);
//         setLoading(false);
//       }
//     };
//     fetchProviders();
//   }, []);

//   return (
//     <div className="browse-page">
//       <header className="browse-header">
//         <h1>Browse All Services</h1>
//         <p>Find the perfect professional for your needs</p>
//         {/* Add Search/Filter bar here later */}
//       </header>

//       <section className="service-categories-section">
//          <h2>Service Categories</h2>
//          <div className="services-grid">
//            {popularServices.map((service, index) => (
//              <div key={index} className="service-card">
//                <div className="service-icon">{service.icon}</div>
//                <h3 className="service-name">{service.name}</h3>
//                <p className="service-providers">{service.providers} providers</p>
//              </div>
//            ))}
//          </div>
//       </section>

//       <section className="available-professionals">
//          <h2>Available Professionals ({providers.length})</h2>
//          {loading ? (
//             <div>Loading providers...</div>
//          ) : (
//             <div className="professionals-list">
//               {providers.map(prof => (
//                 // Reusing the card structure from FeaturedProfessionals
//                 <div key={prof._id} className="professional-card">
//                    <div className="card-image-container">
//                      <img src={prof.image} alt={prof.user.name} className="card-image" />
//                      {prof.user.isVerified && <span className="verified-badge">✔️ Verified</span>}
//                    </div>
//                    <div className="card-content">
//                      <div className="card-header">
//                        <span className="service-name">{prof.serviceCategory}</span>
//                        <span className="rating">⭐ 4.9 (mock)</span>
//                      </div>
//                      <h2 className="professional-name">{prof.user.name}</h2>
//                      <p className="details">{prof.location} • {prof.experience} years exp.</p>
//                      <div className="card-footer">
//                        <span className="price">${prof.hourlyRate.toFixed(2)}/hour</span>
//                        <Link to={`/providers/${prof._id}`} className="view-profile-btn">View Profile</Link>
//                      </div>
//                    </div>
//                 </div>
//               ))}
//             </div>
//          )}
//       </section>
//     </div>
//   );
// }

// export default BrowseServicesPage;





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import './BrowseServicesPage.css';
// import '../components/FeaturedProfessionals.css'; // Import styles for provider cards
// import { popularServices } from '../mockData'; // Import service data for icons
// import { FaSearch, FaFilter } from 'react-icons/fa'; // Import icons

// function BrowseServicesPage() {
//   const [providers, setProviders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   // Add state for filters later
//   // const [searchTerm, setSearchTerm] = useState('');
//   // const [sortBy, setSortBy] = useState('Highest Rated');
//   // const [priceRange, setPriceRange] = useState('All Prices');

//   useEffect(() => {
//     const fetchProviders = async () => {
//       try {
//         const { data } = await axios.get('http://localhost:5000/api/providers');
//         setProviders(data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Could not fetch providers:', error);
//         setLoading(false);
//       }
//     };
//     fetchProviders();
//   }, []);

//   return (
//     <div className="browse-page">
//       <header className="browse-header">
//         <h1>Browse All Services</h1>
//         <p>Find the perfect professional for your needs</p>
//         {/* TODO: Add Search form from homepage here */}
//       </header>

//       <section className="service-categories-section">
//          <h2>Service Categories</h2>
//          <div className="services-grid">
//            {popularServices.map((service, index) => (
//              <div key={index} className="service-card">
//                <div className="service-icon">{service.icon}</div>
//                <h3 className="service-name">{service.name}</h3>
//                <p className="service-providers">{service.providers} providers</p>
//              </div>
//            ))}
//          </div>
//       </section>

//       {/* --- FILTER BAR --- */}
//       <section className="filter-bar">
//         <div className="filter-search">
//           <FaSearch className="search-icon"/>
//           <input type="text" placeholder="Search providers..." />
//         </div>
//         <div className="filter-options">
//           <select defaultValue="Highest Rated">
//             <option>Highest Rated</option>
//             <option>Price: Low to High</option>
//             <option>Price: High to Low</option>
//             <option>Most Experienced</option>
//           </select>
//           <select defaultValue="All Prices">
//             <option>All Prices</option>
//             <option>$0 - $50</option>
//             <option>$50 - $100</option>
//             <option>$100+</option>
//           </select>
//           <button className="more-filters-btn">
//             <FaFilter /> More Filters
//           </button>
//         </div>
//       </section>
//       {/* --- END FILTER BAR --- */}


//       <section className="available-professionals">
//          <h2>Available Professionals ({providers.length})</h2>
//          {loading ? (
//             <div>Loading providers...</div>
//          ) : (
//             <div className="professionals-list">
//               {providers.map(prof => (
//                 // Reusing the card structure from FeaturedProfessionals
//                 <div key={prof._id} className="professional-card">
//                    <div className="card-image-container">
//                      <img src={prof.image} alt={prof.user.name} className="card-image" />
//                      {prof.user.isVerified && <span className="verified-badge">✔️ Verified</span>}
//                    </div>
//                    <div className="card-content">
//                      <div className="card-header">
//                        <span className="service-name">{prof.serviceCategory}</span>
//                        <span className="rating">⭐ 4.9 (mock)</span>
//                      </div>
//                      <h2 className="professional-name">{prof.user.name}</h2>
//                      <p className="details">{prof.location} • {prof.experience} years exp.</p>
//                      <div className="card-footer">
//                        <span className="price">${prof.hourlyRate.toFixed(2)}/hour</span>
//                        <Link to={`/providers/${prof._id}`} className="view-profile-btn">View Profile</Link>
//                      </div>
//                    </div>
//                 </div>
//               ))}
//             </div>
//          )}
//       </section>
//     </div>
//   );
// }

// export default BrowseServicesPage;












// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import './BrowseServicesPage.css';
// import '../components/FeaturedProfessionals.css';
// import { popularServices } from '../mockData';
// import { FaSearch, FaMapMarkerAlt, FaFilter } from 'react-icons/fa';

// function BrowseServicesPage() {
//   const [providers, setProviders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState('');
//   const [location, setLocation] = useState('');
//   const [sortBy, setSortBy] = useState('Highest Rated');
//   const [priceFilter, setPriceFilter] = useState('All Prices');

//   useEffect(() => {
//     const fetchProviders = async () => {
//       try {
//         const { data } = await axios.get('http://localhost:5000/api/providers');
//         setProviders(data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Could not fetch providers:', error);
//         setLoading(false);
//       }
//     };
//     fetchProviders();
//   }, []);

//   return (
//     <div className="browse-page">
//       {/* --- HEADER / HERO --- */}
//    <header className="browse-hero">
//   <h1>Browse All Services</h1>
//   <p>Find the perfect professional for your needs</p>

//   <div className="search-card">
//     <div className="input-group">
//       <label>What service do you need?</label>
//       <div className="input-with-icon">
//         <FaSearch className="input-icon" />
//         <input
//           type="text"
//           placeholder="Plumber, Electrician, Tutor..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </div>
//     </div>

//     <div className="input-group">
//       <label>Location</label>
//       <div className="input-with-icon">
//         <FaMapMarkerAlt className="input-icon" />
//         <input
//           type="text"
//           placeholder="Enter your zip code or city"
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//         />
//       </div>
//     </div>

//     <button className="find-btn-orange">Find Services</button>
//   </div>
// </header>


//       {/* --- SERVICE CATEGORIES --- */}
//       <section className="service-categories-section">
//         <div className="categories-header">
//           <h2>Service Categories</h2>
//         </div>
//         <div className="services-grid">
//           {popularServices.map((service, index) => (
//             <div key={index} className="service-card">
//               <div className="service-icon">{service.icon}</div>
//               <h3 className="service-name">{service.name}</h3>
//               <p className="service-providers">{service.providers} providers</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* --- FILTER BAR --- */}
//       <section className="filter-bar">
//         <input
//           className="filter-search"
//           type="text"
//           placeholder="Search providers..."
//         />
//         <div className="filter-dropdowns">
//           <select
//             value={sortBy}
//             onChange={(e) => setSortBy(e.target.value)}
//           >
//             <option>Highest Rated</option>
//             <option>Price: Low to High</option>
//             <option>Price: High to Low</option>
//             <option>Most Experienced</option>
//           </select>

//           <select
//             value={priceFilter}
//             onChange={(e) => setPriceFilter(e.target.value)}
//           >
//             <option>All Prices</option>
//             <option>$0 - $50</option>
//             <option>$50 - $100</option>
//             <option>$100+</option>
//           </select>

//           <button className="more-filters-btn">
//             <FaFilter /> More Filters
//           </button>
//         </div>
//       </section>

//       {/* --- AVAILABLE PROFESSIONALS --- */}
//       <section className="available-professionals">
//         <h2>Available Professionals ({providers.length})</h2>
//         {loading ? (
//           <div>Loading providers...</div>
//         ) : (
//           <div className="professionals-list">
//             {providers.map((prof) => (
//               <div key={prof._id} className="professional-card">
//                 <div className="card-image-container">
//                   <img
//                     src={prof.image}
//                     alt={prof.user.name}
//                     className="card-image"
//                   />
//                   {prof.user.isVerified && (
//                     <span className="verified-badge">✔️ Verified</span>
//                   )}
//                 </div>
//                 <div className="card-content">
//                   <div className="card-header">
//                     <span className="service-name">{prof.serviceCategory}</span>
//                     <span className="rating">⭐ 4.9 (mock)</span>
//                   </div>
//                   <h2 className="professional-name">{prof.user.name}</h2>
//                   <p className="details">
//                     {prof.location} • {prof.experience} years exp.
//                   </p>
//                   <div className="card-footer">
//                     <span className="price">
//                       ${prof.hourlyRate.toFixed(2)}/hour
//                     </span>
//                     <Link
//                       to={`/providers/${prof._id}`}
//                       className="view-profile-btn"
//                     >
//                       View Profile
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </section>
//     </div>
//   );
// }

// export default BrowseServicesPage;









import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./BrowseServicesPage.css";
import "../components/FeaturedProfessionals.css";
import { popularServices } from "../mockData";
import { FaSearch, FaMapMarkerAlt, FaFilter } from "react-icons/fa";

function BrowseServicesPage() {
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("Highest Rated");
  const [priceFilter, setPriceFilter] = useState("All Prices");

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        // 1️⃣ Fetch all providers
        const { data } = await axios.get("http://localhost:5000/api/providers");

        // 2️⃣ For each provider, fetch its rating summary
        const withRatings = await Promise.all(
          data.map(async (provider) => {
            try {
              const summaryRes = await axios.get(
                `http://localhost:5000/api/reviews/${provider._id}/summary`
              );
              return { ...provider, ratingSummary: summaryRes.data };
            } catch (err) {
              // Fallback for providers without reviews
              return {
                ...provider,
                ratingSummary: { avgRating: 0, totalReviews: 0 },
              };
            }
          })
        );

        setProviders(withRatings);
      } catch (error) {
        console.error("Could not fetch providers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProviders();
  }, []);

  return (
    <div className="browse-page">
      {/* --- HEADER / HERO --- */}
      <header className="browse-hero">
        <h1>Browse All Services</h1>
        <p>Find the perfect professional for your needs</p>

        <div className="search-card">
          <div className="input-group">
            <label>What service do you need?</label>
            <div className="input-with-icon">
              <FaSearch className="input-icon" />
              <input
                type="text"
                placeholder="Plumber, Electrician, Tutor..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="input-group">
            <label>Location</label>
            <div className="input-with-icon">
              <FaMapMarkerAlt className="input-icon" />
              <input
                type="text"
                placeholder="Enter your zip code or city"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>

          <button className="find-btn-orange">Find Services</button>
        </div>
      </header>

      {/* --- SERVICE CATEGORIES --- */}
      <section className="service-categories-section">
        <div className="categories-header">
          <h2>Service Categories</h2>
        </div>
        <div className="services-grid">
          {popularServices.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-name">{service.name}</h3>
              <p className="service-providers">
                {service.providers} providers
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- FILTER BAR --- */}
      <section className="filter-bar">
        <input
          className="filter-search"
          type="text"
          placeholder="Search providers..."
        />
        <div className="filter-dropdowns">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option>Highest Rated</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Most Experienced</option>
          </select>

          <select
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
          >
            <option>All Prices</option>
            <option>$0 - $50</option>
            <option>$50 - $100</option>
            <option>$100+</option>
          </select>

          <button className="more-filters-btn">
            <FaFilter /> More Filters
          </button>
        </div>
      </section>

      {/* --- AVAILABLE PROFESSIONALS --- */}
      <section className="available-professionals">
        <h2>Available Professionals ({providers.length})</h2>
        {loading ? (
          <div>Loading providers...</div>
        ) : (
          <div className="professionals-list">
            {providers.map((prof) => (
              <div key={prof._id} className="professional-card">
                <div className="card-image-container">
                  <img
                    src={prof.image}
                    alt={prof.user.name}
                    className="card-image"
                  />
                  {prof.user.isVerified && (
                    <span className="verified-badge">✔️ Verified</span>
                  )}
                </div>

                <div className="card-content">
            <div className="card-header">
  <span className="service-name">{prof.serviceCategory}</span>
  <span className="rating">
    ⭐ {Number(prof.ratingSummary?.avgRating || 0).toFixed(1)} (
    {prof.ratingSummary?.totalReviews || 0} reviews)
  </span>
</div>



                  <h2 className="professional-name">{prof.user.name}</h2>
                  <p className="details">
                    {prof.location} • {prof.experience} years exp.
                  </p>

                  <div className="card-footer">
                    <span className="price">
                      ${prof.hourlyRate.toFixed(2)}/hour
                    </span>
                    <Link
                      to={`/providers/${prof._id}`}
                      className="view-profile-btn"
                    >
                      View Profile
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default BrowseServicesPage;
