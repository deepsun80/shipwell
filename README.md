# Shipwell Test App

This is a single page application written for the Shipwell test. It is built as a very simple app, with minimal styling (ex. no hover effect).

## Structure

1. Run `npm install` to install dependencies.
2. Run `npm start` to start the dev server in `localhost:3000`.
3. The `dist` directory contains the root html page (`index.html`).
4. All core code is in the `src` directory. Within it, the `App.js` starts the component logic, and the remining React components are in the `components` directory.
5. The Redux logic is partitioned in `src` into `actions` and `reducers`.

## UX Flow

1. When the user adds an address, the field level validations in `src\components\AddForm.js` check first, and if passed, the address is checked against the Shipwell validation api (in `src\actions\validate.js`). If passed the address is successfully added.
2. Once added, the information is displayed in the table via `src\components\Table.js`.
3. From the table, an address can be edited, removed, or marked complete.
4. If edit is selected, a second form appears allowing the user to edit the address, using the same validations as add address. This component is the `src\components\EditForm.js`.
5. If marked complete, an address can no longer be edited or removed.
