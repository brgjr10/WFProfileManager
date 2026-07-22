# Warframe Profile Manager

Analyze your profile.json and discover what to do today.

## Quick Start (File Upload - Recommended)

1. Double-click `index.html` or open in browser
2. Click "Drop your profile.json here or click to browse"
3. Select your `profile.json` file
4. View your analysis and recommendations

## Server Mode (API Fetch)

1. Install dependencies:
   ```
   npm install
   ```

2. Start server:
   ```
   npm start
   ```

3. Open `http://localhost:3001` in your browser
4. Enter your Player ID from warframe.com/api/user-data
5. Click "Fetch Profile"

## Features

- **Player Overview**: Name, level, mastery rank, guild, playtime
- **Stats Dashboard**: Missions completed, kills, deaths, ciphers, scans
- **Item Ownership**: Count of warframes, primary/secondary/melee weapons with XP
- **Syndicate Standings**: All affiliations with color-coded standing values
- **What to Do Today**: Daily recommendations based on your profile
- **Weekly Outlook**: Weekly act suggestions and activities

## Files

- `index.html` - Main application
- `server.js` - Express proxy server for API calls (port 3001)
- `package.json` - Node.js dependencies
- `profile.json` - Sample profile data

## Notes

- File upload works without server (pure client-side) - **Recommended**
- API fetch may be blocked by server restrictions (returns 403). If so, use file upload.
- Unofficial fan-made tool - not affiliated with Digital Extremes

## Profile.json Location

- PC: `%USERPROFILE%\AppData\Local\Warframe\profile.json` (Windows)
- Or export from: https://warframe.com/api/user-data