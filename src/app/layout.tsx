import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevPortfolio - Desenvolvedor Full Stack",
  description:
    "Portfolio profissional de desenvolvedor especializado em Next.js, TypeScript, Redux, Prisma e Tailwind CSS",
  keywords:
    "desenvolvedor, full stack, next.js, typescript, redux, prisma, tailwind css",
  authors: [{ name: "Developer Name" }],
  openGraph: {
    title: "DevPortfolio - Desenvolvedor Full Stack",
    description:
      "Portfolio profissional de desenvolvedor especializado em tecnologias modernas",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
