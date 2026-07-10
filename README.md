# Informe interactivo — AUNADS AGENCIA

Sitio de una sola página para presentar informes de resultados a tus clientes,
en vez de un PDF. Usa el mismo lenguaje visual de tus otras webs: negro puro,
Helvetica Neue, partículas ambientales y animaciones al hacer scroll.

## Archivos

- `index.html` — la estructura, el diseño y la lógica del sitio. **No la edites** al crear un informe nuevo.
- `report-data.js` — todos los datos del informe (cliente, TikTok, Instagram, ventas). **Este es el único archivo que editas.**

## Publicarlo en GitHub Pages (primera vez)

1. Crea un repositorio nuevo en GitHub (público), por ejemplo `informe-jaime-barbosa`.
2. Sube estos dos archivos (`index.html` y `report-data.js`) a la raíz del repo.
3. Ve a **Settings → Pages**.
4. En "Source" elige la rama `main` y la carpeta `/ (root)`. Guarda.
5. GitHub te da un link como:
   `https://tu-usuario.github.io/informe-jaime-barbosa/`
6. Ese es el link que le compartes al cliente.

(Tarda 1–2 minutos en activarse la primera vez.)

## Generar un informe nuevo (mismo cliente en otro mes, u otro cliente)

1. Duplica la carpeta completa (o crea un repo nuevo desde este mismo como plantilla).
2. Abre `report-data.js` y reemplaza los valores por los del nuevo informe:
   - `agency` → normalmente no cambia.
   - `client` → nombre, rol y periodo del informe.
   - `summary` → los 6 números del resumen ejecutivo.
   - `tiktok` → vistas, seguidores, me gusta, y los 3 videos más vistos.
   - `instagram` → perfil, vistas, seguidores netos, y los posts más vistos.
   - `sales` → inversión en ads, mentorías, low ticket, cash collect.
3. Sube el repo a GitHub y activa Pages (mismos pasos de arriba).
4. Comparte el nuevo link con el cliente.

No necesitas tocar nada de diseño ni de código — todo se genera automáticamente
a partir de `report-data.js`.

## Notas

- El sitio es 100% estático (sin backend), así que funciona perfecto en GitHub Pages.
- Es responsive: se ve bien en celular, tablet y escritorio.
- Si quieres cambiar el nombre o logo de la agencia, edita el bloque `agency` en `report-data.js`.
