import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Menu from '@/app/components/header/Menu'
import Footer from '@/app/components/footer/Footer'


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Mega de Hoje - Resultados das Loterias Nacionais",
  description: "No Mega de Hoje, você encontra os resultados mais atualizados das principais loterias do Brasil, como Mega-Sena, Lotofácil, Quina e muito mais. Atualizamos os resultados em tempo real para que você não perca nenhuma oportunidade. Além disso, oferecemos dicas exclusivas de como melhorar suas chances de ganhar na Mega-Sena e outras loterias. Fique por dentro de todas as novidades e aumente suas chances de sucesso!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="w-full  m-auto ">
          <div className="m-auto">
          <Menu />
       
          </div>
      
        <div className="px-5 h-dvh mt-5">
          {children}
        </div>
        <Footer />
        </div>
      </body>
    </html>
  );
}
