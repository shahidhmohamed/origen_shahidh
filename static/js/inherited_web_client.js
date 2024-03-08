odoo.define("dash_background.InheritedWebClient", function (require) {
    "use strict";
    
    const WebClient = require('web.WebClient');
    
    WebClient.include({
        init: function (parent, options) {
            this._super.apply(this, arguments);
            this.setTitlePart({
                zopenerp: "Origen"
            });
        },
    });
});
