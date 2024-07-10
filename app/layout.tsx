import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DrawerCustom from "@/components/DrawerCustom";
import { Box } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Box sx={{ display: "flex", backgroundColor: "#050505" }}>
          <DrawerCustom />
          <div className="flex-1">{children}</div>
        </Box>
      </body>
    </html>
  );
}
