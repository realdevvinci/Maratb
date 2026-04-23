# Maratb (Firebase Realtime)

Simple bilingual (English/Arabic) Maratb web app with host/team live sync using Firebase Realtime Database.

## What is included

- Landing page with:
  - Start Playing
  - How to Play
  - Donation button (bottom-left)
- Language switch: English / Arabic with RTL support
- Game setup:
  - Random playlist by category + rounds
  - Manual single-question selection
  - Team names
- Firebase live game sessions:
  - Session is stored under `games/{gameId}`
  - Host reveals answers and awards points
  - Team screens update instantly
- QR link generation for host URL (`?game=XXXXXX#host`)

## Firebase setup

1. Create a Firebase project.
2. Add a Web App.
3. Enable **Realtime Database**.
4. Update `firebase-config.js` with your project credentials.
5. Set Realtime Database Rules (development only):

```json
{
  "rules": {
    "games": {
      ".read": true,
      ".write": true
    }
  }
}
```

For production, lock rules by auth.

## Run locally

Use a local web server (recommended):

```powershell
python -m http.server 5500
```

Open:

- Team screen: `http://localhost:5500`
- Host screen: generated QR URL after creating a game
