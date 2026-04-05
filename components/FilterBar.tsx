import { CITIES, PROPERTY_TYPES } from '@/constants/mockData';

export function FilterBar() {
  return (
    <div className="border-b bg-white sticky top-16 z-40 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar scroll-smooth">
          <span className="text-sm font-semibold whitespace-nowrap mr-2">Vị trí:</span>
          {CITIES.map((city) => (
            <button key={city} className="whitespace-nowrap px-4 py-1.5 rounded-full border text-sm hover:border-primary hover:text-primary transition-colors focus:bg-primary focus:text-white focus:border-primary">
              {city}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar scroll-smooth">
          <span className="text-sm font-semibold whitespace-nowrap mr-2">Phân khúc:</span>
          {PROPERTY_TYPES.map((type) => (
            <button key={type} className="whitespace-nowrap px-4 py-1.5 rounded-full border text-sm hover:border-primary hover:text-primary transition-colors focus:bg-primary focus:text-white focus:border-primary">
              {type}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
