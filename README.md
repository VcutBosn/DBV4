# VipziX Core Database

Database untuk VipziX Core - Bug WhatsApp Platform.

## Struktur Data

### users.json
Data user dengan field:
- `username`: Nama user (unique)
- `key`: Key akses (4-6 karakter)
- `password`: Password user
- `expired`: Timestamp expired (milliseconds)
- `tier`: `owner` | `admin` | `vip` | `basic`
- `createdBy`: Username yang membuat
- `createdAt`: Waktu dibuat

### akses.json
Data akses dengan field:
- `owners`: Array username owner
- `akses`: Array username yang punya akses
- `resellers`: Array username reseller
- `pts`: Array username PT
- `moderators`: Array username moderator

### global_senders.json
Array nomor WhatsApp yang terdaftar sebagai Global Sender.

### user_sessions.json
Object dengan key username, value array nomor sender yang terdaftar.

## Cara Update

1. Fork repository ini
2. Edit file JSON sesuai kebutuhan
3. Push perubahan
4. Server akan otomatis sync (jika terintegrasi)
