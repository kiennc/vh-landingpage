import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SearchHero } from '@/components/SearchHero';
import { FilterBar } from '@/components/FilterBar';
import { ProjectGrid } from '@/components/ProjectGrid';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <SearchHero />
        <FilterBar />
        <ProjectGrid />
      </main>
      <Footer />
    </div>
  );
}
