# -*- coding: utf-8 -*-
{
    "name": "OdooM",
    "version": "18.0.1.0.0",
    "category": "Hidden/POC",
    "summary": "Doom-like WASM app embedded in Odoo backend (POC)",
    "license": "LGPL-3",
    "depends": ["web"],
    "data": [
        "views/odoom_menu.xml",
    ],
    "assets": {
        "web.assets_backend": [
            "odoom/static/lib/js-dos/js-dos.css",
            "odoom/static/lib/js-dos/js-dos.js",
            "odoom/static/src/client_action/odoom_home.js",
            "odoom/static/src/client_action/odoom_home.xml",
            "odoom/static/src/client_action/odoom_play.js",
            "odoom/static/src/client_action/odoom_play.xml",
        ],
    },
    "application": True,
    "installable": True,
}
