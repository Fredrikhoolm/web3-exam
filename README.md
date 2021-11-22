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

## Project Instalasjon:

For å kunne starte prosjektet er det viktig at databasen og serveren for frontenden blir startet riktig. Når man skriver inn kommandoene som er nevn under, er det viktig at terminalen er stilt inn i riktig mappe for at prosjektet skal kunne starte riktig. 

For å starte backenden med Visual Studio Code, skrives denne kommandoen i terminalen. (Mappe = mmaapi)

- "dotnet run"

For å kunne starte frontenden med Visual Studio Code, må man installer npm pakker først, dette utføres ved å skrive denne kommandoen i terminalen. (Mappe = mma)

- "npm install"

Når de nødvendige pakkene er installert, kan man skrive inn denne kommandoen i terminalen for å starte frontenden.(Mappe = mma)

- "npm start"

### Default porter:

- Backend kjøres på port 5001.
- Frontend kjøres på port 3000.

## Beskrivelse:

Denne eksamen er laget som en fullstack applikasjon som viser MMA utøvere og arenaer som er brukt i forbindelse med MMA kamper. Backenden vår er bygget opp med .NET C# Webapi og kobles opp med backend databasen vår fra Mongo DB. Databasen vår har en singel database (MmmaAthleteDB) og inneholder to collections (MmaAthlete og MmaArena).

## Design:

