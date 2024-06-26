# Show Searcher - An app where you can search shows on TV, this is intended as a developer skills test

This documentation outlines how you can install, run and run tests as well as some reflections and comments that i managed to do in 5 hours and som future improvements if given time.

## Installing dependencies

1. Download and Install node latest LTS from [node](https://nodejs.org/en). the project is built using Node 20 for running npm scripts etc.
2. Update NPM to a version 8 or above.
2. Open a terminal of choice, and type the following.

``` shell script bash/zsh and similar
npm run i
```

## Starting the application

Starting a local web server with react-refresh hot module reloading.

``` shell script bash/zsh and similar
npm run dev
```

go to http://localhost:5173/
Start searching, select and item in the list and click it to view details.

## Building the application

Will create a bundle ready for production.

``` shell script bash/zsh and similar
npm run build
```

## Testing the application

``` shell script bash/zsh and similar
npm test
```

## What could have been improved in this app given more time than 5h?

## Further improvements if i had more time

Note! the commits with prefix AFTER COMPLETE: 'some text..' are additional features complemented after the 5 hour limit.

1. Better handling of the actual detail of the TV series, now im just doing an id search in the /shows/id endpoint. There was IMDB ids etc that i could have used for more robust and up to date info on the tv series. This could have been indicated at the search level for the user to know that the specific search in IMDB db as well. This would have been perfect for an embedding. IF no IMDB or other TV db data exists i would have used TV maze info, then if no info at all show a message, "no more details regarding this series". Another solution would have been to indicate this directly in the search so the user can get more info at a early stage.
2. Restore previous searches as a history, so the user can come back to a restored session/prev searches, possible google style as a dropdon on click in the input.
3. Separation of content into constants and later to i18n files for translation. Mixing content into code is never a good idea if the need to be edited later on and dynamically updated. 
4. More component tests, now im just testing the overall pages and not the component level.
5. End to End test in a tool like Cypress to cover the entire user journey through the app and catch problem in the real end 'artifact', the actual code going to prod must be tested as well...
6. More error handling in regards to react itself, such as Error Boundary in the router. I would also like to have implemented a global error handler for unhandled promise rejections and other things outside of react.
7. More reusable layouts for the pages, no there is some duplication between SearchView and ShowDetailView, this could have been refactored into a inner layout, aka template for the pages to use.
8. Better CSS structure, im using Material Design from MUI, styling is inlined in the actual components, this is not a good long term structure, and would have been hard to work with in a larger application.
9. Possible Tailwind or SCSS if the app grows to be more efficient and have reusable styles.
10. A custom theme for MUI, where brand identity and common grid layout paddings, margins, colors, gutters etc could have been defined.
11. More solid typescript setup, especiallt with the tests, there where som glitched in the react testing library regarding types that i did not manage to sort out 100%.
