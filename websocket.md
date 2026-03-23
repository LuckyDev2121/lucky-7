# Game Admin Panel - WebSocket Real-Time Documentation

## Overview

- Real-time Winner announcement
- Live Countdown timer
- Instant Win/Loss notification per player
- Live Jackpot updates
- All connected clients get simultaneous updates

---

## Architecture

```
┌─────────────┐     ┌─────────────┐     ┌─────────────────────┐
│   Redis     │────▶│   Daphne    │────▶│      Django         │
│  (Channel   │     │   (ASGI     │     │    Channels         │
│   Layer)    │     │   Server)   │     │                     │
└─────────────┘     └─────────────┘     └─────────────────────┘
                           │                      │
                    ┌──────┴──────┐        ┌──────┴──────┐
                    │  WebSocket  │        │  Consumers  │
                    │  Clients    │◀──────▶│  (Handlers) │
                    └─────────────┘        └─────────────┘
                                                  │
                                           ┌──────┴──────┐
                                           │  Scheduler  │
                                           │  Broadcast  │
                                           └─────────────┘
```

---# WebSocket URLs

| Endpoint                | URL Pattern                                              | কাজ                                    |
| ----------------------- | -------------------------------------------------------- | -------------------------------------- |
| **Game Room**           | `wss://funint.site/ws/game/{registration_id}/{mode_id}/` | সবার জন্য - Winner, Countdown, Jackpot |
| **Game Room (Default)** | `wss://funint.site/ws/game/{registration_id}/`           | Mode 1 default                         |
| **Player Personal**     | `wss://funint.site/ws/player/{player_id}/`               | Win/Loss                               |

### উদাহরণ:

```
wss://funint.site/ws/game/3/1/      ← Registration 3, Mode 1
wss://funint.site/ws/game/3/2/      ← Registration 3, Mode 2 (Advance)
wss://funint.site/ws/player/12345/  ← Player ID 12345
```

### Mode ID:

| Mode | মানে         |
| ---- | ------------ |
| 1    | General Mode |
| 2    | Advance Mode |

---

## Server থেকে Message Types

| Type              | কখন আসে                  | কি থাকে                                                                               |
| ----------------- | ------------------------ | ------------------------------------------------------------------------------------- |
| `initial_data`    | প্রথম Connect এ          | game_info, elements, modes, jackpots, score_buttons, magic_boxes, win_list, countdown |
| `all_data`        | get_all_data request এ   | সম্পূর্ণ game configuration                                                           |
| `game_result`     | প্রতি Round শেষে         | winning element, is_jackpot                                                           |
| `countdown`       | Timer update             | seconds_remaining                                                                     |
| `win_list`        | List update হলে          | Last 10 winners                                                                       |
| `jackpot`         | Jackpot update হলে       | Current jackpot amount                                                                |
| `player_balance`  | Balance চাইলে/Update হলে | current_balance, last_profit_loss                                                     |
| `personal_result` | Player Room এ            | Win/Loss result, balance                                                              |
| `pong`            | ping এর response         | timestamp                                                                             |
| `error`           | Error হলে                | error message                                                                         |

---

## Message Formats (JSON)

### 1. `initial_data` - প্রথম Connect এ (সম্পূর্ণ Game Data)

```json
{
    "type": "initial_data",
    "data": {
        "success": true,
        "message": "Connected to game room",
        "timestamp": "2026-03-20T10:00:00Z",
        "game_info": {
            "registration_id": 5,
            "game_name": "Lucky Fruite",
            "game_icon": "https://funint.site/media/game_icon.png",
            "coin_icon": "https://funint.site/media/coin.png",
            "game_duration": 30,
            "max_fruits_per_turn": 1,
            "game_rule": {...},
            "prize_distribution": {...}
        },
        "modes": [{"id": 3, "name": "Advance"}, {"id": 4, "name": "General"}],
        "elements": [{"id": 33, "element_name": "Kiwi", "element_icon": "...", "paytable": 12, "win_weights": 12}],
        "jackpots": [...],
        "score_buttons": [...],
        "magic_boxes": [...],
        "win_list": [...],
        "countdown": {"seconds_remaining": 25, "next_round_at": "...", "game_duration": 30},
        "jackpot_amount": 50000
    }
}
```

