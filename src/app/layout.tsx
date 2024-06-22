import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Poppins } from "next/font/google";
import "./globals.scss";
import front from "../../public/front.jpg"

const inter = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL('https://acme.com'),
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: true,
          noimageindex: true,
        },
      },
    title: "Everton Moura - Portifólio",
    applicationName: "Portifólio de Everton Brandão de Moura",
    description: "desenvolvedor full-stack em busca de agregar em projetos",
    authors: [{ name: "Everton" }],
    creator: "Everton",
    keywords: [
        "desenvolverdor",
        "programador",
        "criação de apps",
        "jr",
        "SEO",
        "API",
        "nextjs",
        "senior",
        "pleno",
        "web",
        "desenvolvedor full-stack",
        "everton",
        "landing page",
        "criação de sites",
        "criação de loja",
        "js",
        "ts",
        "node",
    ],
    openGraph: {
        title: "Everton Moura - Portifólio",
        description: "desenvolvedor full-stack em busca de agregar em projetos",
        siteName:"Everton Moura - Portifólio",
        images: [{
            url: `${front}`,
            width: '300',
            height: "200"
        }],
        url: `${process.env.BASE_URL}`,
        locale: 'pt_BR',
        type: 'website'
    },


};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
            <body className={inter.className}>
                {children}
                <Analytics />
            </body>
        </html>
    );
}
