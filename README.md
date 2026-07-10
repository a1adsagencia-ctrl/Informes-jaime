# Informe interactivo — AUNADS AGENCIA

Sitio de una sola página para presentar informes de resultados a tus clientes,
en vez de un PDF. Usa el mismo lenguaje visual de tus otras webs: negro puro,
Helvetica Neue, partículas ambientales y animaciones al hacer scroll.

## Archivos

- `index.html` — la estructura, el diseño y la lógica del sitio. **No la edites** al crear un informe nuevo.
- `report-data.js` — todos los datos del informe (cliente, TikTok, Instagram, ventas, fotos, links de video). **Este es el único archivo que editas.**
- `assets/` — las fotos del cliente (retrato de portada y foto de perfil).

## Videos (TikTok e Instagram)

Cada video "más visto" se muestra como una miniatura con botón de play. Al hacer clic,
se abre un reproductor embebido directo en la página (no saca al cliente del sitio).

En `report-data.js`, cada video necesita:

- **TikTok** → el `id` numérico que aparece en la URL:
  `tiktok.com/@usuario/video/`**`7649945273367678229`**`?...`
- **Instagram** → el `shortcode` que aparece en la URL del reel:
  `instagram.com/reel/`**`DZjICAGtYqT`**`/?...`

No hace falta pegar la URL completa, solo ese fragmento.

### Miniaturas de los videos

TikTok e Instagram no permiten extraer automáticamente la imagen de portada de
cada video (sus APIs públicas están bloqueadas o piden autenticación), así que
las miniaturas se agregan a mano:

1. Toma una captura de pantalla (o guarda la miniatura) de cada video.
2. Guárdala dentro de `assets/thumbs/` — respeta el nombre que ya está en
   `report-data.js` (`tiktok-1.jpg`, `ig-1.jpg`, etc.) o cambia la ruta en el
   campo `thumb` de cada video.
3. Si un video no tiene `thumb`, la tarjeta se muestra oscura con solo el
   botón de play (no se rompe nada, solo se ve menos vistosa).

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

1. Duplica la carpeta completa, **incluida `/assets`** (o crea un repo nuevo desde este mismo como plantilla).
2. Reemplaza las fotos dentro de `/assets` por las del nuevo cliente (mismo nombre de archivo, o cambia el nombre y actualízalo en `report-data.js`).
3. Abre `report-data.js` y reemplaza los valores por los del nuevo informe:
   - `agency` → normalmente no cambia.
   - `client` → nombre, rol, periodo, y las rutas de `heroImage` / `avatarImage`.
   - `summary` → los 6 números del resumen ejecutivo.
   - `tiktok` → vistas, seguidores, me gusta, y los 3 videos más vistos (con su `id`).
   - `instagram` → perfil, vistas, seguidores netos, y los posts más vistos (con su `shortcode`).
   - `sales` → inversión en ads, mentorías, low ticket, cash collect.
4. Sube el repo a GitHub y activa Pages (mismos pasos de arriba).
5. Comparte el nuevo link con el cliente.

No necesitas tocar nada de diseño ni de código — todo se genera automáticamente
a partir de `report-data.js`.

## Notas

- El sitio es 100% estático (sin backend), así que funciona perfecto en GitHub Pages.
- Es responsive: se ve bien en celular, tablet y escritorio.
- Si quieres cambiar el nombre o logo de la agencia, edita el bloque `agency` en `report-data.js`.
