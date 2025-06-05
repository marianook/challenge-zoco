import LogoutButton from "./LogoutButton";

const Layout = ({ title, children }) => {
  return (
    <div className="min-h-screen px-4 py-6 text-white bg-white/5 backdrop-blur-md">
      <header className="relative bg-[#38412f] rounded-2xl shadow-md border border-white/10 mb-10 px-4 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-center sm:text-left">
        <h1 className="text-lg sm:text-2xl font-bold text-[#b4c400]">
          {title}
        </h1>

        <div className="hidden sm:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-medium text-white bg-[#3a3e44] px-3 py-1 rounded-full shadow-sm border border-white/10">
          React SPA APP - Zoco - Servicios de Pago
        </div>

        <div className="sm:hidden text-xs font-medium text-white bg-[#3a3e44] px-3 py-1 rounded-full shadow-sm border border-white/10">
          React SPA APP - Zoco - Servicios de Pago
        </div>

        <div className="sm:ml-auto">
          <LogoutButton />
        </div>
      </header>

      <main className="bg-white text-[#2d3035] p-6 rounded-2xl shadow-xl border border-gray-200 max-w-3xl mx-auto w-full">
        {children}
      </main>
    </div>
  );
};

export default Layout;
