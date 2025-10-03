import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="h-screen w-64 bg-gray-900 to-white flex flex-col">
      <div className="p-6 text-2xl font-bold border-b border-gray-700">
        <>Dashboard</>
      </div>

      <div className="flex-1 p-6 skew-y-6 space-y-6">
        <Link href="/home" className="hover:text-gray-300 block">
          Home
        </Link>
        <Link href="/profile" className="hover:text-gray-300 block">
          Profile
        </Link>
        <Link href="/settings" className="hover:text-gray-300 bl">
          Settings
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