### 2. `game_result` - প্রতি Round শেষে

```json
{
  "type": "game_result",
  "data": {
    "win_element": {
      "id": 5,
      "name": "Apple",
      "icon": "media/games/apple.png",
      "paytable": 3.5
    },
    "is_jackpot": false,
    "jackpot_element": null,
    "timestamp": "2026-03-16T14:30:00Z"
  }
}
```

### 3. `countdown` - Timer Update

```json
{
  "type": "countdown",
  "data": {
    "seconds_remaining": 15,
    "next_round_at": "2026-03-16T14:30:30Z"
  }
}
```

### 4. `win_list` - Last 10 Winners

```json
{
  "type": "win_list",
  "data": [
    {
      "id": 100,
      "element__element_name": "Banana",
      "element__element_icon": "media/games/banana.png",
      "gjp__jackpot_name": null,
      "created_at": "2026-03-16T14:29:00Z"
    }
  ]
}
```

### 5. `personal_result` - Player Personal

```json
{
  "type": "personal_result",
  "data": {
    "result": "Win",
    "bet_amount": 100,
    "win_amount": 350,
    "new_balance": 5350,
    "chosen_element": "Apple",
    "winning_element": "Apple"
  }
}
```

### 6. `player_balance` - Player Balance Response

```json
{
  "type": "player_balance",
  "data": {
    "success": true,
    "player_id": "261000",
    "player_name": "Player_261000",
    "current_balance": 996200,
    "last_profit_loss": 80,
    "timestamp": "2026-03-20T10:47:45Z"
  }
}
```

---

## Client থেকে Request Actions

| Action               | কাজ                       | Response Type    | Required Params |
| -------------------- | ------------------------- | ---------------- | --------------- |
| `get_all_data`       | সম্পূর্ণ game data চাওয়া | `all_data`       | -               |
| `get_win_list`       | Win list চাওয়া           | `win_list`       | -               |
| `get_countdown`      | Timer চাওয়া              | `countdown`      | -               |
| `get_jackpot`        | Jackpot চাওয়া            | `jackpot`        | -               |
| `get_player_balance` | Player balance চাওয়া     | `player_balance` | `player_id`     |
| `ping`               | Connection check          | `pong`           | -               |

### Example:

```javascript
// Basic requests
ws.send(JSON.stringify({ action: "get_all_data" }));
ws.send(JSON.stringify({ action: "get_win_list" }));
ws.send(JSON.stringify({ action: "get_countdown" }));
ws.send(JSON.stringify({ action: "get_jackpot" }));
ws.send(JSON.stringify({ action: "ping" }));

// Player balance (requires player_id)
ws.send(
  JSON.stringify({
    action: "get_player_balance",
    player_id: "261000",
  }),
);
```

---

## Client Implementation

### Basic JavaScript

```javascript
// Step 1: Connect
const ws = new WebSocket("wss://funint.site/ws/game/3/1/");

// Step 2: Connection success
ws.onopen = function () {
  console.log("Connected to game!");
};

// Step 3: Handle messages
ws.onmessage = function (event) {
  const data = JSON.parse(event.data);

  switch (data.type) {
    case "initial_data":
      // প্রথম connect এ পাবেন
      break;
    case "game_result":
      // নতুন round এর result
      break;
    case "countdown":
      // Timer update
      break;
    case "jackpot":
      // Jackpot update
      break;
  }
};

// Step 4: Handle errors
ws.onerror = function (error) {
  console.log("Error:", error);
};

// Step 5: Handle disconnect
ws.onclose = function () {
  console.log("Disconnected");
};
```

