import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import EcosystemGrid from '@/components/EcosystemGrid';
import CodeDemo from '@/components/CodeDemo';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0c0c0c]">
      <Header />
      <main>
        <Hero />
        <Features />
        <EcosystemGrid />
        <CodeDemo />
      </main>
      <Footer />
    </div>
  );
}
