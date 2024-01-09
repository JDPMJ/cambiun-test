import { Toaster } from "@/components/ui/toaster";
import "../app/globals.css";
import Provider from "./components/Provider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          {children}
          <Toaster />
        </Provider>
      </body>
    </html>
  );
}