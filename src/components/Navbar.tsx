import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-gray-900 p-4 text-white shadow-lg">
      <div className="text-xl font-bold tracking-wider">Morfweb</div>
      <div className="space-x-6">
        <Link href="/" className="hover:text-blue-400 transition">Anasayfa</Link>
        <Link href="/about" className="hover:text-blue-400 transition">Hakkımızda</Link>
        <Link href="/contact" className="hover:text-blue-400 transition">İletişim</Link>
      </div>
    </nav>
  );
};

export default Navbar;