### Reconnection Logic (গুরুত্বপূর্ণ!)

```javascript
let ws;
let reconnectInterval = 3000; // 3 seconds

function connect() {
  ws = new WebSocket("wss://funint.site/ws/game/3/1/");

  ws.onopen = function () {
    console.log("Connected!");
  };

  ws.onclose = function () {
    console.log("Disconnected. Reconnecting in 3 seconds...");
    setTimeout(connect, reconnectInterval);
  };

  ws.onerror = function (error) {
    console.log("Error:", error);
    ws.close();
  };

  ws.onmessage = function (event) {
    // Handle messages
  };
}

// প্রথমবার connect
connect();
```

### React Native Example

```javascript
import React, { useEffect, useState, useRef } from "react";
import { View, Text } from "react-native";

const GameScreen = ({ registrationId, modeId }) => {
  const [winList, setWinList] = useState([]);
  const [countdown, setCountdown] = useState(30);
  const [jackpot, setJackpot] = useState(0);
  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket(
      `wss://funint.site/ws/game/${registrationId}/${modeId}/`,
    );

    ws.current.onmessage = (event) => {
      const message = JSON.parse(event.data);

      switch (message.type) {
        case "initial_data":
          setWinList(message.data.win_list);
          setCountdown(message.data.countdown);
          setJackpot(message.data.jackpot);
          break;
        case "game_result":
          // Animation দেখান, sound বাজান
          break;
        case "countdown":
          setCountdown(message.data.seconds_remaining);
          break;
        case "win_list":
          setWinList(message.data);
          break;
      }
    };

    return () => {
      if (ws.current) ws.current.close();
    };
  }, [registrationId, modeId]);

  return (
    <View>
      <Text>Countdown: {countdown}s</Text>
      <Text>Jackpot: {jackpot}</Text>
    </View>
  );
};

export default GameScreen;
```

---

## Modified/Created Files

### 1. `game/consumers.py` (নতুন)

WebSocket connection handlers:

```python
class GameConsumer(AsyncWebsocketConsumer):
    # Game room - winner, countdown, jackpot broadcast

class PlayerResultConsumer(AsyncWebsocketConsumer):
    # Player personal - win/loss notification
```

### 2. `game/routing.py` (নতুন)

WebSocket URL patterns:

```python
websocket_urlpatterns = [
    re_path(r'ws/game/(?P<registration_id>\d+)/(?P<mode_id>\d+)/$', GameConsumer),
    re_path(r'ws/player/(?P<player_id>\d+)/$', PlayerResultConsumer),
]
```

### 3. `game_admin_panal/asgi.py`

ASGI configuration for HTTP + WebSocket:

```python
application = ProtocolTypeRouter({
    "http": django_asgi_app,
    "websocket": AuthMiddlewareStack(URLRouter(websocket_urlpatterns)),
})
```

### 4. `game_admin_panal/settings.py`

Channel Layer configuration:

```python
INSTALLED_APPS = [
    ...
    'channels',
]

CHANNEL_LAYERS = {
    'default': {
        'BACKEND': 'channels_redis.core.RedisChannelLayer',
        'CONFIG': {"hosts": [("127.0.0.1", 6379)]},
    },
}
```

### 5. `game/scheduler.py`

Broadcast functions যোগ করা হয়েছে:

```python
def broadcast_game_result(registration_id, mode_id, win_element_data):
    # প্রতি round এ winner announce করে WebSocket এ

def broadcast_player_balance(registration_id, mode_id, player_id, balance_data):
    # Match end হলে player এর balance update broadcast করে
    # balance_data: {player_id, player_name, current_balance, last_profit_loss, result}
```

---

## Required Packages

```bash
# Virtual environment activate করুন প্রথমে
source /root/env/bin/activate

