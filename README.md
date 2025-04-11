This is a [Next.js](https://nextjs.org/) project.

## 🚀 Quick Start

Follow these steps to get the project up and running on your local machine:
- Clone the repo into your local systems
- run

  ```bash
  npm install
  ```
  This will create the node_modules/ folder and install all required packages.

- In the root of the project, create a file named .env and add the following environment variables:

 ```bash
# .env file
# === NextAuth Configuration ===
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret

# === Google OAuth ===
GOOGLE_ID=your_google_client_id
GOOGLE_SECRET=your_google_client_secret

# === Firebase Authentication ===
FIREBASE=your_firebase_api_key

# === MongoDB Connection ===
DATABASE_URL="mongodb+srv://<username>:<password>@cluster0.mongodb.net/myDatabase?retryWrites=true&w=majority"
```
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
