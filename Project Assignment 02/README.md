# AngularCourse

Benvenuto/a nello stage di allenamento che ti consentirà di apprendere le skills del mondo Angular.

All'interno di questo file README.md troverai tutte le informazioni degli esercizi da seguire per diventare un vero supereroe di Angular. Per ogni esercizio verranno create due branch: exercise-start e exercise-final. La prima conterrà le informazioni dell'esercizio da eseguire, la seconda invece conterrà l'esercizio completato.

## Esercizio 2
In questo secondo esercizio andremo a riorganizzare il codice scritto in precedenza tramite la creazione del componente Stateless **HeroCardComponent**. Questo componente riceverà tre proprietà in input dal componente padre e li mostrerà all'interno della card. Le proprietà in input che il componente accetterà sono le stesse definite all'interno di **AppComponent**:

* Un titolo con il nome dell'eroe
* Un immagine dell'eroe
* La lista delle abilità e dei super poteri che l'eroe possiede

Infine andremo a rifattorizzare ulteriormente il codice creando il tipo **Hero**, il quale sarà formato dalle seguenti proprietà:

* id (**number**)
* name (**string**)
* imageUrl (**string**)
* abilities (**string[]**)

Per concludere sostituiremo le tre proprietà di input del componente **HeroCardComponent** con un'unica proprietà di tipo **Hero**.
