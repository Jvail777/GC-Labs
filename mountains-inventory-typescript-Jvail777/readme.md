# TypeScript Lab 1 Instructions

[Instructions](https://docs.google.com/document/d/1w1g66huShVL3Q2adC2HlAxzp96hTgrDfhWZUe3GuVqU/preview)

## Initial Setup
This project is set up and ready to go. Just run the following to download the dependencies.

`npm install`

## Running
Two options...

1. `npm run start:dev`  - This will run `index.ts`, which runs all the other files.
2. Or you can run your files individually, e.g. `npx nodemon src/mountains.ts`.

## Testing
This project has pre-written tests, but they start out disabled. Enable each test file individually by renaming it and removing the .rename-me extension. For example, rename `mountains.test.ts.rename-me` to `mountains.test.ts` when you are ready to start working on the mountains features.

The reason these start disabled is so that you won't see errors for features you haven't started working on yet. The way this works is simply that TypeScript and Jest are only looking for files that end in `.ts` and `.test.ts`.
