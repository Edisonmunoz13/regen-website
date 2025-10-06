"use client";

import { Dialog } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useMemo, useState, useTransition } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

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
});

type FormValues = z.infer<typeof Schema>;

export function JoinWaitlistModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [success, setSuccess] = useState(false);
  const [isPending, startTransition] = useTransition();
  const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm<FormValues>({ resolver: zodResolver(Schema) });

  const selectedSportsbooks = watch("sportsbooks") || [];

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
      const res = await fetch("/api/waitlist", { method: "POST", body: JSON.stringify(values) });
      if (res.ok) setSuccess(true);
    });
  };

  const stateOptions = useMemo(() => states.map(s => (<option key={s} value={s}>{s}</option>)), []);
  const ageOptions = useMemo(() => ageRanges.map(a => (<option key={a} value={a}>{a}</option>)), []);

  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" onClick={onClose} />
      <div className="fixed inset-0 grid place-items-center p-4" onClick={onClose}>
        <Dialog.Panel 
          className="w-full max-w-lg mx-auto rounded-xl bg-white p-4 sm:p-6 shadow-2xl max-h-[90vh] overflow-y-auto" 
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute left-4 top-4 inline-flex items-center justify-center rounded-full p-2 text-zinc-600 hover:bg-zinc-100"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 inline-flex items-center justify-center rounded-full p-2 text-zinc-600 hover:bg-zinc-100"
          >
            ✕
          </button>

          {!success ? (
            <div className="grid gap-4 text-zinc-800">
              <Dialog.Title className="text-xl font-semibold">Join Regen waitlist</Dialog.Title>
              <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
                <input className="rounded-md border border-zinc-300 px-3 py-2" placeholder="Email" {...register("email")} />
                {errors.email && <p className="text-sm text-red-600">Valid email required</p>}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <input className="rounded-md border border-zinc-300 px-3 py-2" placeholder="First name" {...register("firstName")} />
                  <input className="rounded-md border border-zinc-300 px-3 py-2" placeholder="Last name" {...register("lastName")} />
                </div>
                <input className="rounded-md border border-zinc-300 px-3 py-2" placeholder="Phone" {...register("phone")} />
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <select className="rounded-md border border-zinc-300 px-3 py-2" defaultValue="" {...register("state")}>
                    <option value="" disabled>Select your state</option>
                    {stateOptions}
                  </select>
                  <select className="rounded-md border border-zinc-300 px-3 py-2" defaultValue="" {...register("ageRange")}>
                    <option value="" disabled>Select your age range</option>
                    {ageOptions}
                  </select>
                </div>

                <div>
                  <p className="mb-2 text-sm font-medium text-zinc-700">What sportsbooks do you use? (Select all that apply)</p>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {sportsbookOptions.map((name) => (
                      <label key={name} className="flex items-center gap-2 text-sm text-zinc-700">
                        <input
                          type="checkbox"
                          checked={selectedSportsbooks.includes(name)}
                          onChange={() => onToggleSportsbook(name)}
                        />
                        <span>{name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  disabled={isPending}
                  className="group mt-2 inline-flex items-center border-none justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-white transition-all hover:scale-105"
                  style={{ background: "linear-gradient(135deg, #183731 0%, #1f5e4c 100%)" }}
                >
                  {isPending ? "Saving..." : "Complete Signup"}
                  {!isPending && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
                </button>
              </form>
            </div>
          ) : (
            <div className="grid gap-4 text-zinc-800">
              <Dialog.Title className="text-xl font-semibold">Thanks for joining!</Dialog.Title>
              <p className="text-zinc-600">We will reach out soon. Meanwhile, here is a preview of the app.</p>
              <div className="overflow-hidden rounded-lg border">
                <Image src="/app-preview.jpg" alt="Regen App" width={1200} height={800} />
              </div>
            </div>
          )}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
