| Statements                  | Branches                | Functions                 | Lines             |
| --------------------------- | ----------------------- | ------------------------- | ----------------- |
| ![Statements](https://img.shields.io/badge/statements-78.89%25-red.svg) | ![Branches](https://img.shields.io/badge/branches-73.33%25-red.svg) | ![Functions](https://img.shields.io/badge/functions-63.64%25-red.svg) | ![Lines](https://img.shields.io/badge/lines-78.89%25-red.svg) |

# Get started
1. GET IN THE DEVCONTAINER IF YOU WANT TO LIVE. Everything will be executed inside.
2. Install husky using "npx husky install"
3. Run the tests using "npm test"
4. Commit using commitizen "npx cz"

# To run the project
Use VSCode's Remote Container extension to bash into the projects container and then execute the node server.

# To generate the UML designs
Run the following command to start the PlanUML server: 
docker run -d -p 8080:8080 plantuml/plantuml-server:jetty
