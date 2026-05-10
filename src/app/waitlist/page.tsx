import type { Metadata } from "next";
import { WaitlistSection } from "@/components/marketing/waitlist-section";

export const metadata: Metadata = {
  title: "Join the Waitlist — VakeelOS",
  description:
    "Be among the first advocates to access VakeelOS. Practice management built for India's bar.",
};

export default function WaitlistPage() {
  return <WaitlistSection />;
}
