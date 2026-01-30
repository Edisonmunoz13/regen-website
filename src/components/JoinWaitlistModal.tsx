"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useMemo, useState, useTransition, useEffect } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

const states = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"
];

const ageRanges = ["18-20", "21-24", "25-34", "35-44", "45-54", "55+"];

const sportsbookOptions = [
  "FanDuel","DraftKings","PrizePicks","Underdog","HardRock","Sportrade","BetRivers","ESPN BET","BetMGM","Caesars","Fliff","BetFred","Fanatics","Other"
];

const Schema = z.object({
  email: z.string().email(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  phone: z.string().optional(),
  state: z.string().optional(),
  ageRange: z.string().optional(),
  sportsbooks: z.array(z.string()).optional(),
  otherSportsbook: z.string().optional(),
});

type FormValues = z.infer<typeof Schema>;

export function JoinWaitlistModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [success, setSuccess] = useState(false);
  const [isPending, startTransition] = useTransition();
  const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm<FormValues>({ resolver: zodResolver(Schema) });

  const selectedSportsbooks = watch("sportsbooks") || [];
  const showOtherField = selectedSportsbooks.includes("Other");

  const onToggleSportsbook = (name: string) => {
    const set = new Set(selectedSportsbooks);
    if (set.has(name)) {
      set.delete(name);
    } else {
      set.add(name);
    }
    setValue("sportsbooks", Array.from(set));
  };

  const onSubmit = (values: FormValues) => {
    startTransition(async () => {
      try {
        const res = await fetch("/api/waitlist", { method: "POST", body: JSON.stringify(values) });
        
        if (res.ok) {
          setSuccess(true);
        } else {
          console.error("API call failed:", res.status, await res.text());
        }
      } catch (error) {
        console.error("Error calling API:", error);
      }
    });
  };

  const stateOptions = useMemo(() => states.map(s => (<option key={s} value={s} className="bg-zinc-900 text-white">{s}</option>)), []);
  const ageOptions = useMemo(() => ageRanges.map(a => (<option key={a} value={a} className="bg-zinc-900 text-white">{a}</option>)), []);
  
  useEffect(() => {
    if (open) {
      // Guardar el ancho actual del body antes de bloquear scroll
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      const bodyStyle = document.body.style;
      const htmlStyle = document.documentElement.style;
      
      // Prevenir scroll del body cuando el modal está abierto
      bodyStyle.overflow = 'hidden';
      bodyStyle.overflowX = 'hidden';
      bodyStyle.overflowY = 'hidden';
      htmlStyle.overflow = 'hidden';
      htmlStyle.overflowX = 'hidden';
      htmlStyle.overflowY = 'hidden';
      
      // Prevenir que el body se expanda horizontalmente
      bodyStyle.position = 'fixed';
      bodyStyle.width = '100%';
      bodyStyle.paddingRight = `${scrollbarWidth}px`;
    } else {
      // Restaurar scroll cuando el modal se cierra
      const bodyStyle = document.body.style;
      const htmlStyle = document.documentElement.style;
      
      bodyStyle.overflow = '';
      bodyStyle.overflowX = '';
      bodyStyle.overflowY = '';
      bodyStyle.position = '';
      bodyStyle.width = '';
      bodyStyle.paddingRight = '';
      htmlStyle.overflow = '';
      htmlStyle.overflowX = '';
      htmlStyle.overflowY = '';
    }
    
    return () => {
      // Cleanup: restaurar scroll al desmontar
      const bodyStyle = document.body.style;
      const htmlStyle = document.documentElement.style;
      
      bodyStyle.overflow = '';
      bodyStyle.overflowX = '';
      bodyStyle.overflowY = '';
      bodyStyle.position = '';
      bodyStyle.width = '';
      bodyStyle.paddingRight = '';
      htmlStyle.overflow = '';
      htmlStyle.overflowX = '';
      htmlStyle.overflowY = '';
    };
  }, [open]);
  
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4 py-8 overflow-hidden">
      <div 
        className="absolute inset-0 bg-black/50" 
        onClick={onClose}
      />
      <div className="py-16 relative w-full max-w-[min(360px,calc(100vw-2rem))] sm:max-w-md md:max-w-lg rounded-xl bg-black border border-zinc-800 p-4 sm:p-6 shadow-2xl max-h-[calc(100vh-4rem)] overflow-y-auto overflow-x-hidden" translate="no" lang="en">
        <button
          onClick={onClose}
          className="absolute left-4 top-4 inline-flex items-center justify-center rounded-full p-2 text-zinc-300 hover:bg-zinc-800"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <button
          onClick={onClose}
          className="absolute right-4 top-4 inline-flex items-center justify-center rounded-full p-2 text-zinc-300 hover:bg-zinc-800"
        >
          <X className="h-5 w-5" />
        </button>

        {!success ? (
          <div className="grid gap-4 text-white min-w-0 w-full">
            <h2 className="text-xl font-semibold text-[#85EFAC] break-words">Join Regen waitlist</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 min-w-0 w-full">
                <input className="w-full rounded-md border border-zinc-700 bg-zinc-900 text-white placeholder:text-zinc-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Email" {...register("email")} />
                {errors.email && <p className="text-sm text-red-400">Valid email required</p>}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 min-w-0 w-full">
                  <input className="w-full min-w-0 rounded-md border border-zinc-700 bg-zinc-900 text-white placeholder:text-zinc-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="First name" {...register("firstName")} />
                  <input className="w-full min-w-0 rounded-md border border-zinc-700 bg-zinc-900 text-white placeholder:text-zinc-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Last name" {...register("lastName")} />
                </div>
                <input className="w-full rounded-md border border-zinc-700 bg-zinc-900 text-white placeholder:text-zinc-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Phone" {...register("phone")} />
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 min-w-0 w-full">
                  <select className="w-full min-w-0 rounded-md border border-zinc-700 bg-zinc-900 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" defaultValue="" {...register("state")}>
                    <option value="" disabled className="bg-zinc-900">Select your state</option>
                    {stateOptions}
                  </select>
                  <select className="w-full min-w-0 rounded-md border border-zinc-700 bg-zinc-900 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" defaultValue="" {...register("ageRange")}>
                    <option value="" disabled className="bg-zinc-900">Select your age range</option>
                    {ageOptions}
                  </select>
                </div>

                <div className="min-w-0">
                  <p className="mb-2 text-sm font-medium text-zinc-300 break-words">What sportsbooks do you use? (Select all that apply)</p>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 min-w-0">
                    {sportsbookOptions.map((name) => (
                      <label key={name} className="flex items-center gap-2 text-sm text-zinc-300 min-w-0 w-full">
                        <input
                          type="checkbox"
                          checked={selectedSportsbooks.includes(name)}
                          onChange={() => onToggleSportsbook(name)}
                          className="accent-emerald-500 flex-shrink-0"
                        />
                        <span className="min-w-0 break-words">{name}</span>
                      </label>
                    ))}
                  </div>
                  {showOtherField && (
                    <div className="mt-3">
                      <input 
                        className="w-full rounded-md border border-zinc-700 bg-zinc-900 text-white placeholder:text-zinc-500 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" 
                        placeholder="Please specify other sportsbook" 
                        {...register("otherSportsbook")} 
                      />
                    </div>
                  )}
                </div>

                <button
                  disabled={isPending}
                  className="group mt-2 inline-flex items-center border-none justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-white transition-all hover:scale-105"
                  style={{ background: "linear-gradient(135deg, #183731 0%, #85EFAC 140%)" }}
                >
                  {isPending ? "Saving..." : "Complete Signup"}
                  {!isPending && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
                </button>
              </form>
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="mb-8">
                <div className="w-30 h-30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Image 
                    src="/images/icon.png" 
                    alt="Regen" 
                    width={90} 
                    height={90} 
                    className=""
                  />
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">LET&apos;S GOOO 🔥 You&apos;re on the waitlist!</h2>
                <p className="text-zinc-300 text-lg">Keep an eye on your inbox — big things incoming.</p>
              </div>
              
              <div className="mt-8">
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex items-center gap-2 rounded-lg px-8 py-3 text-sm font-semibold text-white transition-all hover:scale-105"
                  style={{ background: "linear-gradient(135deg, #183731 0%, #85EFAC 70%)" }}
                >
                  Got it!
                </button>
              </div>
            </div>
          )}
      </div>
    </div>
  );
}
