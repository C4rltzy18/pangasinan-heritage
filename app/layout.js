import './globals.css';

export const metadata = {
  title: 'Pangasinan Heritage',
  description: 'Discover, Learn, and Explore Pangasinan heritage.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}