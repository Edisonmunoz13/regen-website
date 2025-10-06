import Image from "next/image";

export function AppMockups() {
  return (
    <section id="how" className="container-page py-8 sm:py-12">
      <div className="grid place-items-center">
        <div className="relative flex items-center justify-center">
          {/* Left card - behind and tilted */}
          <div className="absolute -left-60 z-10 transform -rotate-15 scale-90 transition-transform duration-300 hover:scale-100 hover:z-30">
            <Image 
              src="/images/regen-2.png" 
              alt="Regen app summary" 
              width={260} 
              height={520} 
              className="rounded-[40px] shadow-lg ring-1 ring-zinc-200 cursor-pointer" 
            />
          </div>
          
          {/* Center card - main focus */}
          <div className="relative z-20 transition-transform duration-300 hover:scale-110">
            <Image 
              src="/images/regen-1.png" 
              alt="Regen app performance" 
              width={260} 
              height={520} 
              className="rounded-[40px] shadow-xl ring-1 ring-zinc-200 cursor-pointer" 
            />
          </div>
          
          {/* Right card - behind and tilted */}
          <div className="absolute -right-60 z-10 transform rotate-15 scale-90 transition-transform duration-300 hover:scale-100 hover:z-30">
            <Image 
              src="/images/regen-3.png" 
              alt="Regen savings rules" 
              width={260} 
              height={520} 
              className="rounded-[40px] shadow-lg ring-1 ring-zinc-200 cursor-pointer" 
            />
          </div>
        </div>
        <p className="mt-6 text-sm text-zinc-500">Coming soon to iOS and Android</p>
      </div>
    </section>
  );
}
