import './globals.css';

export const metadata = {
  title: 'Northstar Growth | Better property leads in Dubai',
  description: 'A clearer path to qualified property enquiries. Northstar Growth helps Dubai real estate agents plan, launch and improve digital lead generation.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
