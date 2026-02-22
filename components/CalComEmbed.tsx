"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalComEmbed() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi();
            cal("ui", {
                "theme": "light",
                "styles": {
                    "branding": {
                        "brandColor": "#0f172a"
                    }
                },
                "hideEventTypeDetails": false,
                "layout": "month_view"
            });
        })();
    }, []);

    return null;
}
