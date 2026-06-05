{
    "users": [
        {
            "id": 1,
            "username": "owner",
            "password": "owner123",
            "level": "owner",
            "expired": "2099-12-31",
            "created_at": "2026-01-01",
            "features": {
                "can_delete_device": true,
                "can_broadcast": true,
                "can_see_all_logs": true,
                "max_devices": "unlimited",
                "can_add_admin": true,
                "can_export_data": true
            }
        },
        {
            "id": 2,
            "username": "admin",
            "password": "admin123",
            "level": "admin",
            "expired": "2028-12-31",
            "created_at": "2026-01-01",
            "features": {
                "can_delete_device": true,
                "can_broadcast": false,
                "can_see_all_logs": true,
                "max_devices": 500,
                "can_add_admin": false,
                "can_export_data": true
            }
        },
        {
            "id": 3,
            "username": "vip",
            "password": "vip123",
            "level": "vip",
            "expired": "2027-12-31",
            "created_at": "2026-01-15",
            "features": {
                "can_delete_device": false,
                "can_broadcast": false,
                "can_see_all_logs": true,
                "max_devices": 100,
                "can_add_admin": false,
                "can_export_data": false
            }
        },
        {
            "id": 4,
            "username": "user",
            "password": "user123",
            "level": "user",
            "expired": "2026-12-31",
            "created_at": "2026-02-01",
            "features": {
                "can_delete_device": false,
                "can_broadcast": false,
                "can_see_all_logs": false,
                "max_devices": 10,
                "can_add_admin": false,
                "can_export_data": false
            }
        }
    ]
}
