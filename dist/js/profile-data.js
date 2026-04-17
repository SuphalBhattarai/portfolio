(function () {
    "use strict";

    /*
     * Shared recruiter-facing profile data used across every live page.
     * Identity, contact details, public links, and proof points should be updated here first.
     */
    var profile = {
        site: {
            name: "Suphal Bhattarai",
            roleTitle: "Audit Associate",
            targetOpportunities: "Banking, finance, and IT opportunities",
            portrait: {
                src: "images/profile.jpeg",
                alt: "Portrait of Suphal Bhattarai"
            }
        },
        nav: {
            brand: "Suphal Bhattarai",
            home: "Home",
            about: "About",
            achievements: "Achievements",
            cv: "CV",
            contact: "Contact",
            cta: "Contact"
        },
        links: {
            home: "index.html",
            about: "about.html",
            achievements: "achievements.html",
            cv: "cv.html",
            contact: "contact.html",
            emailHref: "mailto:suphalbhattarai4@gmail.com",
            phoneHref: "tel:+9779862251305"
        },
        contact: {
            email: "suphalbhattarai4@gmail.com",
            phone: "+977-9862251305",
            address: "Tikathali 05, Lalitpur"
        },
        social: {
            linkedin: {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/suphal-bhattarai-078415184",
                ariaLabel: "View Suphal Bhattarai on LinkedIn"
            },
            github: {
                label: "GitHub",
                href: "https://github.com/SuphalBhattarai",
                ariaLabel: "View Suphal Bhattarai on GitHub"
            }
        },
        footer: {
            brand: "Suphal Bhattarai"
        },
        proof: {
            experienceStart: {
                year: 2024,
                monthIndex: 0,
                day: 1
            },
            sectorsCount: "14",
            sectorsLabel: "Sectors covered",
            sectors: [
                "Banking",
                "Finance",
                "Information Technology",
                "FDI",
                "Manufacturing",
                "Education",
                "Cooperative",
                "Private",
                "Listed",
                "Consulting",
                "Tax",
                "Law",
                "Costing",
                "NPOs"
            ],
            standards: "NFRS and IFRS",
            tasksSummary: "Audit, financial, and consulting work across planning, fieldwork, review support, and reporting.",
            tasks: [
                "Financial statement review and analysis aligned with NFRS and IFRS expectations.",
                "Audit planning support, evidence review, ledger testing, and reconciliation follow-through.",
                "Consulting-oriented assignments requiring structured analysis, documentation, and communication.",
                "Issue tracking, review support, and reporting preparation across varied client environments."
            ],
            softwareSummary: "Exposure across proprietary banking systems and local accounting tools.",
            software: [
                "Confidential proprietary systems including CRM, CBS, and HR platforms used in banking environments.",
                "Local accounting and workflow tools including Tally and Rigo.",
                "Software environments that support audit evidence handling, reporting workflows, and review coordination."
            ],
            documentationSummary: "Full audit documentation prepared and maintained in review-ready form.",
            documentation: [
                "Working papers, evidence files, reconciliations, schedules, and audit support files.",
                "Review-ready documentation structured for partner oversight and management communication.",
                "Reporting support materials prepared for client follow-up and formal audit output."
            ],
            reportingSummary: "Reported to key management personnel and audit partners while reviewing junior work.",
            reporting: [
                "Communicated progress and reporting points to key management personnel and audit partners.",
                "Prepared documentation and support files in a format suitable for senior review and follow-up.",
                "Reviewed junior work and helped improve clarity, completeness, and traceability."
            ]
        }
    };

    /*
     * Combine the shared profile data with page-specific content without mutating either object.
     * Page content can override top-level keys if a page needs a specialized variant.
     */
    function isPlainObject(value) {
        return Object.prototype.toString.call(value) === "[object Object]";
    }

    function mergeContent(base, override) {
        var output = Object.assign({}, base);

        Object.keys(override || {}).forEach(function (key) {
            var baseValue = output[key];
            var overrideValue = override[key];

            if (isPlainObject(baseValue) && isPlainObject(overrideValue)) {
                output[key] = mergeContent(baseValue, overrideValue);
                return;
            }

            output[key] = overrideValue;
        });

        return output;
    }

    function composePageContent(pageContent) {
        return mergeContent(profile, pageContent || {});
    }

    /*
     * Keep experience metrics current from January 2024 using the visitor's local date.
     * Returned as a one-decimal string for direct UI rendering.
     */
    function getExperienceYears() {
        var start = new Date(
            profile.proof.experienceStart.year,
            profile.proof.experienceStart.monthIndex,
            profile.proof.experienceStart.day
        );
        var today = new Date();
        var elapsedMilliseconds = Math.max(today.getTime() - start.getTime(), 0);
        var elapsedYears = elapsedMilliseconds / (365.25 * 24 * 60 * 60 * 1000);

        return elapsedYears.toFixed(1);
    }

    window.portfolioProfile = profile;
    window.portfolioData = {
        composePageContent: composePageContent,
        getExperienceYears: getExperienceYears
    };
}());
