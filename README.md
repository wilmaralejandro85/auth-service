# Auth Service

Este es un microservicio de autenticación para manejar el registro y la autenticación de usuarios utilizando **Node.js, Express y MongoDB**.

## Instalación

1. Clona el repositorio:
   ```sh
   git clone https://github.com/tuusuario/auth-service.git
   cd auth-service
   ```
2. Instala las dependencias:
   ```sh
   npm install
   ```
3. Configura las variables de entorno creando un archivo `.env` con el siguiente contenido:
   ```env
   PORT=4000
   MONGO_URI=mongodb://localhost:27017/authdb
   JWT_SECRET=tu_clave_secreta
   ```
4. Inicia el servidor:
   ```sh
   npm start
   ```

## Endpoints

### Registro de usuario
- **URL:** `POST /api/auth/register`
- **Body:**
  ```json
  {
    "name": "Usuario Ejemplo",
    "email": "usuario@mail.com",
    "password": "123456"
  }
  ```
- **Respuesta:**
  ```json
  {
    "msg": "Usuario registrado correctamente"
  }
  ```

### Inicio de sesión
- **URL:** `POST /api/auth/login`
- **Body:**
  ```json
  {
    "email": "usuario@mail.com",
    "password": "123456"
  }
  ```
- **Respuesta:**
  ```json
  {
    "token": "eyJhbGciOiJIUzI1..."
  }
  ```

## Tecnologías utilizadas
- Node.js
- Express
- MongoDB (Mongoose)
- JWT para autenticación

---

