# importAppTS
Glue enabled import application

# Glue App Config
In order to use the Import Application with GlueDesktop, copy and paste the 'importApp.json' configuration in the %localappdata%\Tick42\GlueDesktop\config\apps folder

# Installation, Build and Running
In order to use the application, all dependencies must be installed via:
```cmd
npm i           // install the dependencies
```
The project must be built via:
```cmd
npm run build //builds the project with rollup and typescript
```
The script must be executed to host the http-server:
```cmd
npm run start   // run the server
```
# Layouts or Application definitions
The application can utilize other layout or application definitions, to do so place them in either appGroup or layouts .json config files in the respective folders. 
