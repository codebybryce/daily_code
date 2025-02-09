# Running Multiple Node.js Scripts at Different Intervals Using Systemd Timers

This guide will help you run multiple Node.js scripts at specific intervals using `systemd` timers on a Linux VM.

---

## **Step 1: Create a Systemd Service for Each Script**
Each script needs its own **service file**.

### **Create Service File for `script1.js`**
1. Open a new service file:
   ```bash
   sudo nano /etc/systemd/system/script1.service
   ```
2. Add the following content:
   ```ini
   [Unit]
   Description=Run script1.js

   [Service]
   ExecStart=/usr/bin/node /path/to/script1.js
   User=youruser
   Group=yourgroup
   StandardOutput=append:/var/log/script1.log
   StandardError=append:/var/log/script1.log
   ```
3. Save and exit (`Ctrl + X`, then `Y`, then `Enter`).

### **Create Service File for `script2.js`**
1. Open a new service file:
   ```bash
   sudo nano /etc/systemd/system/script2.service
   ```
2. Add:
   ```ini
   [Unit]
   Description=Run script2.js

   [Service]
   ExecStart=/usr/bin/node /path/to/script2.js
   User=youruser
   Group=yourgroup
   StandardOutput=append:/var/log/script2.log
   StandardError=append:/var/log/script2.log
   ```
3. Save and exit.

---

## **Step 2: Create Systemd Timer Files**
Each script needs a corresponding **timer file** to define its execution interval.

### **Create Timer for `script1.js` (Runs Every 5 Minutes)**
1. Open a new timer file:
   ```bash
   sudo nano /etc/systemd/system/script1.timer
   ```
2. Add the following content:
   ```ini
   [Unit]
   Description=Run script1.js every 5 minutes

   [Timer]
   OnBootSec=1min
   OnUnitActiveSec=5min
   Unit=script1.service

   [Install]
   WantedBy=timers.target
   ```
3. Save and exit.

### **Create Timer for `script2.js` (Runs Every Hour)**
1. Open a new timer file:
   ```bash
   sudo nano /etc/systemd/system/script2.timer
   ```
2. Add:
   ```ini
   [Unit]
   Description=Run script2.js every hour

   [Timer]
   OnBootSec=1min
   OnUnitActiveSec=1h
   Unit=script2.service

   [Install]
   WantedBy=timers.target
   ```
3. Save and exit.

---

## **Step 3: Enable and Start the Timers**
Run the following commands to apply the new services and timers:

```bash
sudo systemctl daemon-reload
sudo systemctl enable script1.timer script2.timer
sudo systemctl start script1.timer script2.timer
```

---

## **Step 4: Verify the Timers**
Check the status of all timers:
```bash
systemctl list-timers --all
```

Check logs for `script1.js`:
```bash
journalctl -u script1.service --follow
```

Check logs for `script2.js`:
```bash
journalctl -u script2.service --follow
```

---

## **Step 5: Manage the Services and Timers**
### **Stop a Timer**
```bash
sudo systemctl stop script1.timer
```

### **Restart a Timer**
```bash
sudo systemctl restart script1.timer
```

### **Disable a Timer (Prevent Auto-Start)**
```bash
sudo systemctl disable script1.timer
```

---

## **Conclusion**
Using `systemd` timers ensures that your Node.js scripts run at specific intervals reliably. They provide better logging, error handling, and restart capabilities compared to `cron`.

