 🐧 Unix Shell Cheat Sheet & VASTool Guide

---

## 📁 Basic Unix Commands

| Command | Description | Example | Shell Code |
|---------|-------------|---------|------------|
| `ls` | List files and directories | View all files in current directory | `ls` |
| `cd` | Change directory | Navigate to `/var/log` | `cd /var/log` |
| `pwd` | Print working directory | Show current directory path | `pwd` |
| `mkdir` | Create new directory | Make a folder named `new_project` | `mkdir new_project` |
| `rm` | Remove files | Delete `file.txt` | `rm file.txt` |
| `rm -r` | Delete folder recursively | Delete `folder/` and contents | `rm -r folder/` |
| `cp` | Copy files/folders | Copy `a.txt` to `backup.txt` | `cp a.txt backup.txt` |
| `mv` | Move or rename files | Rename `file.txt` to `data.txt` | `mv file.txt data.txt` |
| `touch` | Create empty file | Make `notes.txt` | `touch notes.txt` |
| `cat` | View file contents | Show contents of `readme.md` | `cat readme.md` |
| `less` | Scroll through file | View long file with scroll | `less biglog.log` |
| `head` | Show first lines | First 10 lines of `log.txt` | `head log.txt` |
| `tail` | Show last lines | Monitor new lines in real-time | `tail -f logfile.log` |
| `echo` | Print text or vars | Show message | `echo "Hello World"` |
| `grep` | Search in files | Find "error" lines | `grep "error" logfile.txt` |
| `find` | Locate files | Find all `.log` files | `find . -name "*.log"` |
| `chmod` | Change permissions | Make script executable | `chmod +x script.sh` |
| `chown` | Change ownership | Set user as file owner | `chown user file.txt` |
| `ps` | Show processes | View all running processes | `ps aux` |
| `kill` | Stop process | Kill PID 1234 | `kill 1234` |
| `df` | Disk usage summary | View mounted disks | `df -h` |
| `du` | File/dir size | Size of current directory | `du -sh .` |
| `tar` | Archive files | Create tarball of folder | `tar -czf archive.tar.gz folder/` |
| `ssh` | Remote login | Connect to server | `ssh user@host` |
| `scp` | Secure file copy | Copy to remote host | `scp data.txt user@host:/path/` |
| `wget` | Download file | Download from URL | `wget http://example.com/file.zip` |
| `curl` | Transfer data | Fetch webpage | `curl https://example.com` |
| `history` | Command history | View previous commands | `history` |
| `alias` | Create shortcut | `ll` runs `ls -la` | `alias ll='ls -la'` |
| `uname -a` | System info | Kernel/system info | `uname -a` |

---

## 🔎 Viewing & Navigating Files

| Tool/Command | Use Case | Example | Tips |
|--------------|----------|---------|------|
| `cat` | View small files | `cat file.txt` | Prints everything at once |
| `less` | Scroll large files | `less file.log` | Use arrows or PgUp/PgDn, `q` to quit |
| `more` | Page view | `more readme.md` | Similar to `less`, simpler |
| `head -n N` | First N lines | `head -n 20 file.txt` | Default = 10 lines |
| `tail -n N` | Last N lines | `tail -n 20 file.txt` | Use `-f` to live follow |
| `nl` | Numbered output | `nl file.txt` | Useful for debugging |
| `cd` | Change directory | `cd /etc/nginx` | `cd -` goes back |
| `pwd` | Show current path | `pwd` | Useful in scripts |
| `ls -la` | List all items | `ls -la` | Shows hidden files too |
| `tree` | Visual dir tree | `tree /var/www` | May need install |
| `find . -name "*.log"` | Search for files | Find all `.log` in dir | Great for audit logs |
| `du -sh *` | Directory sizes | `du -sh *` | `-h` = human-readable |
| `df -h` | Disk space check | `df -h` | Use before large copies |

**Tips:**
- Press `Tab` to auto-complete paths/filenames
- Use `Ctrl + R` to reverse search command history
- `cd ~` goes to home directory

---

## 🛠️ VASTool Commands & Usage

### What is VASTool?

`vastool` is a Unix/Linux utility from **One Identity Authentication Services** for:
- Active Directory (AD) integration
- User/group management
- Kerberos validation
- AD diagnostics

---

### Common `vastool` Commands

| Command | Purpose |
|---------|---------|
| `vastool status` | Show AD integration status |
| `vastool info` | Display system AD/kerberos info |
| `vastool kinit <user>` | Obtain Kerberos ticket |
| `vastool list users` | List all visible AD users |
| `vastool list groups` | List AD groups |
| `vastool user check <user>` | Validate AD user |
| `vastool service list` | Show registered PAM/SSH services |
| `vastool configure` | Configure AD connection |
| `vastool join` | Join domain (if applicable) |

---

### Installing `vastool` on Linux

> You’ll need a **valid license** from One Identity.

#### 1. **Check if installed**
```bash
which vastool
```

#### 2. **Download packages**
- Login at: [https://support.oneidentity.com](https://support.oneidentity.com)
- Get `vas-clients` RPM or DEB package

#### 3. **Install**

**RHEL/CentOS**
```bash
sudo rpm -ivh vas-clients-<version>.rpm
```

**Debian/Ubuntu**
```bash
sudo dpkg -i vas-clients_<version>.deb
```

#### 4. **Post-Install**
```bash
sudo vastool configure join
```
Or:
```bash
sudo /opt/quest/sbin/vastool configure
```

---

### Docs & Support
- [One Identity Docs](https://support.oneidentity.com/authentication-services/technical-documents)
- Internal company wikis or IT service desk

---