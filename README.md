| Statements                  | Branches                | Functions                 | Lines             |
| --------------------------- | ----------------------- | ------------------------- | ----------------- |
| ![Statements](https://img.shields.io/badge/statements-69.29%25-red.svg) | ![Branches](https://img.shields.io/badge/branches-69.57%25-red.svg) | ![Functions](https://img.shields.io/badge/functions-53.33%25-red.svg) | ![Lines](https://img.shields.io/badge/lines-69.29%25-red.svg) |

# Get started
1. GET IN THE DEVCONTAINER IF YOU WANT TO LIVE. Everything will be executed inside.
2. Install all dependencies using "npm install"
3. Install husky using "npx husky install"
4. Run the tests using "npm test"
5. Commit using commitizen "npx cz"
6. AFTER COMMITING AND BEFORE PUSHING AND CALLING IT A DAY: Please generate the changelog by running "npm run release"

# To run the project
Use VSCode's Remote Container extension to bash into the projects container and then execute the node server.

# To generate the UML designs
Run the following command to start the PlanUML server: 
docker run -d -p 8080:8080 plantuml/plantuml-server:jetty
