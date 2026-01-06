# Supabase Setup Guide

## Step-by-Step Instructions

### 1. Create Supabase Account
1. Go to https://supabase.com
2. Click "Start your project"
3. Sign in with GitHub

### 2. Create New Project
1. Click "New Project"
2. Fill in:
   - **Name**: `bcc-database`
   - **Database Password**: Create a strong password (save it!)
   - **Region**: Choose closest to your location
   - **Pricing Plan**: Free
3. Click "Create new project"
4. Wait 2-3 minutes for setup

### 3. Create Database Tables

1. Go to **SQL Editor** (left sidebar)
2. Click "New query"
3. Copy and paste this SQL:

```sql
-- Members Table
CREATE TABLE members (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  campus TEXT NOT NULL,
  interest TEXT NOT NULL,
  joined_at TIMESTAMP DEFAULT NOW()
);

-- Enquiries Table
CREATE TABLE enquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE members ENABLE ROW LEVEL SECURITY;
ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (for form submissions)
CREATE POLICY "Allow public inserts" ON members
  FOR INSERT TO anon
  WITH CHECK (true);

CREATE POLICY "Allow public inserts" ON enquiries
  FOR INSERT TO anon
  WITH CHECK (true);

-- Only authenticated users can read (for admin)
CREATE POLICY "Allow authenticated reads" ON members
  FOR SELECT TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated reads" ON enquiries
  FOR SELECT TO authenticated
  USING (true);
```

4. Click "Run" (or press Ctrl+Enter)
5. You should see "Success. No rows returned"

### 4. Get API Credentials

1. Go to **Project Settings** (gear icon, bottom left)
2. Click **API** in the left menu
3. Copy these values:
   - **Project URL**: `https://xxxxx.supabase.co`
   - **anon public key**: Long string starting with `eyJhbGc...`

### 5. Install Supabase in Your Project

Open terminal in bcc-website folder:
```bash
npm install @supabase/supabase-js
```

### 6. Update .env File

Add to `bcc-website/.env`:
```env
REACT_APP_SUPABASE_URL=https://xxxxx.supabase.co
REACT_APP_SUPABASE_ANON_KEY=eyJhbGc...
```

Replace with your actual values from step 4.

### 7. Update contact.jsx

Replace the fetch API calls with Supabase calls (see DEPLOYMENT.md for code).

### 8. Test Locally

1. Restart your React app:
```bash
npm start
```

2. Go to http://localhost:3000/contact
3. Fill and submit a form
4. Check Supabase dashboard → Table Editor → members/enquiries
5. You should see your data!

### 9. Deploy to Vercel

1. Push to GitHub:
```bash
git add .
git commit -m "Add Supabase integration"
git push origin main
```

2. In Vercel dashboard:
   - Go to your project → Settings → Environment Variables
   - Add:
     - `REACT_APP_SUPABASE_URL` = your Supabase URL
     - `REACT_APP_SUPABASE_ANON_KEY` = your anon key
   - Redeploy

## View Submitted Data

**In Supabase Dashboard:**
1. Go to **Table Editor** (left sidebar)
2. Click **members** or **enquiries**
3. See all submissions in a spreadsheet-like view
4. Export to CSV if needed

## Benefits Over MongoDB Backend

✅ **No backend server needed** - Direct database connection from frontend
✅ **Free tier** - 500MB database, 50K monthly active users
✅ **Auto-scaling** - Handles traffic spikes automatically
✅ **Built-in dashboard** - View/edit data easily
✅ **Real-time** - Can add live updates later
✅ **Authentication ready** - Add user login easily
✅ **Automatic backups** - Daily backups included

## Troubleshooting

**"Invalid API key"**: Check that you copied the anon key correctly

**"Row Level Security"**: Make sure you ran the policy SQL commands

**"Cannot insert"**: Verify the table names match exactly (lowercase)

**Data not showing**: Check Table Editor → members/enquiries tables
