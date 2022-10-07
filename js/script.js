window._wpemojiSettings = {
    "baseUrl": "https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/72x72\/",
    "ext": ".png",
    "svgUrl": "https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/svg\/",
    "svgExt": ".svg",
    "source": {"concatemoji": "https:\/\/show.moxcreative.com\/autorent\/wp-includes\/js\/wp-emoji-release.min.js?ver=6.0.2"}
};
/*! This file is auto-generated */
!function (e, a, t) {
    var n, r, o, i = a.createElement("canvas"), p = i.getContext && i.getContext("2d");

    function s(e, t) {
        var a = String.fromCharCode,
            e = (p.clearRect(0, 0, i.width, i.height), p.fillText(a.apply(this, e), 0, 0), i.toDataURL());
        return p.clearRect(0, 0, i.width, i.height), p.fillText(a.apply(this, t), 0, 0), e === i.toDataURL()
    }

    function c(e) {
        var t = a.createElement("script");
        t.src = e, t.defer = t.type = "text/javascript", a.getElementsByTagName("head")[0].appendChild(t)
    }

    for (o = Array("flag", "emoji"), t.supports = {
        everything: !0,
        everythingExceptFlag: !0
    }, r = 0; r < o.length; r++) t.supports[o[r]] = function (e) {
        if (!p || !p.fillText) return !1;
        switch (p.textBaseline = "top", p.font = "600 32px Arial", e) {
            case"flag":
                return s([127987, 65039, 8205, 9895, 65039], [127987, 65039, 8203, 9895, 65039]) ? !1 : !s([55356, 56826, 55356, 56819], [55356, 56826, 8203, 55356, 56819]) && !s([55356, 57332, 56128, 56423, 56128, 56418, 56128, 56421, 56128, 56430, 56128, 56423, 56128, 56447], [55356, 57332, 8203, 56128, 56423, 8203, 56128, 56418, 8203, 56128, 56421, 8203, 56128, 56430, 8203, 56128, 56423, 8203, 56128, 56447]);
            case"emoji":
                return !s([129777, 127995, 8205, 129778, 127999], [129777, 127995, 8203, 129778, 127999])
        }
        return !1
    }(o[r]), t.supports.everything = t.supports.everything && t.supports[o[r]], "flag" !== o[r] && (t.supports.everythingExceptFlag = t.supports.everythingExceptFlag && t.supports[o[r]]);
    t.supports.everythingExceptFlag = t.supports.everythingExceptFlag && !t.supports.flag, t.DOMReady = !1, t.readyCallback = function () {
        t.DOMReady = !0
    }, t.supports.everything || (n = function () {
        t.readyCallback()
    }, a.addEventListener ? (a.addEventListener("DOMContentLoaded", n, !1), e.addEventListener("load", n, !1)) : (e.attachEvent("onload", n), a.attachEvent("onreadystatechange", function () {
        "complete" === a.readyState && t.readyCallback()
    })), (e = t.source || {}).concatemoji ? c(e.concatemoji) : e.wpemoji && e.twemoji && (c(e.twemoji), c(e.wpemoji)))
}(window, document, window._wpemojiSettings);

var elementorFrontendConfig = {
    "environmentMode": {"edit": false, "wpPreview": false, "isScriptDebug": false},
    "i18n": {
        "shareOnFacebook": "Share on Facebook",
        "shareOnTwitter": "Share on Twitter",
        "pinIt": "Pin it",
        "download": "Download",
        "downloadImage": "Download image",
        "fullscreen": "Fullscreen",
        "zoom": "Zoom",
        "share": "Share",
        "playVideo": "Play Video",
        "previous": "Previous",
        "next": "Next",
        "close": "Close"
    },
    "is_rtl": false,
    "breakpoints": {"xs": 0, "sm": 480, "md": 768, "lg": 1025, "xl": 1440, "xxl": 1600},
    "responsive": {
        "breakpoints": {
            "mobile": {
                "label": "Mobile",
                "value": 767,
                "default_value": 767,
                "direction": "max",
                "is_enabled": true
            },
            "mobile_extra": {
                "label": "Mobile Extra",
                "value": 880,
                "default_value": 880,
                "direction": "max",
                "is_enabled": false
            },
            "tablet": {
                "label": "Tablet",
                "value": 1024,
                "default_value": 1024,
                "direction": "max",
                "is_enabled": true
            },
            "tablet_extra": {
                "label": "Tablet Extra",
                "value": 1200,
                "default_value": 1200,
                "direction": "max",
                "is_enabled": false
            },
            "laptop": {
                "label": "Laptop",
                "value": 1366,
                "default_value": 1366,
                "direction": "max",
                "is_enabled": false
            },
            "widescreen": {
                "label": "Widescreen",
                "value": 2400,
                "default_value": 2400,
                "direction": "min",
                "is_enabled": false
            }
        }
    },
    "version": "3.7.3",
    "is_static": false,
    "experimentalFeatures": {
        "e_dom_optimization": true,
        "e_optimized_assets_loading": true,
        "e_optimized_css_loading": true,
        "a11y_improvements": true,
        "additional_custom_breakpoints": true,
        "e_import_export": true,
        "e_hidden_wordpress_widgets": true,
        "theme_builder_v2": true,
        "hello-theme-header-footer": true,
        "landing-pages": true,
        "elements-color-picker": true,
        "favorite-widgets": true,
        "admin-top-bar": true,
        "page-transitions": true,
        "notes": true,
        "form-submissions": true,
        "e_scroll_snap": true
    },
    "urls": {"assets": "https:\/\/show.moxcreative.com\/autorent\/wp-content\/plugins\/elementor\/assets\/"},
    "settings": {"page": [], "editorPreferences": []},
    "kit": {
        "active_breakpoints": ["viewport_mobile", "viewport_tablet"],
        "global_image_lightbox": "yes",
        "lightbox_enable_counter": "yes",
        "lightbox_enable_fullscreen": "yes",
        "lightbox_enable_zoom": "yes",
        "lightbox_enable_share": "yes",
        "lightbox_title_src": "title",
        "lightbox_description_src": "description",
        "hello_header_logo_type": "title",
        "hello_header_menu_layout": "horizontal",
        "hello_footer_logo_type": "logo"
    },
    "post": {
        "id": 800,
        "title": "Homepage%20%E2%80%93%20autorent",
        "excerpt": "",
        "featuredImage": "https:\/\/show.moxcreative.com\/autorent\/wp-content\/uploads\/sites\/58\/2022\/02\/Homepage-180x1024.jpg"
    }
};