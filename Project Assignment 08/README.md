Project Assignment 08
In questo ottavo esercizio proseguiremo con lo sviluppo della todo list andando a implementare le azioni CRUD all'interno della nostra interfaccia grafica:

Creare il componente TodoFormComponent, il quale conterrà un campo per il titolo, uno per la descrizione e un pulsante che, una volta cliccato, consentirà la creazione di un nuovo todo. Questo componente dovrà essere innestato all'interno di TodoPageComponent, il quale riceverà l'evento del submit del form ed eseguirà la chiamata al metodo create del servizio TodoRepositoryService
Al click della checkbox dovrà partire un evento custom al componente parent, il quale si occuperà di effettuare la chiamata al repository per aggiornare il campo done del todo
Aggiungere alla fine del titolo di ciascun todo un pulsante con l'icona del cestino che, una volta cliccato, genererà l'evento custom al componente parent per la cancellazione del todo
