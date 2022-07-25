import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  {/* <React> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  {/* </React> */}
  </>

  
)

//* completato
//? in corso
//! non iniziato
//TODO con bassa priorità

//* Non voletemi male per aver usato quell'oscenità di scorciatoia ma preferivo usare quella e concentrarmi meglio sulla mappa e la loginpage più un paio di altri dettagli piuttosto che perdere tempo a capire come inserire bene un hamburger menu e una barra di ricerca

//? 1. mappa (difficile) priorità 1, prossima settimana? altrimenti chiedi il codice a Isa? - allora domani e nei giorni prossimi giorni fino a lunedí proveremo a capire e a realizzare il codice della mappa se ci riusciamo procederemo nell'inserire i marker e le card a loro annesse
//! 2. card nella mappa deve collegarsi al singolo evento con un link posizionato in basso (facile) priorità 1 la card è stata creata ma con pazienza devo capire come inserire il link alla single nel tasto "see more"
//TODO 3. revisione single che dovrà avere - solo in caso riesca a crearla - un link al percorso e altre (facile) priorità 4
//TODO 4. inserimento dei contenuti veri (almeno 5 eventi) (facile) priorità 4 dopo aver fatto tutto il codice possibile
//? 5. filtri solo nella lista degli eventi (medio) priorità 2 da fare nel weekend
//? 6. searchbar dovrà far apparire da una qualsiasi pagina i risultati (medio) priorità 2 il componente è stato creato ed inserito nella navbar ma il JS non è ancora stato inserito
//! 7. personas (facile) priorità 1
//! 8. piccolo framework (facile) priorità 1
//! 9. presentazione (facile) priorità 1 abbiamo impostato la maggior parte del testo che andrà poi revisionato e andrà creata una piccola grafica per la presentazione
//TODO 10. percorso (difficile) priorità 3
//TODO 11. media-query (facile) priorità 3 le faremo subito dopo l'inserimento dei conteniti perciò dopo tutto quanto
//* 12. register/login (difficile) priorità 3 dopo aver fatto la mappa o prima nel caso domenica non fossimo ancora riusciti ad inserire la mappa creeremo i due componenti di login e register grazie a daisiUI

//? va assolutamente capita e sistemata la situzione con le pages e la exemples

//! Nico stai davvero attento a rispettare i tempi che hai previsto e soprattutto sta attento a gestire il CMS da quello che hai già visto è delicato e se si rompe dopo la lezione di lunedí che sarà l'ultima o lo sistemi da solo oppure fai tutto il database da capo il che ti premderebbe tanto tempo

//TODO Aggiornamenti giorno per giorno:

//? 04/07/22 23:32 Per il momento sono nervosissimo vero ma anche molto soddisfatto, mancano 23 giorni e secondo i miei calcoli ho tutto sotto controllo, ho organizzato tutto e se mi impegno ce la faccio
//? martedì chiuderemo il fronte di New Media Art se sarà un successo tutte le truppe si potranno concetrare con più calma sul progetto finale
//? Proxma è con te avanti come un treno Nico come hai sempre fatto supera te stesso

//? ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//? 05/07/22 15:24 Oggi ho iniziato bene completanto layout della LoginPage e RegisterPage non è l'ordine stabilito ma va bee comunque ho preparato i tutorial per gli step successivi inizieremo dalla mappa sta sera RICORDA: la mappa è la cosa più importante di tutte se fai quella con un paio delle funzioni necessarie ad essa sei a cavallo il resto è principalmente filtri - della quale hai già preparato il tutorial per capirli e hai la lezione di Salvatore a disposizione (compresa la searchbar) - e il percorso per arrivare all'evento. Quando avrai fatto la mappa parti con Figma e lascia perdere i filtri e il percorso così il lavoro sarebbe già presentabile.

//? 05/07/22 15:53 Non mi convince abbastanza il menù penso che se finisco tutto abbastanza in fretta gli darò un occhiata