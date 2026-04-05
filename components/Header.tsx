import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary">Vinhomes Market</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link href="#projects" className="transition-colors hover:text-primary">Dự án</Link>
          <Link href="#news" className="transition-colors hover:text-primary">Tin tức</Link>
          <Link href="#contact" className="transition-colors hover:text-primary">Liên hệ</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
            Đăng ký tư vấn
          </button>
        </div>
      </div>
    </header>
  );
}
