# PLANSCAPE PRUEBA TECNICA

Tecnologías usadas:

* React Native con expo para frontend
* Node js con express para el backend.
* Mysql para la base de datos.

## Frontend

 Se utiliza la libreria NativeBase para el estilo general de la app. Para la navegacion se utiliza react-navigation y para el formulario react-hook-form.
 
 La lógica del auth se desarrolla en un custom hook llamado useAuth donde guardamos el token que nos llega del backend en el sistema de almacenamiento AsyncStorage, usando la libreria react-native-async-storage.
 
 
## Backend

Nodejs con express, conectado con MYSQL con la libreria mysql2. 
Para ver los metodos del Api  [Swagger UI API](https://elfin-title-production.up.railway.app/docs).


