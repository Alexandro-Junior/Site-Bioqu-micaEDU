# Site do BioquímicaEDU

Página de apresentação e download do **BioquímicaEDU**, app gratuito para
estudar 20 marcadores bioquímicos com revisão espaçada, casos clínicos e um
tutor com inteligência artificial, para computador, tablet e celular.

O app é resultado do projeto de iniciação científica *Desenvolvimento de
software educacional para o ensino interativo de bioquímica clínica:
marcadores bioquímicos e sua correlação com doenças* (UNICID, PIBIC/CNPq).
O código do app está em
[Alexandro-Junior/bioquimica-edu](https://github.com/Alexandro-Junior/bioquimica-edu).

## O que tem aqui

É um site estático: HTML, CSS e um pouco de JavaScript, sem bibliotecas
externas. Fontes e imagens estão no próprio repositório, e nenhum arquivo é
carregado de outros servidores (nem fontes, nem análise de visitas).

```
index.html     a página
estilo.css     cores e fonte do app, tema claro e escuro
config.js      versão e links de download: o único arquivo a editar por versão
app.js         preenche os botões e destaca a versão certa para o aparelho de quem visita
imagens/       logo e capturas de tela do app (WebP)
fontes/        Atkinson Hyperlegible (licença SIL OFL, em fontes/OFL.txt)
firebase.json  configuração do Firebase Hosting (com cabeçalhos de segurança)
```

A página segue as cores e a fonte do app, se adapta a celular, tablet e
computador, respeita o tema escuro e a opção de reduzir animações do
sistema, e os textos têm contraste de pelo menos 4,5:1 (WCAG 2.2, nível
AA).

## Ver no computador

Na pasta do repositório:

```bash
python -m http.server 8137
```

Depois abra http://localhost:8137.

## Publicar no Firebase Hosting (grátis)

O plano gratuito (Spark) oferece 10 GB de armazenamento e 360 MB de
tráfego por dia, o que basta para o site, que tem menos de 1 MB. Os
arquivos de instalação do app **não** ficam aqui: ficam nas versões
(Releases) do repositório do app, que não limitam downloads, e os botões do
site apontam para lá.

1. Instale o Firebase CLI (precisa do Node.js):
   ```bash
   npm install -g firebase-tools
   ```
2. Entre com a sua conta Google. O navegador abre para você autorizar:
   ```bash
   firebase login
   ```
3. Escolha o projeto do Firebase (pode ser o mesmo do login do app):
   ```bash
   firebase use --add
   ```
4. Publique:
   ```bash
   firebase deploy --only hosting
   ```

O endereço aparece no fim, no formato `https://SEU-PROJETO.web.app`.

## Quando sair uma versão nova do app

1. No repositório do app, publique os arquivos `BioquimicaEDU-Windows.exe`
   e `BioquimicaEDU-Android.apk` numa versão (Release), com esses nomes
   exatos. Os links usam `releases/latest/download/`, então apontam sempre
   para a versão mais recente.
2. Em `config.js`:
   - atualize `versao`, `dataVersao` e os tamanhos dos arquivos;
   - mude `publicado` para `true` nos botões disponíveis;
   - mude `tutorComIA` para `true` quando o servidor do tutor com IA
     estiver no ar.
3. Publique de novo: `firebase deploy --only hosting`.

Enquanto `publicado` estiver `false`, o botão aparece como "Em breve",
sem link.

## Capturas de tela

As imagens em `imagens/` são geradas pelo próprio app, com um progresso de
exemplo, pelo script `criar_capturas_site.py` do repositório do app.
Depois de gerá-las, copie a pasta `site/imagens/` de lá para cá.

## Créditos

- Aluno: Alexandro de Araujo Junior
- Orientador: Prof. Francisco de Assis Cavallaro
- Universidade Cidade de São Paulo (UNICID), PIBIC/CNPq
- Fonte Atkinson Hyperlegible, do Braille Institute, sob a SIL Open Font
  License (`fontes/OFL.txt`)

O BioquímicaEDU é material de apoio ao estudo e não substitui orientação
profissional nem serve para diagnóstico.
