# Product Master

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.1.

## Configuration

Local Env
```
environment = {
    production: false,
    PORT: 4000 | xxxx,
    SERVER: "http://localhost:4004" | vercel | render
};
```

Prod Env
```
environment = {
    production: true,
    PORT: 4000 | xxxx,
    SERVER: "http://54.255.239.151:4123/products"
};
```

## Development server

Run `npm run dev` for a dev server.

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.


## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Demo

Vercel: [Product Master](https://angular-ng-rx-crud.vercel.app/)
