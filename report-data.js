/* ============================================================
   REPORT DATA — AUNADS AGENCIA
   ------------------------------------------------------------
   Para generar un informe nuevo (mismo cliente en otro mes,
   u otro cliente distinto):
   1. Duplica esta carpeta completa.
   2. Edita SOLO los valores de este archivo.
   3. Sube la carpeta a un repo de GitHub y activa GitHub Pages.
   No hace falta tocar index.html ni styles/script.
   ============================================================ */

const REPORT = {

  agency: {
    name: "AUNADS AGENCIA",
    tagline: "Gracias por confiar en nuestro trabajo"
  },

  client: {
    name: "Jaime Barbosa",
    role: "Mentor · Trader · Crypto",
    period: "Informe de resultados"
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
    topVideos: [4595, 3260, 1622]
  },

  instagram: {
    handle: "jaimebarbosa___",
    bio: "Trader de ORO (XAUUSD)",
    posts: 153,
    followers: 1389,
    following: 335,
    views: 151497,
    netFollowers: 401,
    topVideos: ["39 mil", "16 mil", "8,5 mil", "6,6 mil"]
  },

  sales: {
    adsInvestment: 0,
    mentorships: 11000,
    lowTicket: 0,
    cashCollect: 7900,
    currency: "USD"
  }

};
