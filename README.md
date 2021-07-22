

# To run the project
Use VSCode's Remote Container extension to bash into the projects container and then execute the node server.

# To generate the UML designs
Run the following command to start the PlanUML server: 
docker run -d -p 8080:8080 plantuml/plantuml-server:jetty

# To update packages
Run: 
npx npm-check -s -u
