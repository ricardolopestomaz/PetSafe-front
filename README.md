<a id="readme-top"></a>

<div align="center">
  <img src="https://github.com/ricardolopestomaz/DriverLux/blob/main/public/assets/img/marcaUFT_vertical.png" width="100"/>
  <h3>Universidade Federal do Tocantins (UFT)</h3>
  <p>
    <b>Curso:</b> Bacharelado em Ciência da Computação<br/>
    <b>Professores:</b> Jackson Souza e Edeilson Milhomem da Silva<br/>
    <b>Disciplina:</b> Desenvolvimento Web/Mobile e Projeto de Sistemas
  </p>
</div>

<br/>

<!-- PROJECT SHIELDS -->
<div align="center">

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

</div>

<!-- PROJECT LOGO -->
<br/>
<div align="center">

  <h2 align="center">🐾 AuTag</h2>

  <p align="center">
    Medalha inteligente para pets: identificação passiva via QR Code/NFC + app de reencontro em tempo real.
    <br />
    <a href="./docs"><strong>Explorar a documentação »</strong></a>
    <br />
    <br />
    <a href="#">Ver Demo</a>
    ·
    <a href="https://github.com/ricardolopestomaz/AuTag/issues/new?labels=bug">Reportar Bug</a>
    ·
    <a href="https://github.com/ricardolopestomaz/AuTag/issues/new?labels=enhancement">Solicitar Funcionalidade</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>📑 Sumário</summary>
  <ol>
    <li>
      <a href="#-sobre-o-projeto">Sobre o Projeto</a>
      <ul>
        <li><a href="#-modelo-de-negócio">Modelo de Negócio</a></li>
        <li><a href="#-construído-com">Construído com</a></li>
      </ul>
    </li>
    <li>
      <a href="#-como-começar">Como Começar</a>
      <ul>
        <li><a href="#pré-requisitos">Pré-requisitos</a></li>
        <li><a href="#instalação">Instalação</a></li>
      </ul>
    </li>
    <li><a href="#-uso">Uso</a></li>
    <li><a href="#-roadmap">Roadmap</a></li>
    <li><a href="#-equipe">Equipe</a></li>
    <li><a href="#-contribuindo">Contribuindo</a></li>
    <li><a href="#-licença">Licença</a></li>
    <li><a href="#-contato">Contato</a></li>
    <li><a href="#-links-úteis">Links Úteis</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## 🐾 Sobre o Projeto

O **AuTag** é uma medalha inteligente para pets baseada em QR Code/NFC: um hardware 100% passivo — sem bateria e sem necessidade de recarga — integrado a um ecossistema digital que conecta tutores, animais e quem os encontra pela rua.

Ao contrário de coleiras GPS tradicionais, a medalha AuTag nunca deixa o pet desprotegido por bateria fraca. Quem encontra o animal basta escanear o código com a câmera do celular — sem precisar instalar aplicativo ou criar conta — e já é direcionado ao contato do tutor. Já para o tutor, o app oferece prontuário, histórico do pet e alertas em tempo real a cada leitura da medalha.

**Principais funcionalidades:**
- 🐶 Cadastro e gerenciamento do perfil do pet e do tutor
- 🏷️ Geração e ativação de medalhas via QR Code/NFC
- 📍 Página de contato instantâneo para quem encontra o animal (sem necessidade de login)
- 🔔 Notificações push a cada leitura da medalha
- 📋 Histórico e prontuário do pet no aplicativo
- ⭐ Plano Premium (assinatura) com histórico avançado e alertas por SMS

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>

### 🎯 Objetivo

Oferecer uma solução acessível e sem manutenção para a identificação e o reencontro de pets perdidos, unindo um hardware passivo de baixo custo a uma plataforma digital que gera valor recorrente para o tutor — reduzindo em até 90% o custo em comparação a soluções de rastreamento via GPS.

### 💡 Modelo de Negócio

O projeto segue um modelo de **hardware de entrada + assinatura recorrente**: a venda da medalha física cobre o custo de aquisição do cliente (CAC) e já gera lucro na própria venda, enquanto converte o comprador em usuário do app, abrindo caminho para a receita recorrente do plano Premium (SaaS).

- **Segmentos de clientes:** tutores urbanos, famílias sensíveis a preço, pet shops parceiros (B2B) e adotantes via ONGs.
- **Canais:** venda direta online (site, Mercado Livre, Shopee), pontos físicos em pet shops (B2B2C) e lojas de aplicativos.
- **Fontes de receita:** venda das medalhas, assinatura Premium mensal, comissões B2B (planos de saúde/seguros) e vendas por atacado.

O detalhamento completo (canvas, unit economics e estratégia de go-to-market) está disponível em <a href="./docs/canvas.md">Modelo Canvas de Negócio</a>.

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>

### 🛠️ Construído com

<p align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black">
  <img src="https://img.shields.io/badge/React_Native-61DAFB?style=for-the-badge&logo=react&logoColor=black">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/Supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white">
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white">
</p>

O projeto é desenvolvido em **React**, tanto para o **site** (página de contato/leitura da medalha, acessada via navegador por quem encontra o pet) quanto para o **app** (usado pelos tutores para cadastro, histórico e alertas), este último construído com **React Native**.

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>

<!-- GETTING STARTED -->
## 🚀 Como Começar

Siga os passos abaixo para rodar o site e o app localmente.

### Pré-requisitos

