# ShortURL
ShortURL is a modern link shortener based on Next.js

Demo: [http://l.jkrzeptowski.pl/](http://l.jkrzeptowski.pl/)

## Getting Started

### 1. Download the code of this repository by cloning it:
```bash
git clone https://github.com/saj96n/surl.git
```

### 2. Then navigate to directory of the cloned repository and install required dependencies:
```bash
cd surl

npm install
# or
yarn install
```

### 3. Configure environmental variables:
* DATABASE_URL: MySQL database connection URL
([https://www.prisma.io/docs/concepts/database-connectors/mysql/#connection-details](https://www.prisma.io/docs/concepts/database-connectors/mysql/#connection-details))
* NEXTAUTH_URL: URL of the app
* NEXT_PUBLIC_ORIGIN: URL of the app
* NEXT_PUBLIC_MATOMO_URL: URL of the Matomo instance (optional)
* NEXT_PUBLIC_MATOMO_SITE_ID: Matomo site id (optional)

### 4. Configure authentication providers according to: 
[https://next-auth.js.org/configuration/providers](https://next-auth.js.org/configuration/providers)

### 5. Finally run the app in dev environment or in production:

```bash
npm run dev
# or
npm run build
npm start
```