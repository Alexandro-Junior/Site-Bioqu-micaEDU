/*
 * Configuração do site do BioquímicaEDU: o único arquivo a editar quando
 * sair uma versão nova. Detalhes no README.md.
 *
 * Os arquivos de instalação ficam nas versões (Releases) deste repositório,
 * que não limitam downloads de repositórios públicos. O plano gratuito do
 * Firebase Hosting, onde fica o site, permite só 360 MB de tráfego por dia,
 * o que acabaria em poucos downloads.
 */
window.BIOQ = {
  versao: "0.6",
  dataVersao: "outubro de 2026",

  // "publicado: false" mostra o botão como "Em breve", sem link.
  windows: {
    publicado: true,
    url: "https://github.com/Alexandro-Junior/Site-Bioqu-micaEDU/releases/latest/download/BioquimicaEDU-Windows.exe",
    tamanho: "41 MB",
  },
  android: {
    publicado: true,
    url: "https://github.com/Alexandro-Junior/Site-Bioqu-micaEDU/releases/latest/download/BioquimicaEDU-Android.apk",
    tamanho: "24 MB",
  },

  // true quando o servidor intermediário do tutor estiver no ar
  // (docs/TUTOR_GEMINI.md, parte 3, no repositório do app)
  tutorComIA: true,

  codigoFonte: "https://github.com/Alexandro-Junior/bioquimica-edu",
};
