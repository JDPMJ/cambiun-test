import "../globals.css";

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return (
    
      <div className="min-h-screen flex items-center justify-center p-4 text-white">
        {children}
      </div>
    
  );
}