# তারপর install করুন
pip install channels channels-redis daphne
```

**requirements.txt:**

```
channels==4.3.2
channels-redis==4.3.0
daphne==4.2.1
```

**INSTALLED_APPS এ যোগ করুন:**

```python
INSTALLED_APPS = [
    ...
    'channels',
    ...
]
```

---

## Service Management Commands

### Daphne (WebSocket Server)

```bash
# Virtual environment activate করুন প্রথমে
source /root/env/bin/activate

# Manual start (port 8002)
cd /root/game_admin_panal
daphne -b 0.0.0.0 -p 8002 game_admin_panal.asgi:application

# Background start
nohup daphne -b 0.0.0.0 -p 8002 game_admin_panal.asgi:application &

# Check running
ps aux | grep daphne

# Stop
pkill -f daphne
```

### Redis (Channel Layer)

```bash
# Status check
redis-cli ping

# Service start
sudo systemctl start redis

# Service status
sudo systemctl status redis
```

### Production এ Systemd Service

`/etc/systemd/system/daphne.service`:

```ini
[Unit]
Description=Daphne WebSocket Server for Game Admin Panel
After=network.target redis.service

[Service]
Type=simple
User=root
WorkingDirectory=/root/game_admin_panal
Environment="DJANGO_SETTINGS_MODULE=game_admin_panal.settings"
ExecStart=/root/env/bin/daphne -b 0.0.0.0 -p 8002 game_admin_panal.asgi:application
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl daemon-reload
sudo systemctl enable daphne
sudo systemctl start daphne
```

---

## গুরুত্বপূর্ণ নোট

| বিষয়           | বিবরণ                                                         |
| --------------- | ------------------------------------------------------------- |
| **URL**         | `wss://funint.site/ws/game/{reg_id}/{mode_id}/` (SSL enabled) |
| **Port**        | Port দরকার নেই URL এ, Nginx proxy করছে                        |
| **Auth**        | এখন token লাগে না, শুধু ID দিলেই হবে                          |
| **Game Room**   | সবাই একই data দেখে (winner কে)                                |
| **Player Room** | শুধু নিজের result দেখে                                        |

---

## Troubleshooting

### Problem: Connect হচ্ছে না

```bash
# Daphne চালু আছে কিনা
ps aux | grep daphne

# Port open আছে কিনা
netstat -tlnp | grep 8002

# Firewall check
sudo ufw status
sudo ufw allow 8002
```

### Problem: Message আসছে না

```bash
# Redis চালু আছে কিনা
redis-cli ping

# Celery চালু আছে কিনা (scheduler)
sudo systemctl status celery
```

### Problem: Disconnect হয়ে যাচ্ছে

- Client এ **Reconnection logic** যোগ করুন
- Network timeout check করুন

### Problem: SSL/WSS কাজ করছে না

- Nginx reverse proxy configure করুন
- SSL certificate setup করুন

---

## File Locations Summary

| File                | Location                                              |
| ------------------- | ----------------------------------------------------- |
| Virtual Environment | `/root/env/`                                          |
| Daphne Binary       | `/root/env/bin/daphne`                                |
| Consumers           | `/root/game_admin_panal/game/consumers.py`            |
| Routing             | `/root/game_admin_panal/game/routing.py`              |
| ASGI Config         | `/root/game_admin_panal/game_admin_panal/asgi.py`     |
| Settings            | `/root/game_admin_panal/game_admin_panal/settings.py` |
| Scheduler           | `/root/game_admin_panal/game/scheduler.py`            |
| Systemd Service     | `/etc/systemd/system/daphne.service`                  |

---

## Quick Reference

| কাজ             | Command/URL                                                   |
| --------------- | ------------------------------------------------------------- |
| Activate Venv   | `source /root/env/bin/activate`                               |
| Daphne Start    | `daphne -b 0.0.0.0 -p 8002 game_admin_panal.asgi:application` |
| Daphne Status   | `ps aux \| grep daphne`                                       |
| Redis Check     | `redis-cli ping`                                              |
| Port Check      | `netstat -tlnp \| grep 8002`                                  |
| Game Room URL   | `wss://funint.site/ws/game/{reg_id}/{mode_id}/`               |
| Player Room URL | `wss://funint.site/ws/player/{player_id}/`                    |

