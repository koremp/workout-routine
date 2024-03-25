import type { Metadata } from "next";

import {
  CssBaseline,
} from '@mui/material';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import PageContainer from '@/components/PageContainer';
import NavigationBar from '@/components/NavigationBar';
import StoreProvider from './StoreProvider';

export const metadata: Metadata = {
  title: "Workout Routine",
  description: "Create YOur Workout Routine History",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <CssBaseline />
      <body>
        <StoreProvider>
          <PageContainer>
            {children}
            <NavigationBar />
          </PageContainer>
        </StoreProvider>
      </body>
    </html>
  );
}
