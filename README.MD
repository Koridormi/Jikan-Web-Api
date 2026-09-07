# Jikan Web

![Logotipo de Anime Season](Jikan-Web/public/assets/logotipos/logo.png)

Aplicación web responsive que consulta la temporada actual de anime mediante la API de Jikan. Cada tarjeta muestra la portada, el título, la puntuación y la cantidad de episodios disponibles.

## Funciones

- Consulta de animes de la temporada actual.
- Estados de carga y error durante la petición.
- Valores alternativos cuando la puntuación o los episodios no están disponibles.
- Diseño mobile-first adaptado a móvil, tablet, laptop y escritorio.
- Página informativa sobre el proyecto.

## Tecnologías

- HTML5, Sass y JavaScript.
- [Jikan API](https://jikan.moe/).
- Gulp para compilar estilos, JavaScript, páginas y recursos.
- Playwright para las comprobaciones responsive.

## Uso local

```bash
cd Jikan-Web
npm install
npm run build
```

Abre `Jikan-Web/build/index.html` con Live Server. Para recompilar automáticamente durante el desarrollo:

```bash
npm run dev
```

## Pruebas

Con Live Server disponible en `http://127.0.0.1:5500`:

```bash
npx playwright test
```

## Licencia

Proyecto publicado bajo la licencia MIT.