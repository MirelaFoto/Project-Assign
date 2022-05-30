Project Assignment 07
In questo esercizio proseguiremo con lo sviluppo della nostra todo list attraverso la realizzazione di tre componenti: TodoPageComponent, TodoListComponent e TodoListItemComponent.

Le operazioni da eseguire sono le seguenti:

Creare il componente TodoPageComponent, il quale si occuperà di mostrare la lista e il form per l'aggiunta dei nuovi todo
Creare il componente TodoListComponent, il quale accetterà come proprietà in input un array di Todo e li mostrerà a schermo sotto forma di elenco
Creare il componente TodoListItemComponent per il singolo todo dell'elenco. Questo componente accetterà in input un Todo e lo mostrerà a schermo sotto forma di card. La card dovrà contenere le seguenti informazioni:
Titolo
Descrizione
Data creazione
Checkbox che consentirà di flaggare il todo una volta completato
Creare una nuova rotta per accedere alla pagina contenente la lista dei todo. Per aggiungere una nuova rotta occorrerà utilizzare il modulo RouterModule di Angular
Rifattorizzare il componente AppComponent affinché utilizzi la direttiva RouterOutlet per consentire la navigazione dei componenti. Di conseguenza occorrerà creare il componente HeroPageComponent e la relativa rotta per consentire la navigazione tra la lista dei todo e la card dell'eroe
Infine, aggiungere un pulsante all'interno del componente HeroCardComponent che, una volta cliccato, dovrà indirizzare l'utente alla pagina contenente la lista dei todo.
N.B:* il componente HeroCardComponent è Stateless, pertanto bisognerà gestire il reindirizzamento dell'utente tramite un evento custom