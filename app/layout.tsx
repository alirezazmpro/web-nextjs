import "./globals.css";
import Providers from "./Provider";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <head>
          <link
            href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css"
            rel="stylesheet"
            type="text/css"
          />
        </head>
        <body>{children}</body>
      </html>
    </Providers>
  );
}
