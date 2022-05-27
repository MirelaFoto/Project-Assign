In questo secondo esercizio andremo a riorganizzare il codice scritto in precedenza tramite la creazione del componente Stateless HeroCardComponent. Questo componente riceverà tre proprietà in input dal componente padre e li mostrerà all'interno della card. Le proprietà in input che il componente accetterà sono le stesse definite all'interno di AppComponent:

    Un titolo con il nome dell'eroe
    Un immagine dell'eroe
    La lista delle abilità e dei super poteri che l'eroe possiede

Infine andremo a rifattorizzare ulteriormente il codice creando il tipo Hero, il quale sarà formato dalle seguenti proprietà:

    id (number)
    name (string)
    imageUrl (string)
    abilities (string[])

Per concludere sostituiremo le tre proprietà di input del componente HeroCardComponent con un'unica proprietà di tipo Hero.
