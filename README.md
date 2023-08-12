# PlannerAI by Team Semblantech
Your smart assistant for productivity.

![](/demo-images/landing.png)


## Fully Responsive UI

### Light mode
![](/demo-images/dashboard-lg-light.png) ![](/demo-images/dashboard-md-light.png) ![](/demo-images/dashboard-sm-light.png)

### Dark mode
![](/demo-images/dashboard-lg-dark.png) ![](/demo-images/dashboard-md-dark.png) ![](/demo-images/dashboard-sm-dark.png)


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
**Node version 18.X.X or newer**

### To check 
Open Command Prompt and run
```shell
node -v
```

### To install
Visit the official Node.js website: https://nodejs.org/ (I've used the LTS Version)


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
```env
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
# Change this when you deploy it to a hosting service (I've used Vercel) e.g. https://planner-ai-antonioken22.vercel.app
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### Setup Prisma
Add MySQL Database (I've used PlanetScale)

```shell
npx prisma db push
```
```shell
npx prisma generate
```
```shell
npx prisma studio
```

### Start the app

```shell
npm run dev
```

## Deploy on Vercel
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Credits
I am very thankful to these YouTubers who have shared their web application development processes. They generously provided their React component-based code, which I've used extensively in this web application.

- [Code With Antonio](https://www.youtube.com/watch?v=ffJ38dBzrlY&t=16264s) for most of the front-end and back-end components | [GitHub repo](https://github.com/AntonioErdeljac/next13-ai-saas)
- [Esteban Codes](https://www.youtube.com/watch?v=KUKyTRYGrnU&t=7328s) for the calendar components | [GitHub repo](https://github.com/3stbn/google-calendar-clone)
- [JavaScript Mastery](https://www.youtube.com/watch?v=rqw3OftE5sA&t=704s) for AlanAI integration | [GitHub repo](https://github.com/adrianhajdin/project_news_alan_ai)
