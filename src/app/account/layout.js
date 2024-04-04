
export const metadata = {
  title: "ACME ACCOUNT",
  description: "Generated by create next app",
};

export default function AccountLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
            {children}
        </main>
      </body>
    </html>
  );
}