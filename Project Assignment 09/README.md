Project Assignment 09
In questo esercizio eseguiremo del refactoring per migliorare la leggibilità e la riusabilità di alcune funzionalità sviluppate:

Il componente TodoPageComponent contiene troppa logica, pertanto possiamo rifattorizzarlo spostando la sua logica all'interno del servizio TodoFacadeService, il quale si occuperà di richiamare ed effettuare la sottoscrizione ai metodi di TodoRepositoryService e di restituire la lista dei todo aggiornata
Spostare all'interno di una direttiva la funzionalità che si occupa di effettuare lo "ZoomIn" del nome dell'eroe presente nel componente HeroCardComponent
Spostare all'interno di un'altra direttiva la funzionalità che si occupa di effettuare l'evidenziazione delle abilità del supereroe presente nel componente HeroCardComponent