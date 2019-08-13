# nimbasa-public-transit
Simple Pokemon battle engine implemented in TypeScript/Javascript

### Usage
* To install:
  * `npm install`
* To run all tests:
  * `npm run tests`
* To run a single test suite:
  * `npm run test-single -- <path_to_test_file>`
  * `npm run test -- <path_to_test_file>`
  * ie. `npm run test-single src/moves/MoveSet.spec.ts`
* To run application:
  * `npm run main`

### Project Structure
```
.
├── pokemondata
│   └── <JSON data for moves and pokemon>
├── src
│   ├── actions
│   ├── battlesystem
│   ├── game
│   ├── moves
│   ├── player
│   └── pokemon
└── tests
    └── <Integration and Funcitonal tests>
```
Unit tests are included in the same directory as the classes they test. Integration and functional tests are in the `tests` directory


### API

* `/v1/pokemon/<pokemon_id>/stats`: Gives stats of the given Pokemon


### Acknowledgements
Based on `battle-slackway`, a simple Pokemon battle engine implemented in Java originally written by Samuel Han, Joe Granville, Leo DiCara and James Leung.

API structure based heavily on [this tutorial](https://itnext.io/production-ready-node-js-rest-apis-setup-using-typescript-postgresql-and-redis-a9525871407)
