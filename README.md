# ts-boilerplate

Boilerplate mínimo de servidor HTTP em **TypeScript** com **Express**, pronto para iniciar novos projetos sem configuração repetitiva.

## Stack

- **TypeScript** (config base `@tsconfig/node21`)
- **Express** para o servidor HTTP
- **ts-node-dev** para desenvolvimento com hot reload e transpile-only

## Estrutura

```
app/
└── main.ts        # Servidor Express + roteador base
tsconfig.json
package.json
```

## Como rodar

```bash
npm install

# desenvolvimento (hot reload via ts-node-dev)
npm run dev
```

O servidor sobe em `http://localhost:3333`.

## Rota de exemplo

```
GET /  ->  { "message": "hello world with Typescript" }
```

## Como usar como base

1. Use este repositório como template (botão **Use this template**) ou clone-o.
2. Renomeie o projeto em `package.json`.
3. Adicione suas rotas em `app/` e evolua a estrutura conforme necessário.