---

## Registration 5 - Lucky Fruite

### WebSocket URLs

```
wss://funint.site/ws/game/5/3/   ← Advance Mode (mode_id=3)
wss://funint.site/ws/game/5/4/   ← General Mode (mode_id=4)
```

### Elements (8টি)

| ID  | Name   | Paytable | Win Weight |
| --- | ------ | -------- | ---------- |
| 33  | Kiwi   | 12       | 12         |
| 32  | Orange | 11       | 11         |
| 31  | Lemon  | 10       | 10         |
| 30  | Cherry | 9        | 9          |
| 29  | Apple  | 8        | 8          |
| 28  | Nine   | 6        | 6          |
| 27  | Seven  | 7        | 7          |
| 26  | Bar    | 5        | 5          |

---

## REST API Documentation (Registration 5)

### Base URL: `https://funint.site/game/`

### 1. Game Elements

```
GET /game/game/elements
Body: {"regisation": 5, "mode": null}
Response: [{"id": 33, "element_name": "Kiwi", "element_icon": "media/games/icons/Kiwi.png", ...}]
```

### 2. Icon During Gaming

```
GET /game/icon/during/gaming
Body: {"regisation": 5}
Response: {"icon": "/media/games/icons/during/Lucky_Fruit.png"}
```

### 3. Game Music

```
GET /game/game/music
Body: {"regisation": 5}
Response: {"music": "/media/games/music/...mp3"}
```

### 4. Top Winners

```
GET /game/top/winers
Body: {"regisation": 5, "mode": 4}
Response: [{"last_balance": 1000, "mrs__player_id__player_name": "Player_1", ...}]
```

### 5. Game Coin Icon

```
GET /game/game/coin
Body: {"regisation": 5}
Response: {"icon": "/media/games/coin/dimond_1.png"}
```

### 6. Player Position

```
GET /game/position/
Body: {"regisation": 5, "mode": 4, "player_id": 261101}
Response: {"player_positon": "99+"}  // 99+ = not ranked yet
```

### 7. Prize Distribution

```
GET /game/game/prize/distribution
Body: {"regisation": 5}
Response: {"advance": {...}, "general": {...}}
```

### 8. Game Rules

```
GET /game/game/rule
Body: {"regisation": 5}
Response: {"advance": {...}, "general": {...}}
```

### 9. Rank Today

```
GET /game/game/rank/today
Body: {"regisation": 5, "mode": 4}
Response: {"data": [...], "time": "HH:MM:SS"}
```

### 10. Rank Yesterday

```
GET /game/game/rank/yesterday
Body: {"regisation": 5, "mode": 4}
Response: [...]
```

### 11. Today Win

```
GET /game/today/win
Body: {"regisation": 5, "mode": 4, "player_id": 261101}
Response: {"today_win": {"total_balance": 1000}}
```

### 12. Session End Time

```
GET /game/game/session/end/time
Body: {"regisation": 5}
Response: {"started_at": "2026-03-16T18:00:00Z", "next_run_time": "2026-03-20T..."}
```

### 13. All Game Data (Combined)

```
GET/POST /game/game/all-data/
Body: {"regisation": 5, "mode": 4, "player_id": 261101}
Response: Complete game configuration (elements, modes, jackpots, win_history, countdown, etc.)
```

---

## Available Registrations

| ID  | Code   | Game Name    | Modes                |
| --- | ------ | ------------ | -------------------- |
| 3   | 003    | Grady Market | 1=Advance, 2=General |
| 4   | 789657 | Supper777    | -                    |
| 5   | 005    | Lucky Fruite | 3=Advance, 4=General |

---

_Last Updated: March 20, 2026_
