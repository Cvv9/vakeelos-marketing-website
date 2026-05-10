import type { Metadata } from "next";
import { ContactSection } from "@/components/marketing/contact-section";

export const metadata: Metadata = {
  title: "Contact — VakeelOS",
  description: "Get in touch with the VakeelOS team.",
};

export default function ContactPage() {
  return <ContactSection />;
}
