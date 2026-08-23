# Reef Dashboard

A modern dashboard for tracking and understanding the health of a reef aquarium.

Monitor water chemistry, review historical changes, manage your livestock stock list, and use basic trend analysis plus AI-assisted predictions to keep your reef system stable and thriving.

## Overview

This project is designed for reef keepers who want a simple, clear way to:

- track key water parameters over time
- review water change history and maintenance routines
- manage fish, coral, and invertebrate inventory
- identify long-term trends in tank health
- get AI-informed recommendations for likely future conditions

## Features

### Water quality monitoring

Track the most important parameters for reef tank health:

- Alkalinity
- Calcium
- Phosphate
- pH
- Salinity
- Magnesium
- Nitrate
- Temperature

Each metric can be reviewed over time to catch gradual swings before they become problems.

### Water change history

Keep a complete log of maintenance activity, including:

- date and time of water changes
- water volume changed
- notes on adjustments or issues
- historical comparison against water chemistry trends

### Livestock stock list

Manage a live inventory of your aquarium inhabitants:

- Fish
- Corals
- Invertebrates
- Special notes, counts, and status

This helps keep your tank records organized and makes planning easier.

### Trend analysis

The dashboard is built to surface patterns such as:

- rising nitrate over several readings
- salinity drift after maintenance
- gradual pH instability during the week
- temperature fluctuations tied to room conditions

### AI-powered predictions

The app is intended to support basic forecasting for reef conditions, including AI-assisted insights such as:

- projected water chemistry trends
- likely upcoming changes based on historical data
- warnings when parameters are trending toward instability
- recommendations for corrective maintenance or testing frequency

## Tech stack

- Next.js
- React
- TypeScript
- Recharts for data visualization
- Supabase for data storage and backend integration

## Getting started

### Prerequisites

- Node.js 18+
- npm

### Install dependencies

```bash
npm install
```

### Run the app locally

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

### Production build

```bash
npm run build
```

Then start the production server:

```bash
npm run start
```

## Environment variables

If you use Supabase or other external services, add the required environment variables in a `.env.local` file.

Example:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Project structure

```text
reef-dashboard/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
├── README.md
└── .env.local
```

## Example use cases

- Check whether alkalinity and calcium are trending together
- Log weekly water changes and compare before/after values
- Keep track of coral growth and new additions
- Review long-term nitrate and phosphate trends
- Spot risk before pH or salinity swings become problematic

## Roadmap

Planned enhancements may include:

- charting and historical comparisons
- alert thresholds for unstable parameters
- user authentication and saved tank profiles
- AI recommendations with more advanced forecasting
- exportable maintenance reports

## Mission

This project exists to make reef keeping more data-driven, proactive, and easier to manage without losing the human insight that makes a successful reef system thrive.

---

Built for reef keepers who want clarity, consistency, and smarter tank monitoring.
