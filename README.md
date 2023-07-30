This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Features

- Tailwind design
- Tailwind animations and effects
- Full responsiveness
- Clerk Authentication (Email, Google, 9+ Social Logins)
- Client form validation and handling using react-hook-form
- Server error handling using react-toast
- Conversation Generation Tool (OpenAI)
- Code Generation Tool (OpenAI)
- Image Generation Tool (OpenAI)
- Music Generation Tool (Replicate AI)
- Video Generation Tool (Replicate AI)
- Page loading state
- Stripe monthly subscription
- Free tier with API limiting
- How to write POST, DELETE, and GET routes in route handlers (app/api)
- How to fetch data in server react components by directly accessing database (WITHOUT API! like Magic!)
- How to handle relations between Server and Child components!
- How to reuse layouts
- Folder structure in Next 13 App Router

## Prerequisites

**Node version 18.x.x or newer**

### To check 

Open Command Prompt and run

```shell
node -v
```

## Getting Started

### Cloning the repository

```shell
git clone https://github.com/antonioken22/planner-ai.git
```

### Install packages

```shell
npm i
```

### Setup .env file

```js
# From https://dashboard.clerk.com/apps/api-keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Clerk Convention
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# From https://platform.openai.com/account/api-keys
OPENAI_API_KEY=
# From https://replicate.com/account/api-tokens
REPLICATE_API_TOKEN=
# From https://studio.alan.app/projects > YourProject > Integrations
NEXT_PUBLIC_ALAN_SDK_KEY=

# From https://app.planetscale.com > YourDatabase > Get connection strings
DATABASE_URL=

# From https://app.crisp.chat/settings/website > Setup instructions  > Website ID
NEXT_PUBLIC_CRISP_WEB_ID=
# From https://dashboard.stripe.com/test/apikeys > Secret key
STRIPE_API_KEY=
# Learn how to obtain this by watching this video https://www.youtube.com/watch?v=ffJ38dBzrlY at 4:28:45
STRIPE_WEBHOOK_SECRET=

# Default Hosting Server
# Change this when you deploy it to a hosting service e.g. https://planner-ai-antonioken22.vercel.app
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### Setup Prisma

Add MySQL Database (I used PlanetScale)

```shell
npx prisma db push

```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome here.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
