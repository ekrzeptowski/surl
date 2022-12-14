# Teeny
Teeny is a modern link shortener based on Next.js

Demo: [https://teeny.lol/](https://teeny.lol/)

## Getting Started

### 1. Download the code of this repository by cloning it:
```bash
git clone https://github.com/ekrzeptowski/teeny.git
```

### 2. Then navigate to directory of the cloned repository and install required dependencies:
```bash
cd teeny

npm install
# or
yarn install
```

### 3. Configure environmental variables:
* DATABASE_URL: Postgres database connection URL
([https://www.prisma.io/docs/concepts/database-connectors/postgresql](https://www.prisma.io/docs/concepts/database-connectors/postgresql))
* NEXTAUTH_URL: URL of the app
* NEXT_PUBLIC_ORIGIN: URL of the app

### 4. Configure authentication providers according to: 
[https://next-auth.js.org/configuration/providers](https://next-auth.js.org/configuration/providers)

### 5. Finally run the app in dev environment or in production:

```bash
npm run dev
# or
npm run build
npm start
```