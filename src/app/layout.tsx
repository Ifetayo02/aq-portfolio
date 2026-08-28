import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abdulqoyum — Full-Stack Developer",
  description: "Portfolio of Abdulqoyum, a full-stack MERN developer.",
};

const THEME_INIT_SCRIPT = `
(function () {
  try {
    var saved = window.localStorage.getItem("theme");
    var theme = saved === "light" ? "light" : "dark";
    document.documentElement.dataset.theme = theme;
  } catch (e) {
    document.documentElement.dataset.theme = "dark";
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      data-theme="dark"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}