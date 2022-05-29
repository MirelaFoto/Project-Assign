Ogni buon supereroe ha sempre con sè una lista dei compiti da svolgere durante la giornata. Con questo sesto esercizio, infatti, inizieremo la costruzione di una todo list per consentire all'eroe di tenere traccia delle azioni da svolgere. Per la costruzione della todo list verranno fornite delle API da richiamare per eseguire delle operazioni CRUD sulla lista dei todo. In questa prima parte dell'esercizio occorrerà svolgere le seguenti operazioni:

* Un titolo con il nome dell'eroe
* Un immagine dell'eroe
* La lista delle abilità e dei super poteri che l'eroe possiede
* Creare il tipo **Todo** con le seguenti proprietà:
  * id (**number**)
  * title (**string**)
  * description (**string**)
  * done (**boolean**)
  * createdAt (**number**)
* Creare il servizio **TodoRepositoryService** per le operazioni CRUD sui todo
* Il servizio **TodoRepositoryService** dovrà contenere i seguenti metodi:
  * getAll() - per recuperare l'intera lista dei todo
  * getById(id: number) - per recuperare un todo tramite id
  * create(todo: Todo) - per creare un nuovo todo
  * update(todo: Todo) - per aggiornare i dati di un todo
  * deleteById(id: number) - per cancellare un todo tramite id
* Ogni metodo di **TodoRepositoryService** dovrà richiamare un endpoint specifico:
  * getAll() - http://localhost:3000/todos [GET]
  * getById(id: number) - http://localhost:3000/todos/:id [GET]
  * create(todo: Todo) - http://localhost:3000/todos [POST]
  * update(todo: Todo) - http://localhost:3000/todos/:id [PUT]
  * deleteById(id: number) - http://localhost:3000/todos/:id [DELETE]

Infine andremo a rifattorizzare ulteriormente il codice creando il tipo **Hero**, il quale sarà formato dalle seguenti proprietà:

* id (**number**)
* name (**string**)
* imageUrl (**string**)
* abilities (**string[]**)

Per concludere sostituiremo le tre proprietà di input del componente **HeroCardComponent** con un'unica proprietà di tipo **Hero**.
**ATTENZIONE:** Prima di utilizzare le API è necessario avviare il JSON Server lanciando nella root di progetto il seguente comando: `npm run json:server`