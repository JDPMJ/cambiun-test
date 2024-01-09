import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import gSession from "../components/gSession";
import "../globals.css";

export default async function MenuLayout({ children }: { children: React.ReactNode }) {
  const session = await gSession();

  if (session?.user) {
    return (
      <div className="min-h-screen grid grid-cols-1 xl:grid-cols-6 bg-gray-800 text-gray-100">
        <Sidebar />
        <div className="xl:col-span-5 bg-secondary-100">
          <Header name={session?.user.username} />
          <div className="h-[90vh] overflow-y-scrooll p-8 bg-white">
            {children}
          </div>
        </div>
      </div>
    );
  }

  return (
    <h1>Por favor inicie sesión</h1>
  );
}