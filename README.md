# OdooM 🎮

[![License: LGPL-3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)
[![Odoo](https://img.shields.io/badge/Odoo-18.0-purple.svg)](https://www.odoo.com/)
[![js-dos](https://img.shields.io/badge/js--dos-v17.0.2-orange.svg)](https://js-dos.com/)

A proof-of-concept Odoo module that embeds DOOM (the classic 1993 FPS game) directly into the Odoo backend using WebAssembly and js-dos emulator.

## 🎯 Features

- **Full DOOM Integration**: Play the complete DOOM shareware version within Odoo
- **WebAssembly Powered**: Uses js-dos v17 for high-performance DOSBox emulation
- **Native Odoo Experience**: Seamlessly integrated as a standard Odoo application
- **Client Actions**: Custom client-side components built with OWL (Odoo Web Library)
- **Modern UI**: Clean interface with loading states and error handling

## 🚀 Why?

Because we can. This project demonstrates:
- Integration of complex JavaScript libraries (js-dos) in Odoo
- WebAssembly capabilities within Odoo's framework
- Custom client action development
- Asset management in Odoo modules

## 📋 Requirements

- Odoo 18.0
- Modern web browser with WebAssembly support
- Internet connection (for loading js-dos from CDN)

## 🛠️ Installation

1. Clone or download this module to your Odoo addons directory:
   ```bash
   cd /path/to/odoo/addons
   git clone <your-repo-url> odoom
   ```

2. Restart your Odoo server:
   ```bash
   ./odoo-bin -u odoom
   ```

3. Go to Apps menu in Odoo and search for "OdooM"

4. Click Install

## 🎮 Usage

1. After installation, find the **OdooM** app in your Odoo app drawer
2. Click on the OdooM icon to open the dashboard
3. Click **"Play"** to launch DOOM
4. Wait for the game to load (approximately 5.7 MB download)
5. Enjoy DOOM in your ERP! 🎯

### Controls

- **Arrow Keys**: Movement
- **Ctrl**: Fire
- **Space**: Use/Open doors
- **ESC**: Menu
- **Tab**: Map

## 🏗️ Technical Stack

- **Odoo 18.0**: ERP framework
- **OWL (Odoo Web Library)**: Frontend component framework
- **js-dos v17**: DOS emulator compiled to WebAssembly
- **DOSBox**: DOS emulation layer
- **DOOM.EXE**: Original DOOM shareware executable
- **Python**: Backend module structure

## 📁 Project Structure

```
odoom/
├── __init__.py
├── __manifest__.py
├── README.md
├── static/
│   ├── description/
│   │   └── icon.png                    # Module icon
│   ├── lib/
│   │   └── js-dos/
│   │       ├── js-dos.css              # js-dos styles
│   │       └── js-dos.js               # js-dos library (v17.0.2)
│   ├── jsdos/
│   │   ├── doom-working.jsdos          # DOOM bundle (5.7 MB)
│   │   └── digger.jsdos                # Test game
│   └── src/
│       └── client_action/
│           ├── odoom_home.js           # Home component
│           ├── odoom_home.xml          # Home template
│           ├── odoom_play.js           # Game component
│           └── odoom_play.xml          # Game template
└── views/
    └── odoom_menu.xml                  # Menu definitions
```

## 🔧 Development

### Creating Custom .jsdos Bundles

The `.jsdos` file is essentially a ZIP archive containing:

```
bundle.jsdos
├── .jsdos/
│   ├── dosbox.conf                     # DOSBox configuration
│   └── jsdos.json                      # js-dos metadata
└── [game files]                        # Your DOS game files
```

Example Python script to create a bundle:

```python
import zipfile

with zipfile.ZipFile('game.jsdos', 'w', zipfile.ZIP_DEFLATED) as jsdos:
    # Add game files
    jsdos.write('DOOM.EXE', 'DOOM.EXE')
    jsdos.write('DOOM.WAD', 'DOOM.WAD')
    
    # Add configuration
    dosbox_conf = """[autoexec]
@echo off
mount c .
c:
doom.exe
"""
    jsdos.writestr('.jsdos/dosbox.conf', dosbox_conf)
    jsdos.writestr('.jsdos/jsdos.json', '{"version": "8"}')
```

## 🐛 Troubleshooting

### Blank Screen
- Check browser console for errors
- Verify that `doom-working.jsdos` exists in `static/jsdos/`
- Clear browser cache (Ctrl+Shift+R)
- Update the module in Odoo

### js-dos Not Loading
- Check that `static/lib/js-dos/js-dos.js` exists
- Verify asset declarations in `__manifest__.py`
- Restart Odoo server and update module

### Game Not Starting
- Verify the `.jsdos` bundle contains DOOM.EXE
- Check browser console for loading errors
- Try with `digger.jsdos` to test if js-dos works

## 📜 License

This module is licensed under LGPL-3.

**DOOM** is © 1993 id Software. The DOOM shareware version is freely distributable.

**js-dos** is © caiiiycuk, licensed under MIT.

## 🙏 Credits

- **id Software**: For creating DOOM (1993)
- **caiiiycuk**: For js-dos emulator
- **DOSBox Team**: For the DOS emulation
- **Odoo S.A.**: For the amazing ERP framework

## ⚠️ Disclaimer

This is a proof-of-concept project for educational purposes. Running games in a production ERP system is not recommended. Enter at your own risk (with permissions).

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests
- Share your custom game bundles

## 📞 Support

For issues related to:
- **Odoo module**: Open an issue in this repository
- **js-dos**: Visit [js-dos.com](https://js-dos.com)
- **DOOM**: Visit [doomworld.com](https://www.doomworld.com/)

---

Made with ❤️ and a sense of humor. Because why not run DOOM in your ERP?
