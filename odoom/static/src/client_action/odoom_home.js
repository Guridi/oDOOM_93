/** @odoo-module **/

import { registry } from "@web/core/registry";
import { Component } from "@odoo/owl";
import { useService } from "@web/core/utils/hooks";

export class OdooMHome extends Component {
    static template = "odoom.Home";

    setup() {
        this.action = useService("action");
    }

    onPlay() {
        // XMLID del ir.actions.client definido en views/odoom_menu.xml
        this.action.doAction("odoom.action_odoom_play");
    }
}

registry.category("actions").add("odoom.home", OdooMHome);
