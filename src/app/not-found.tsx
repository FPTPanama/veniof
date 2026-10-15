import Link from "next/link";

export default function RootNotFound() {
  return (
    <html lang="en">
      <body className="m-0 min-h-screen bg-[#EEF0F3] font-sans text-[#0A1A2F]">
        <div className="mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center px-6 text-center">
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: "2rem" }}>
            Page not found
          </h1>
          <p style={{ color: "#0A1A2F", marginTop: 16 }}>
            Return to the VIOF website.
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 16 }}>
            <Link href="/en" style={{ color: "#C19B61" }}>
              Home (EN)
            </Link>
            <Link href="/es" style={{ color: "#C19B61" }}>
              Inicio (ES)
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
