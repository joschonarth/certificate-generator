<div align="center">

<img alt="certificate-generator" src="./public/navbar/logo.svg" />

# 📜 Certificate Generator

*Gerador de certificados com exportação em PDF, simples e direto ao ponto.*

<img src="https://img.shields.io/github/last-commit/joschonarth/certificate-generator?style=default&logo=git&logoColor=white&color=334EA9&labelColor=27272a" alt="last-commit">
<img src="https://img.shields.io/github/languages/top/joschonarth/certificate-generator?style=default&color=334EA9&labelColor=27272a" alt="repo-top-language">
<img src="https://img.shields.io/github/languages/count/joschonarth/certificate-generator?style=default&color=334EA9&labelColor=27272a" alt="repo-language-count">
<a href="https://ng-certificate-generator.netlify.app/" target="_blank">
  <img src="https://img.shields.io/badge/netlify-deployed-brightgreen?style=default&logo=netlify&logoColor=white&color=334EA9&labelColor=27272a" alt="netlify">
</a>

---

📃 [Sobre](#-sobre)&nbsp;&nbsp;•&nbsp;&nbsp;
🛠️ [Tecnologias](#️-tecnologias)&nbsp;&nbsp;•&nbsp;&nbsp;
✨ [Funcionalidades](#-funcionalidades)&nbsp;&nbsp;•&nbsp;&nbsp;
🚀 [Como rodar](#-como-rodar)&nbsp;&nbsp;

</div>

---

<a href="https://ng-certificate-generator.netlify.app" target="_blank">
  <img width="1366" height="775" alt="screencapture-localhost-4200-certificados-629c509c-3baa-4b8a-8d05-ea50a5c56985-2026-05-01-17_03_27" src="https://github.com/user-attachments/assets/b3f9623e-e72c-43cd-b5dd-8ba83440960c" />
</a>

---

## 📃 Sobre

O **Certificate Generator** é uma aplicação web para geração de certificados personalizados, desenvolvida com **Angular** e **TypeScript**. O usuário preenche um formulário com seu nome e as atividades realizadas, e o sistema gera um certificado contendo o nome do aluno, a lista de atividades e a data de emissão. Também é possível visualizar a lista de certificados gerados e fazer o download de cada um em PDF utilizando a biblioteca **html2canvas**.

---

## 🛠️ Tecnologias

- 🅰️ **[Angular](https://angular.dev/)** — Framework para construção de aplicações web robustas e escaláveis.
- 🟦 **[TypeScript](https://www.typescriptlang.org/)** — Tipagem estática e segurança em tempo de desenvolvimento.
- 🎨 **[Bootstrap](https://getbootstrap.com/)** — Framework CSS para estilização e responsividade.
- 🖼️ **[html2canvas](https://html2canvas.hertzen.com/)** — Geração de imagens e exportação em PDF a partir de elementos HTML.
- 🔄 **[RxJS](https://rxjs.dev/)** — Programação reativa com observables para gerenciamento de estado e eventos.
- 🆔 **[UUID](https://github.com/uuidjs/uuid)** — Geração de identificadores únicos para os certificados.
- 🔍 **[ESLint](https://eslint.org/)** — Linting e padronização de código.

---

## ✨ Funcionalidades

- [x] 📝 Formulário para preenchimento do nome do aluno e das atividades realizadas
- [x] ➕ Adição de múltiplas atividades ao certificado
- [x] 📜 Geração de certificado com nome, lista de atividades e data de emissão
- [x] 📋 Listagem de todos os certificados gerados
- [x] 📥 Download do certificado em PDF via html2canvas
- [x] 🆔 Identificação única de cada certificado com UUID

---

## 🚀 Como rodar

### 📋 Pré-requisitos

- 🟩 [Node.js 18+](https://nodejs.org/)
- 🅰️ [Angular CLI](https://angular.dev/tools/cli)

### 🔧 Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/joschonarth/certificate-generator.git
    ```

2. Acesse a pasta do projeto:

    ```bash
    cd certificate-generator
    ```

3. Instale as dependências:

    ```bash
    npm install
    ```

### ▶️ Execução

Inicie o servidor de desenvolvimento:

```bash
ng serve
```

Acesse **[http://localhost:4200](http://localhost:4200)** no navegador.

### 🏗️ Build de produção

Gere o build otimizado:

```bash
ng build
```

---

## ⭐ Apoie este Projeto

Se curtiu o projeto, deixe uma ⭐ aqui no GitHub — isso ajuda muito!

---

<div align="center">

Feito com ♥ por **[João Otávio Schonarth](https://github.com/joschonarth)**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/joschonarth)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:joschonarth@gmail.com)

</div>
