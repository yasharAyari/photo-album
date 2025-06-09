# JS Mono

A modern TypeScript-based monorepo built with **Yarn Workspaces**, supporting both a **Next.js web app** and an **Expo React Native mobile app**, with shared logic housed in a common package.

---

## 🏗 Project Structure

```bash
js-mono/
├── apps/
│   ├── web/       # Next.js app
│   └── mobile/    # Expo React Native app
├── packages/
│   └── libs/       # Shared TypeScript code used across web and mobile
├── package.json   # Root workspace config
└── yarn.lock
```

---

## 📦 Workspaces

This monorepo uses **Yarn Workspaces** for dependency management and project organization.

```json
"workspaces": [
  "apps/*",
  "packages/*"
]
```

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
yarn install
```

### 2. Start Web App (Next.js)

```bash
yarn web:dev
```

### 3. Start Mobile App (Expo)

```bash
yarn mobile:dev
```

After that, you can press `i` to run the app on ios simulator or `a` to run the app on an android device or simulator.

## 📚 Shared Code

All shared logic, hooks, types, and utilities are located in:

```
packages/libs/
```

This is imported via aliases such as:

```ts
import { useData } from '@libs/hooks/useData';
```

The apps `tsconfig.json` are configured to resolve this alias.

---

## ✅ Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `yarn web:dev`    | Start the web app (Next.js)          |
| `yarn mobile:dev` | Start the mobile app (Expo CLI)      |
| `yarn lint`       | Lint all shared and app code         |
| `yarn test`       | Run tests defined in `packages/libs` |

---

## 🧪 Testing

Tests for shared logic live in `packages/libs`.

To run tests:

```bash
yarn test
```

Tests are written with **Jest** and **@testing-library/react**.

---

## 🧼 Linting

This project uses a unified ESLint config for web, mobile, and shared code:

```bash
yarn lint
```

---

## ✨ Tech Stack

- **React 19**
- **React Native 0.76 (via Expo)**
- **Next.js 15**
- **TypeScript**
- **Yarn Workspaces**
- **Jest**
- **ESLint + Prettier**
