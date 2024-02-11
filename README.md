# Dev Explorer

## Overview

Dev Explorer is a web application that allows users to explore detailed information about developers on platforms like GitHub. Users can search for a specific developer by username and view their profile details, including their name, avatar, company, location, email, followers, following, public repositories, and Twitter username.

## Features

- Users listing page
- View detailed developer profile information
- Navigate back to the previous page
- Responsive design for various screen sizes

## Tech Stack

The Dev Explorer application is built using the following technologies:

- **Frontend**:
  - React: JavaScript library for building user interfaces
  - React Router: Library for routing in React applications
  - Material-UI: React component library for building UIs with Material Design
  - TypeScript: Superset of JavaScript with static typing
  - Context API: React feature for managing global state
  - CSS: Styling the components
  - Fetch API: For making HTTP requests to platforms like GitHub API
  - Vite: A fast, opinionated frontend build tool that provides lightning-fast hot module replacement (HMR) and instant server start
  
## Installation

To run the Dev Explorer application locally, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone <https://github.com/Durgesh2601/DevExplorer.git>
   ```

2. Navigate to the project directory:

   ```bash
   cd dev-explorer
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your web browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## Tech Documentation

### Context API

The Context API is used to manage global state in the application. It provides a way to pass data through the component tree without having to pass props down manually at every level. In this project, a context provider is used to cache developer data fetched from platforms like GitHub API, which improves performance by reducing the number of HTTP requests made.

### Material-UI

Material-UI is a popular React component library that implements Google's Material Design. It provides pre-designed and customizable components for building modern, responsive web applications. In this project, Material-UI components are used extensively to create a clean and visually appealing user interface.

### TypeScript

TypeScript is a statically typed superset of JavaScript that adds optional static typing to the language. It helps catch errors early in the development process and improves code quality and readability. In this project, TypeScript is used to ensure type safety and provide better developer tooling and documentation.

### React Router

React Router is a popular routing library for React applications. It allows for declarative routing in the application, enabling users to navigate between different views or pages. In this project, React Router is used to define routes for different components, enabling users to navigate to the developer details page when searching for a developer.

### Vite

Vite is a fast, opinionated frontend build tool that provides lightning-fast hot module replacement (HMR) and instant server start. In this project, Vite is used as the build tool to compile and bundle the project's assets and dependencies for development and production environments.

## Deployment

The Dev Explorer application is deployed on Vercel and is accessible online. You can view it [here](https://dev-explorer.vercel.app/).
