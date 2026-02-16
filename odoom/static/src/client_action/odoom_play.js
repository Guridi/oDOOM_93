/** @odoo-module **/

import { registry } from "@web/core/registry";
import { Component, onMounted, useRef } from "@odoo/owl";
import { useService } from "@web/core/utils/hooks";

export class OdooMPlay extends Component {
    static template = "odoom.Play";

    setup() {
        this.action = useService("action");
        this.dosRef = useRef("dos");

        onMounted(() => {
            const el = this.dosRef.el;

            // Cargar js-dos.css SOLO en este contenedor para no afectar Odoo
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = '/odoom/static/lib/js-dos/js-dos.css';
            el.parentElement.appendChild(link);

            if (typeof window.Dos !== "function") {
                console.error("js-dos no cargó. Revisa assets (js-dos.js) y cache.");
                el.innerHTML = `<div style="color:white;padding:16px;text-align:center;margin-top:50px;">
                    <h3 style="color:#ff6b6b;">❌ Error: js-dos no cargó</h3>
                    <p>Verifica que js-dos.js esté en los assets y limpia la caché del navegador.</p>
                </div>`;
                return;
            }

            // Mostrar mensaje de carga
            el.innerHTML = `<div style="color:white;padding:16px;text-align:center;margin-top:50px;">
                <h3>⏳ Cargando emulador...</h3>
                <p>Iniciando DOSBox y cargando DOOM...</p>
            </div>`;

            // Inicializar js-dos v17 (mucho más simple, sin pathPrefix ni emulators)
            try {
                console.log("Iniciando js-dos v17 con DOOM...");
                const dosInstance = window.Dos(el, {
                    url: "/odoom/static/jsdos/doom-working.jsdos",
                    autolock: false,
                });
                
                // Prevenir que js-dos expanda el contenedor
                el.style.maxWidth = '100%';
                el.style.maxHeight = '100%';
                el.style.overflow = 'hidden';
                el.style.contain = 'layout size';
                
                console.log("✓ Dos() ejecutado correctamente:", dosInstance);
            } catch (error) {
                console.error("❌ Error al inicializar js-dos:", error);
                el.innerHTML = `<div style="color:white;padding:16px;text-align:center;margin-top:50px;">
                    <h3 style="color:#ff6b6b;">❌ Error al inicializar</h3>
                    <p>${error.message || error}</p>
                    <p style="font-size:0.9em;color:#999;margin-top:16px;">Revisa la consola del navegador para más detalles.</p>
                </div>`;
            }
        });
    }

    onBack() {
        this.action.doAction("odoom.action_odoom_home");
    }
}

registry.category("actions").add("odoom.play", OdooMPlay);
