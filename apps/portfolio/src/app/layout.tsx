import './global.css';
import { Providers } from './providers';
import { Navigation } from '../features/navigation/containers/navigation';
import { Footer } from '../features/footer/containers/footer';

export const metadata = {
  title: 'Patryk Orzech',
  description: 'My personal website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navigation />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
