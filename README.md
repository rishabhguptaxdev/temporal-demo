# ⏱️ Temporal Logging Demo with Express, Loki & Grafana

This project demonstrates how to build and observe a Temporal workflow system using:

- 🧠 Temporal (for orchestration)
- ⚙️ Express (as a workflow trigger API)
- 📜 Promtail (to ship logs)
- 📦 Loki (as the log backend)
- 📊 Grafana (to visualize logs)

Logs from both the Express server and Temporal worker are forwarded to Grafana using Promtail and Loki.

---

## ⚙️ Requirements

- [Node.js](https://nodejs.org/) ≥ v18
- [Docker + Docker Compose](https://www.docker.com/)
- Unix/macOS-based machine (for file paths used in Promtail)

---

## 🚀 Quick Setup

```bash
git clone https://github.com/your-username/temporal-demo.git
cd temporal-demo
cd server && npm install
cd ../worker && npm install
cd ..
docker-compose up -d
mkdir -p ~/logs
node server/index.js > ~/logs/express.log 2>&1 &
node worker/worker.js > ~/logs/temporal-worker.log 2>&1 &
curl http://localhost:3000/start
```
