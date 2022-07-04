import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Locations from './Locations'
import Location from './Location'
import Home from './App'
import './index.css'
import Navbar from './components/Navbar'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> {/* components */}
    <BrowserRouter>
      <Navbar />

      <Routes>


        <Route path="/" element={<Home />} /> {/* element e path sono prop --> metodo per passare dei dati ai componenti */}
        <Route path="/locations" element={<Locations />} />
        <Route path="/location/:id" element={<Location />} />


      </Routes>
    </BrowserRouter>
  </React.StrictMode>

  
)

//* Non voletemi male per aver usato quell'oscenità di scorciatoia ma preferivo usare quella e concentrarmi meglio sulla mappa e la loginpage più un paio di altri dettagli piuttosto che perdere tempo a capire come inserire bene un hamburger menu e una barra di ricerca

//! 1. mappa (difficile) priorità 1 prossima settimana? altrimenti chiedi il codice a Isa
//! 2. card nella mappa deve collegarsi al singolo evento con un link posizionato in basso (facile) priorità 1
//! 3. revisione single che dovrà avere - solo in caso riesca a crearla - un link al percorso e altre (facile) priorità 4
//! 4. inserimento dei contenuti veri (almeno 5 eventi) (facile) priorità 4
//! 5. filtri solo nella lista degli eventi (medio) priorità 2
//! 6. searchbar dovrà far apparire da una qualsiasi pagina i risultati (medio) priorità 2
//! 7. personas (facile) priorità 1
//! 8. piccolo framework (facile) priorità 1
//! 9. presentazione (facile) priorità 1
//! 10. percorso (difficile) priorità 3
//! 11. media-query (facile) priorità 3
//! 12. register/login (difficile) priorità 3