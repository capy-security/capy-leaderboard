# capy-leaderboard

A retro arcade-style tournament leaderboard for game nights and parties. Add players, define mini-games (ping-pong, Mario Kart, FIFA…), enter scores or rankings, and watch the overall standings update on a live podium.

The app is a single-page web UI served by [PocketBase](https://pocketbase.io). Tournament state (players, games, scores) is stored in PocketBase and synced in real time, so everyone logged in sees the same board.

## Quick start

```bash
docker compose up -d
```

Then open [http://localhost:8090/_/](http://localhost:8090/_/) to create the superuser, add app users if needed, and use the app at [http://localhost:8090/](http://localhost:8090/).
