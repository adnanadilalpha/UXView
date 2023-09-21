import "../styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UXView - AI-Powered Mock Interviews",
  openGraph: {
    title: "UXView - AI-Powered Mock Interviews",
    description:
      "UXView is an AI-powered mock interview platform that helps you practice for your next job interview.",
    images: [
      {
        url: "https://demo.useUXView.com/opengraph-image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UXView - AI-Powered Mock Interviews",
    description:
      "UXView is an AI-powered mock interview platform that helps you practice for your next job interview.",
    images: ["https://demo.useUXView.com/opengraph-image"],
    creator: "@tmeyer_me",
  },
  metadataBase: new URL("https://demo.useUXView.com"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="scroll-smooth antialiased [font-feature-settings:'ss01']">
        {children}
      </body>
    </html>
  );
}
