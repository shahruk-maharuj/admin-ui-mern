# Admin UI

The admin dashboard front end for [auth-serv](https://github.com/shahruk-maharuj/auth-serv), my multi-tenant auth service. Built with **React, TypeScript and Vite**.

> **Status: early.** The login flow against the auth service is in place and tested. Dashboard pages for managing users and tenants are next.

## What's here

- **Login** using Ant Design forms, sending credentials to the auth service with a TanStack Query mutation, with loading and error states handled
- **Typed API layer**: one Axios client, configured from `VITE_BACKEND_API_URL`, with endpoint functions on top
- **Routing** with React Router's data router
- **Tests** with Vitest, Testing Library and jsdom (`login.spec.tsx`)

## Run it

You'll need [auth-serv](https://github.com/shahruk-maharuj/auth-serv) running locally first.

```bash
npm install
# .env → VITE_BACKEND_API_URL="http://localhost:5501/api"
npm run dev
```

## Stack

React 19 · TypeScript · Vite · TanStack Query · Ant Design · Axios · React Router · Vitest · Testing Library
