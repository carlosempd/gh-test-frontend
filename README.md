# Commit History App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.1.

This web app allows to see the commit history of this project (in both repos, frontend and backend). It is conformed by one route /commits wich is loaded by default when the project loads.

The list is shown in a table and it has two hoverable columns, SHA, and author. There is a filter input that allows to filter the list by SHA or Message.

It uses the GitHub API to fetch the data and exposes it through a RESTful endpoint. The project is deployed on Vercel at https://gh-test-frontend-carlosempd.vercel.app


## Guide

As mentioned, this project was generated with Angular Cli, so if you want to run this project locally you must install Angular in order to be able to run the project. Please follow the [link](https://github.com/angular/angular-cli) above to see the installation instructions.

You must install nodeJs also. [Node JS - Documentation](https://nodejs.org/en/)

Please follow this steps in order to run the project:
1. Clone or Download this project. In a terminal run: 
    ```bash
        git clone https://github.com/carlosempd/gh-test-frontend.git
    ```
    (Install [git](https://git-scm.com/downloads) in case you haven't installed it yet).

2. In the terminal navigate to the project folder. For example:
    ```bash
        cd gh-test-frontend
    ```

3. Install node modules using:
    ```bash
        npm install
    ```

4. Run the Development Server as follows in 'Development server' section.


NOTE: In the environment file it is configurate to retrieve the data from the deployed backend side, if you want to connect to local backend, replace de ***apiUrl*** variable, for the local url indicated in https://github.com/carlosempd/gh-test-backend and run the backend project locally. 
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

