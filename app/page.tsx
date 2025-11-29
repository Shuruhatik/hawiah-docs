import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import EcosystemGrid from '@/components/EcosystemGrid';
import CodeDemo from '@/components/CodeDemo';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#020202] overflow-hidden">
      {/* Aurora Background Effects */}
      <div className="pointer-events-none absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-blue-900/20 blur-[120px]" />
      <div className="pointer-events-none absolute top-[10%] right-[-5%] h-[400px] w-[400px] rounded-full bg-teal-900/20 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-[20%] left-[20%] h-[600px] w-[600px] rounded-full bg-blue-900/10 blur-[150px]" />

      <Header />
      <main className="relative z-10">
        <Hero />
        <Features />
        <EcosystemGrid />
        <CodeDemo />
      </main>
      <Footer />
    </div>
  );
}
