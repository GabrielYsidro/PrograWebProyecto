Aqui se colocan carpetas que contienen componentes. Deben seguir la siguiente estructura:

(nombre del componente en camelCase)
----> nombreCamelCase.jsx
----> nombreCamelCase.module.css

Cada estilo del componente se escribe en su propio module.css, de forma que no hay colisiones hacia afuera
Asi, si haces un .p dentro del module.css de un componente holaPadre.jsx, se aplicara para todo .p dentro de ese componente y no
hacia fuera.