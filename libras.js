/*
 * Página de tradução para Libras, aberta pelo botão "Libras" do app.
 *
 * O app manda o texto depois do # (bioquimicaedu.web.app/libras#t=...):
 * essa parte do endereço não vai para o servidor do site. A página abre o
 * VLibras Widget e, quando o tradutor fica pronto, "clica" no texto, que é
 * como o VLibras recebe o que traduzir. O próprio VLibras marca o texto
 * com a classe vlibras--active quando aceita o clique; até lá, a página
 * tenta de novo a cada segundo.
 *
 * Sem botões nesta página: com o VLibras aberto, ele intercepta os cliques
 * para traduzir o que foi clicado.
 */
(function () {
  "use strict";
  var LIMITE_TEXTO = 1500;
  var TENTATIVAS = 90;   // ~1 minuto e meio para o tradutor carregar

  var parametros = new URLSearchParams(location.hash.slice(1));
  var texto = (parametros.get("t") || "").trim().slice(0, LIMITE_TEXTO);
  var elTexto = document.getElementById("texto");
  var elEstado = document.getElementById("estado");

  if (!texto) {
    elTexto.textContent = "Nenhum texto foi recebido. Use o botão Libras dentro do app.";
    elEstado.textContent = "Sem texto para traduzir.";
    return;
  }
  elTexto.textContent = texto;

  if (!window.VLibras || !window.VLibras.Widget) {
    elEstado.textContent = "Não foi possível carregar o VLibras. Confira a internet e recarregue a página.";
    return;
  }
  new window.VLibras.Widget("https://vlibras.gov.br/app");

  function abrir() {
    if (!window.VLibrasWidget || typeof window.VLibrasWidget.open !== "function") {
      setTimeout(abrir, 300);
      return;
    }
    window.VLibrasWidget.open();
    var tentativas = 0;
    (function tentar() {
      tentativas++;
      elTexto.click();
      if (elTexto.classList.contains("vlibras--active")) {
        elEstado.textContent = "Traduzindo. Para ver de novo, clique no texto.";
        return;
      }
      if (tentativas === 8) {
        elEstado.textContent = "Carregando o tradutor… na primeira vez leva alguns segundos.";
      }
      if (tentativas < TENTATIVAS) {
        setTimeout(tentar, 1000);
      } else {
        elEstado.textContent = "O tradutor está demorando. Quando ele aparecer à direita, clique no texto para traduzir.";
      }
    })();
  }

  if (document.readyState === "complete") abrir();
  else window.addEventListener("load", abrir);
})();
