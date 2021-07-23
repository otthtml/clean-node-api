| Statements                  | Branches                | Functions                 | Lines             |
| --------------------------- | ----------------------- | ------------------------- | ----------------- |
| ![Statements](https://img.shields.io/badge/statements-65.85%25-red.svg) | ![Branches](https://img.shields.io/badge/branches-71.43%25-red.svg) | ![Functions](https://img.shields.io/badge/functions-75%25-red.svg) | ![Lines](https://img.shields.io/badge/lines-65.85%25-red.svg) |


# To run the project
Use VSCode's Remote Container extension to bash into the projects container and then execute the node server.

# To generate the UML designs
Run the following command to start the PlanUML server: 
docker run -d -p 8080:8080 plantuml/plantuml-server:jetty

# To generate coverage badges
npm run-script make-badges

# To update packages
Run: 
npx npm-check -s -u
