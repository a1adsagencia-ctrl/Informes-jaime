/* ============================================================
   REPORT DATA — AUNADS AGENCIA
   ------------------------------------------------------------
   Para generar un informe nuevo (mismo cliente en otro mes,
   u otro cliente distinto):
   1. Duplica esta carpeta completa (incluye /assets).
   2. Edita SOLO los valores de este archivo y reemplaza las
      fotos dentro de /assets si aplica.
   3. Sube la carpeta a un repo de GitHub y activa GitHub Pages.
   No hace falta tocar index.html.
   ============================================================ */

const REPORT = {

  agency: {
    name: "AUNADS AGENCIA",
    tagline: "Gracias por confiar en nuestro trabajo"
  },

  client: {
    name: "Jaime Barbosa",
    role: "Mentor · Trader · Crypto",
    period: "Informe de resultados",
    // Foto de portada (retrato). Debe estar dentro de /assets
    heroImage: "assets/jaime-retrato.png",
    // Foto/tarjeta para el perfil (avatar de la sección Instagram)
    avatarImage: "assets/jaime-perfil-badges.png"
  },

  // Resumen ejecutivo (portada + cierre)
  summary: {
    tiktokViews: 26900,
    tiktokFollowers: 39,
    igViews: 150000,
    igFollowers: 401,
    mentorshipsSold: 11,
    revenue: 11000,
    currency: "USD"
  },

  tiktok: {
    videoViews:    { value: 26900, delta: "+24.8K",  pct: "1,180.9%" },
    profileViews:  { value: 344,   delta: "+310",    pct: "911.8%" },
    likes:         { value: 950,   delta: "+883",    pct: "1,317.9%" },
    totalFollowers:{ value: 237,   note: "Desde el inicio" },
    netFollowers:  { value: 39,    delta: "+20",     pct: "105.3%" },
    // views = para la barra comparativa. id = ID numérico del video (de la URL de TikTok).
    // thumb = ruta a la imagen de miniatura (ponla en /assets/thumbs y referencia el archivo aquí).
    topVideos: [
      { views: 4595, id: "7649945273367678229", thumb: "assets/thumbs/tiktok-1.jpg" },
      { views: 3260, id: "7650322286796377364", thumb: "assets/thumbs/tiktok-2.jpg" },
      { views: 1622, id: "7651825890321534228", thumb: "assets/thumbs/tiktok-3.jpg" }
    ]
  },

  instagram: {
    handle: "jaimebarbosa___",
    bio: "Trader de ORO (XAUUSD)",
    posts: 153,
    followers: 1389,
    following: 335,
    views: 151497,
    netFollowers: 401,
    // views = para la barra comparativa (string, como aparece en el PDF). shortcode = el código del reel en la URL.
    // thumb = ruta a la imagen de miniatura (ponla en /assets/thumbs y referencia el archivo aquí).
    topVideos: [
      { views: "39 mil", shortcode: "DZjICAGtYqT", thumb: "assets/thumbs/ig-1.jpg" },
      { views: "16 mil", shortcode: "DZv67-ktbS5", thumb: "assets/thumbs/ig-2.jpg" },
      { views: "8,5 mil", shortcode: "DZlpzqEPcvB", thumb: "assets/thumbs/ig-3.jpg" },
      { views: "6,6 mil", shortcode: "DZ3wynnNTY1", thumb: "assets/thumbs/ig-4.jpg" }
    ]
  },

  sales: {
    adsInvestment: 0,
    mentorships: 11000,
    lowTicket: 0,
    cashCollect: 7900,
    currency: "USD"
  }

};
