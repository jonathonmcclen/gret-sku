# GRET SKU

Barcode & SKU generation tool. Built with Next.js + Supabase.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) → the SKU generator is at `/sku`.

## Adding Auth

This repo includes the full auth scaffolding from Jot.Space (Supabase client, server client, Auth context/hook). Nothing is guarded by auth yet — the SKU page is public.

To enable auth:

1. Create a new Supabase project
2. Copy `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` into `.env`
3. Wrap the app tree with `<AuthProvider>` in `layout.jsx`
4. Add auth checks wherever needed

## Structure

```
src/
├── config/
│   ├── supabase-client.ts        # Public Supabase client (RLS)
│   └── supabase-server-client.ts # Server client (service role)
├── hooks/
│   └── Auth.tsx                  # AuthProvider + useAuth + helpers
├── app/
│   ├── layout.jsx                # Root layout
│   ├── page.jsx                  # Landing page
│   ├── global.css                # Tailwind imports
│   └── sku/
│       └── page.jsx              # SKU barcode generator
```
