# Prueba Técnica Osnet

Este es un proyecto de prueba técnica para Osnet. Es una aplicación web construida con Next.js, React y Tailwind CSS.

## Enlaces
* [Repositorio de GitHub](https://github.com/JhonEduard26/prueba-tecnica-osnet)

## Requisitos

- Node.js (versión 18 o superior)
- npm (versión 8 o superior) o yarn
- Docker

## Instalación

### Instalación con Docker

1. Clona el repositorio:

    ```sh
    git clone https://github.com/JhonEduard26/prueba-tecnica-osnet.git
    ```
    ```sh
    cd prueba-tecnica-osnet
    ```

2. Crea un archivo ```.env.local``` basado en el archivo ```.env.example```

    ```sh
    cp .env.example .env.local
    ```

3. Configura las variables de entorno en ```.env.local``` según sea necesario.

4. Construye y ejecuta el contenedor:

    ```sh
    docker-compose up --build
    ```

### Instalación Manual

1. Clona el repositorio:

    ```sh
    git clone https://github.com/JhonEduard26/prueba-tecnica-osnet.git
    ```
    ```sh
    cd prueba-tecnica-osnet
    ```

2. Instala las dependencias:

    ```sh
    npm install
    # o
    yarn install
    ```

3. Crea un archivo ```.env.local``` basado en el archivo ```.env.example```

    ```sh
    cp .env.example .env.local
    ```

4. Configura las variables de entorno en ```.env.local``` según sea necesario.

## Ejecución en Desarrollo

Para iniciar el servidor de desarrollo, ejecuta:

```sh
npm run dev
# o
yarn dev
```

## Autor
* JhonEduard26 - [GitHub](https://github.com/JhonEduard26)