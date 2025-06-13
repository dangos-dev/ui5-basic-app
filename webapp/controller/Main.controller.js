sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/MessageBox",
    "sap/m/Dialog",
    "sap/m/Button",
    "sap/m/Text",
    "sap/m/Link",
    "sap/m/VBox",
    "sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast, MessageBox, Dialog, Button, Text, Link, VBox) {
    "use strict";

    return Controller.extend("com.tutorial.ui5starter.controller.Main", {

        onInit: function () {
            this.oRouter = this.getOwnerComponent().getRouter();

            // Obtengo el modelo i18n
            this.oI18n = this.getOwnerComponent().getModel("i18n").getResourceBundle();

            // Configuro el selector de idioma al idioma actual
            const sCurrentLanguage = this._getCurrentLanguage();
            const oSelect = this.getView().byId("languageSelect");
            if (oSelect) {
                oSelect.setSelectedKey(sCurrentLanguage);
            }
        },

        /**
         * Obtiene el idioma actual desde el parámetro URL o usa "es" por defecto
         * @private
         * @returns {string} El código del idioma actual
         */
        _getCurrentLanguage: function() {
            const sLanguage = new URLSearchParams(window.location.search).get("sap-language");
            return sLanguage || "es";
        },

        onToggleSideNav: function () {
            MessageToast.show(this.oI18n.getText("menuMessage"));
        },

        onSettingsPress: function () {
            MessageToast.show(this.oI18n.getText("configMessage"));
        },

        onHelpPress: function () {
            const oDialog = new Dialog({
                title: this.oI18n.getText("helpTitle"),
                content: new VBox({
                    items: [
                        new Text({
                            text: this.oI18n.getText("helpDescription")
                        }),
                        new Text({
                            text: this.oI18n.getText("helpDeveloper"),
                            class: "sapUiSmallMarginTop"
                        }),
                        new Link({
                            text: this.oI18n.getText("helpWebsite"),
                            href: "https://dangos.dev",
                            target: "_blank",
                            class: "sapUiTinyMarginTop"
                        }),
                        new Link({
                            text: this.oI18n.getText("helpGithub"),
                            href: "https://github.com/dangos-dev",
                            target: "_blank",
                            class: "sapUiTinyMarginTop"
                        }),
                        new Link({
                            text: this.oI18n.getText("helpLinkedin"),
                            href: "https://www.linkedin.com/in/jabesrivas/",
                            target: "_blank",
                            class: "sapUiTinyMarginTop"
                        })
                    ],
                    class: "sapUiContentPadding"
                }),
                beginButton: new Button({
                    text: this.oI18n.getText("closeButton"),
                    press: function () {
                        oDialog.close();
                    }
                }),
                afterClose: function () {
                    oDialog.destroy();
                }
            });

            oDialog.open();
        },

        onStandardButtonPress: function () {
            MessageToast.show(this.oI18n.getText("standardButtonMessage"));
        },

        onEmphasizedButtonPress: function () {
            MessageBox.information(this.oI18n.getText("emphasizedButtonMessage"));
        },

        onNegativeButtonPress: function () {
            MessageBox.warning(this.oI18n.getText("negativeButtonMessage"));
        },

        onAcceptButtonPress: function () {
            MessageBox.success(this.oI18n.getText("successMessage"));
        },

        onLanguageChange: function(oEvent) {
            const sLanguage = oEvent.getParameter("selectedItem").getKey();

            // Establezco el idioma en la configuración de UI5
            sap.ui.getCore().getConfiguration().setLanguage(sLanguage);

            // Recargo la página con el parámetro de idioma
            let sUrl = window.location.href;

            // Elimino cualquier parámetro sap-language existente
            sUrl = sUrl.replace(/([&?])sap-language=[^&]+(&|$)/g, "$1");

            // Añado el nuevo parámetro sap-language
            let sSeparator = sUrl.indexOf("?") === -1 ? "?" : "&";
            if (sUrl.endsWith("&") || sUrl.endsWith("?")) {
                sSeparator = "";
            }

            window.location.href = sUrl + sSeparator + "sap-language=" + sLanguage;
        }
    });
});
