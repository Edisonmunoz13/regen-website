import Image from "next/image";

export function AppMockups() {
  return (
    <section id="how" className="py-8 sm:py-12 overflow-hidden">
      <div className="container-page">
        <div className="grid place-items-center">
          <div className="relative flex items-center justify-center w-full">
            {/* Mobile layout - centered with slight overlap */}
            <div className="flex items-center justify-center gap-0 lg:hidden">
              <Image 
                src="/images/regen-2.png" 
                alt="Regen app summary" 
                width={180} 
                height={360} 
                className="rounded-[40px] shadow-lg ring-1 ring-zinc-200 cursor-pointer transform -rotate-12 scale-90 -mr-4" 
              />
              <Image 
                src="/images/regen-1.png" 
                alt="Regen app performance" 
                width={200} 
                height={400} 
                className="rounded-[40px] shadow-xl ring-1 ring-zinc-200 cursor-pointer relative z-10" 
              />
              <Image 
                src="/images/regen-3.png" 
                alt="Regen savings rules" 
                width={180} 
                height={360} 
                className="rounded-[40px] shadow-lg ring-1 ring-zinc-200 cursor-pointer transform rotate-12 scale-90 -ml-4" 
              />
            </div>

            {/* Desktop layout - closer together */}
            <div className="hidden lg:flex items-center justify-center relative w-full max-w-4xl">
              {/* Left card - behind and tilted */}
              <div className="absolute left-20 z-10 transform -rotate-15 scale-90 transition-transform duration-300 hover:scale-100 hover:z-30">
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
              <div className="absolute right-20 z-10 transform rotate-15 scale-90 transition-transform duration-300 hover:scale-100 hover:z-30">
                <Image 
                  src="/images/regen-3.png" 
                  alt="Regen savings rules" 
                  width={260} 
                  height={520} 
                  className="rounded-[40px] shadow-lg ring-1 ring-zinc-200 cursor-pointer" 
                />
              </div>
            </div>
          </div>
          <p className="mt-6 text-sm text-zinc-500">Coming soon to iOS and Android</p>
        </div>
      </div>
    </section>
  );
}
