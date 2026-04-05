import { Search } from 'lucide-react';

export function SearchHero() {
  return (
    <div className="relative h-[600px] w-full flex items-center justify-center bg-gray-900 mt-[-64px]">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=2000&q=80')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl w-full pt-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
          Tổ Ấm Hoàn Mỹ. Cuộc Sống Thăng Hoa.
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-12 drop-shadow-md">
          Khám phá những dự án bất động sản cao cấp hàng đầu Việt Nam
        </p>

        {/* Smart Search Bar */}
        <div className="bg-white rounded-lg p-2 flex flex-col md:flex-row items-center shadow-lg gap-2">
          <select className="w-full md:w-auto flex-1 p-3 rounded outline-none border-none bg-transparent">
            <option>Tất cả loại hình</option>
            <option>Căn hộ</option>
            <option>Biệt thự</option>
            <option>Shophouse</option>
          </select>
          <div className="hidden md:block w-px h-8 bg-gray-200" />
          <select className="w-full md:w-auto flex-1 p-3 rounded outline-none border-none bg-transparent">
            <option>Tất cả vị trí</option>
            <option>Hồ Chí Minh</option>
            <option>Hà Nội</option>
          </select>
          <div className="hidden md:block w-px h-8 bg-gray-200" />
          <select className="w-full md:w-auto flex-1 p-3 rounded outline-none border-none bg-transparent">
            <option>Tất cả mức giá</option>
            <option>Dưới 3 Tỷ</option>
            <option>3 - 7 Tỷ</option>
            <option>Trên 7 Tỷ</option>
          </select>
          <button className="w-full md:w-auto bg-primary text-white px-8 py-3 rounded hover:bg-primary/90 flex items-center justify-center gap-2 font-medium">
            <Search size={18} /> Tìm kiếm
          </button>
        </div>
      </div>
    </div>
  );
}
