import { PostHogProvider } from "posthog-js/react";
import { AppProps } from "next/app";
import posthog from "posthog-js";


if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_ENABLE_POSTHOG) {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY ?? "", {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
        person_profiles: "identified_only",
        session_recording: {
            recordCrossOriginIframes: true,
        },
    });
}

export default function App({ Component, pageProps }: AppProps) {
    return (
        <PostHogProvider client={posthog}>
            <Component {...pageProps} />
        </PostHogProvider>
    )
}