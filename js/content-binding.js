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

        /*
         * Attribute bindings keep shared URLs, image sources, labels, and accessibility strings
         * in the same content model as the visible text.
         */
        [
            { attribute: "href", hook: "data-attr-href" },
            { attribute: "src", hook: "data-attr-src" },
            { attribute: "alt", hook: "data-attr-alt" },
            { attribute: "aria-label", hook: "data-attr-aria-label" }
        ].forEach(function (binding) {
            document.querySelectorAll("[" + binding.hook + "]").forEach(function (node) {
                var key = node.getAttribute(binding.hook);
                var value = getValueByPath(content, key);

                if (typeof value === "string") {
                    node.setAttribute(binding.attribute, value);
                }
            });
        });
    }

    /*
     * Shared motion helper for inner editorial pages.
     * Pages opt in by adding the `reveal` class to sections that should enter softly as they scroll into view.
     */
    function initializePageMotion() {
        var revealNodes;

        document.documentElement.classList.add("js");
        revealNodes = Array.prototype.slice.call(document.querySelectorAll(".reveal"));

        if (!revealNodes.length) {
            return;
        }

        /*
         * Use IntersectionObserver so sections reveal only when they approach the viewport.
         * A graceful fallback makes every section visible immediately if the API is unavailable.
         */
        if (!("IntersectionObserver" in window)) {
            revealNodes.forEach(function (node) {
                node.classList.add("reveal-visible");
            });
            return;
        }

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add("reveal-visible");
                observer.unobserve(entry.target);
            });
        }, {
            rootMargin: "0px 0px -12% 0px",
            threshold: 0.15
        });

        revealNodes.forEach(function (node) {
            observer.observe(node);
        });
    }

    window.editorialContent = {
        bindPageContent: bindPageContent,
        initializePageMotion: initializePageMotion
    };
}());
