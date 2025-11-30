import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import EcosystemGrid from '@/components/EcosystemGrid';
import CodeDemo from '@/components/CodeDemo';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-[#020202] overflow-hidden selection:bg-teal-500/30">
      {/* Global Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-teal-500/5 blur-[120px]" />
        <div className="absolute top-[20%] right-[-5%] h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[20%] h-[600px] w-[600px] rounded-full bg-teal-500/5 blur-[150px]" />
      </div>

      <Header />

      <main className="relative z-10">
        <Hero />
        <Features />
        <EcosystemGrid />
        <CodeDemo />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
