# PGR305-Eksamen Webutvikling 3

### Gruppemedlemmer:

* Eksamen kandidat : 2024
* Eksamen kandidat : 2033
* Eksamen kandidat : 2047

## Prosjekt detaljer:

Rammeverk og språk som er brukt i prosjektet: 

- React Bootstrap + Bootstrap
- React
- Axios
- Styled Components
- Typescript
- .NET
- C#

## Project Instalasjon:

For å kunne starte prosjektet er det viktig at databasen og serveren for frontenden blir startet riktig. Når man skriver inn kommandoene som er nevn under, er det viktig at terminalen er stilt inn i riktig mappe for at prosjektet skal kunne starte riktig. 

For å starte backenden med Visual Studio Code, skrives denne kommandoen i terminalen. (Mappe = mmaapi)

- "dotnet watch run"

Første gangen prosjektet lastes ned lokalt, må man installere npm pakker, dette utføres ved å skrive denne kommandoen i terminalen. (Utenfor mma og mmaApi)

- "npm install"

For å kunne starte frontenden med Visual Studio Code, må man installer npm pakker først, dette utføres ved å skrive denne kommandoen i terminalen. (Mappe = mma)

- "npm install"

Når de nødvendige pakkene er installert, kan man skrive inn denne kommandoen i terminalen for å starte frontenden.(Mappe = mma)

- "npm start"

### Default porter:

- Backend kjøres på port 5001.
- Frontend kjøres på port 3000.

## Beskrivelse:

Denne eksamen er laget som en fullstack applikasjon som viser MMA utøvere og arenaer som er brukt i forbindelse med MMA kamper. Backenden vår er bygget opp med .NET C# Webapi og kobles opp med backend databasen vår fra Mongo DB. Databasen vår har en singel database (MmmaAthleteDB) og inneholder to collections (MmaAthlete og MmaArena).

## Visuell design:

Vi har valgt å bruke mest mulig Bootstrap i vår utforming av nettsiden. Med dette har vi hatt spesielt fokus på Bootstrap-Grid ved å plassere komponenter på en oversiktelig og brukervennlig måte. Selv med flittig bruk av styling og Bootstrap har vi gått for en stilren og luftig visuell profil. Vi har til tross for dette også lekt oss med ulike animasjoner og effekter på nettsiden både med ren CSS og Bootstrap.

## Mangler:

Eksamen besvarelsen vår mangler muligheten for å kunne endre en eksisterende utøvers infromasjon. Når man trykker seg inn på "endre utøver" via generell informajson siden, har vi fått til at informasjonen som gjelder kommer opp og brukeren har muligheten til å endre informasjonskapslene. Når trykker brukeren trykker på "endre informasjon" blir man automatisk rendret tilbake til utøver siden. Det vi ikke har fått til med eksamens prosjektet, er å oppdatere endringen og liste de ut til siden som viser utøverene. Vi føler at vi var veldig nær med å få dette til. Vi tror at feilen ligger i bruken av Context for å hente inn endret informasjon. 

Hender også at det denne feilmeldingen kommer når prosjektet lastes ned lokalt og man kjører "npm install" i mma: 

"Module not found: Can't resolve 'bootstrap/dist/css/bootstrap.min.css' in '/Users/anonymous/Desktop/STUDIER/web3-exam/mma/src'"
                   
Ved å kjøre "npm install" utenfor begge mappene, blir denne feilen borte og koden kjører. Har derfor nevnt det som et steg ved oppstart av prosjekt i tilfellet denne feilen skulle dukke opp. 


## Forberedelser:

Vi satte oss ned og planla hvordan vi skulle løse eksamen. Skisserte enkle skisser over hvordan vi hadde lyst til å bygge opp nettsiden.
![skisse](https://user-images.githubusercontent.com/54721335/142794157-48e5b0b2-687c-499b-9067-5c0d1c84d53e.jpeg)


