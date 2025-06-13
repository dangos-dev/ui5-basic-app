# Proyecto SAP UI5

![SAPUI5](https://img.shields.io/badge/SAPUI5-1.120.0-0061AF?style=for-the-badge&logo=sap&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)

Aplicación básica desarrollada con SAP UI5.

## Descripción

Este proyecto es una aplicación de ejemplo que implementa funcionalidades básicas de SAP UI5.

### Características

- Navegación entre vistas
- Headers personalizados
- Controles básicos
- Popups y notificaciones
- Internacionalización (i18n)
- Estructura básica UI5

## Soporte de Idiomas

La aplicación incluye soporte para:

- Español (predeterminado)
- Inglés

Puedes cambiar el idioma usando el selector en la barra superior o añadiendo el parámetro `sap-language` a la URL:

```
http://localhost:8080/index.html?sap-language=en  // Para Inglés
http://localhost:8080/index.html?sap-language=es  // Para Español
```

## Ejecutar la Aplicación

### Directamente en el Navegador

1. Clona el repositorio
2. Abre `webapp/index.html` en tu navegador

### Con Node.js

1. Clona el repositorio
2. Instala Node.js (v18+)
3. Instala dependencias: `npm install`
4. Inicia el servidor: `npm start`

## Comandos

- `npm start` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación
- `npm run lint` - Ejecuta el linter
- `npm run serve-dist` - Sirve la versión de producción

## Enlaces

- [Documentación SAPUI5](https://sapui5.hana.ondemand.com/#/topic)
- [API](https://sapui5.hana.ondemand.com/#/api)
- [Ejemplos](https://sapui5.hana.ondemand.com/#/controls)

## Autor

Jabes Rivas (Dango) - [dangos.dev](https://dangos.dev)

## Licencia

MIT
