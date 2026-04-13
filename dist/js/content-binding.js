(function () {
    "use strict";

    /*
     * Shared helper for pages that keep editable copy in one content object.
     * Each element with `data-content` receives the string resolved from the object path.
     */
    function getValueByPath(source, path) {
        return path.split(".").reduce(function (value, segment) {
            if (value === undefined || value === null) {
                return undefined;
            }
            return value[segment];
        }, source);
    }

    /*
     * Apply page content into the DOM.
     * The helper is intentionally small so every page can reuse it without duplicating logic.
     */
    function bindPageContent(content) {
        document.querySelectorAll("[data-content]").forEach(function (node) {
            var key = node.getAttribute("data-content");
            var value = getValueByPath(content, key);

            if (typeof value === "string") {
                node.textContent = value;
            }
        });
    }

    window.editorialContent = {
        bindPageContent: bindPageContent
    };
}());