- Node.js (LTS) e npm instalados
  ```sh
  npm install npm@latest -g
  ```
- Conta em um provedor de nuvem (Supabase ou Firebase) para as credenciais do backend

### Instalação

**🌐 Site (React)**

1. Clone o repositório
   ```sh
   git clone https://github.com/ricardolopestomaz/AuTag.git
   cd AuTag/site
   ```
2. Instale as dependências
   ```sh
   npm install
   ```
3. Configure as variáveis de ambiente (`.env`) com as credenciais do Supabase/Firebase
4. Inicie o projeto
   ```sh
   npm run dev
   ```
5. Acesse: `http://localhost:3000`

**📱 App (React Native)**

1. Acesse a pasta do app
   ```sh
   cd AuTag/app
   ```
2. Instale as dependências
   ```sh
   npm install
   ```
3. Configure as variáveis de ambiente (`.env`) com as mesmas credenciais do backend
4. Inicie o projeto (via Expo, se aplicável)
   ```sh
   npx expo start
   ```
5. Abra no emulador ou escaneie o QR Code com o app Expo Go

> ⚠️ Ajuste os passos acima conforme a estrutura de pastas e os scripts definitivos do projeto (ex.: monorepo, Expo vs. React Native CLI).

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>

<!-- USAGE EXAMPLES -->
## 📖 Uso

Use este espaço para exemplos de uso do AuTag: fluxo de cadastro do pet, geração/ativação da medalha, e a página que abre quando alguém escaneia o QR Code. Screenshots, GIFs e links de demo funcionam bem aqui.

*Para mais exemplos, consulte a <a href="./docs">documentação</a>.*

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>

<!-- ROADMAP -->
## 🗺️ Roadmap

- [x] Modelo de Negócio (Business Model Canvas)
- [ ] Levantamento de requisitos funcionais e não funcionais
- [ ] Protótipo no Figma
- [ ] MVP do site (leitura da medalha via QR Code)
- [ ] MVP do app (cadastro de tutor e pet)
- [ ] Integração com backend (Supabase/Firebase)
- [ ] Notificações push
- [ ] Plano Premium (assinatura)

Veja as [issues abertas](https://github.com/ricardolopestomaz/AuTag/issues) para a lista completa de funcionalidades propostas (e problemas conhecidos).

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>

<!-- TEAM -->
## 👥 Equipe

| Nome | GitHub |
|------|--------|
| Anna Beatriz Moura de Oliveira | [bibimoura](https://github.com/bibimoura) |
| Grazyelle Nayara Bento dos Santos | [Grazynaay](https://github.com/Grazynaay) |
| Giovana Torres de Lima Silva | [F4RFALLA](https://github.com/F4RFALLA) |
| Igor Anicezio Oliveira | [IgorAnicezioOliveira](https://github.com/IgorAnicezioOliveira) |
| Ricardo Lopes Tomaz | [ricardolopestomaz](https://github.com/ricardolopestomaz) |
| Ayrton Miranda Pimenta da Silva | [Ampds](https://github.com/Ampds) |

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>

### Top contributors:

<a href="https://github.com/ricardolopestomaz/AuTag/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ricardolopestomaz/AuTag" alt="contrib.rocks image" />
</a>

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>

<!-- LICENSE -->
## 📄 Licença

Distribuído sob a licença especificada em `LICENSE.txt`. Este projeto é desenvolvido para fins acadêmicos na disciplina de Desenvolvimento Web/Mobile e Projeto de Sistemas (UFT).

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>

<!-- CONTACT -->
## ✉️ Contato

Equipe AuTag — Projeto acadêmico UFT

Link do Projeto: [https://github.com/ricardolopestomaz/AuTag](https://github.com/ricardolopestomaz/AuTag)

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>

<!-- USEFUL LINKS -->
## 📌 Links Úteis

<small>
📅 <a href="./docs/sprints.md">Planejamento de Sprints</a><br>
📊 <a href="./docs/canvas.md">Modelo Canvas de Negócio</a><br>
🎨 <a href="#">Protótipo no Figma</a><br>
📗 <a href="./docs/requisitos-funcionais.md">Requisitos Funcionais</a><br>
📙 <a href="./docs/requisitos-n-funcionais.md">Requisitos Não Funcionais</a><br>
🎭 <a href="./docs/user-stories.md">User Stories</a><br>
⚙️ <a href="./docs/api.md">Documentação da API</a><br>
🏗️ <a href="./docs/estrutura-do-projeto.md">Estrutura do Projeto</a>
</small>

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/ricardolopestomaz/AuTag.svg?style=for-the-badge
[contributors-url]: https://github.com/ricardolopestomaz/AuTag/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/ricardolopestomaz/AuTag.svg?style=for-the-badge
[forks-url]: https://github.com/ricardolopestomaz/AuTag/network/members
[stars-shield]: https://img.shields.io/github/stars/ricardolopestomaz/AuTag.svg?style=for-the-badge
[stars-url]: https://github.com/ricardolopestomaz/AuTag/stargazers
[issues-shield]: https://img.shields.io/github/issues/ricardolopestomaz/AuTag.svg?style=for-the-badge
[issues-url]: https://github.com/ricardolopestomaz/AuTag/issues
[license-shield]: https://img.shields.io/github/license/ricardolopestomaz/AuTag.svg?style=for-the-badge
[license-url]: https://github.com/ricardolopestomaz/AuTag/blob/main/LICENSE.txt
