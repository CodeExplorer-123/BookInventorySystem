function Header() {
  return (
    <header className="relative overflow-hidden border-b border-slate-200 bg-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 -top-16 h-56 w-56 rounded-full bg-cyan-200/60 blur-3xl" />
        <div className="absolute -right-24 top-0 h-64 w-64 rounded-full bg-indigo-200/60 blur-3xl" />
      </div>

      <div className="relative mx-auto w-[92vw] max-w-6xl px-1 py-10 sm:px-3 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">Book Inventory System</h1>
        <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
          Manage your books with quick actions for edit, delete, and description preview.
        </p>
      </div>
    </header>
  );
}

export default Header;
