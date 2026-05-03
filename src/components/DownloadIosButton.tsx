"use client";

import { useState, type CSSProperties, type ReactNode } from "react";
import { Dialog, DialogPanel, DialogTitle, DialogBackdrop } from "@headlessui/react";
import { X } from "lucide-react";
import { AppleLogo } from "./AppleLogo";

const APP_STORE_URL = "https://apps.apple.com/us/app/regen-invest/id6758348303";

function isMobileDevice() {
  if (typeof navigator === "undefined") return false;
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

type Props = {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  onAfterClick?: () => void;
};

export function DownloadIosButton({ className, style, children, onAfterClick }: Props) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isMobileDevice()) {
      onAfterClick?.();
      return;
    }
    e.preventDefault();
    setOpen(true);
    onAfterClick?.();
  };

  const closeModal = () => {
    setOpen(false);
    setStatus("idle");
    setErrorMsg("");
    setEmail("");
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/send-app-link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data.error || "Couldn't send the link. Try again.");
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setErrorMsg("Network error. Try again.");
      setStatus("error");
    }
  };

  return (
    <>
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={className}
        style={style}
      >
        {children}
      </a>

      <Dialog open={open} onClose={closeModal} className="relative z-[100]">
        <DialogBackdrop className="fixed inset-0 bg-black/80 backdrop-blur-sm" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel className="relative w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-950 p-8 text-white shadow-2xl">
            <button
              onClick={closeModal}
              aria-label="Close"
              className="absolute right-4 top-4 rounded-full p-1 text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            <div
              className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full"
              style={{ backgroundColor: "rgba(133, 239, 172, 0.12)" }}
            >
              <AppleLogo
                className="h-6 w-6"
                style={{ color: "var(--regen-green)" }}
              />
            </div>

            <DialogTitle className="text-2xl font-bold">
              Get Regen on your iPhone
            </DialogTitle>
            <p className="mt-2 text-sm text-zinc-400">
              Enter your email and we&apos;ll send you the App Store link to install on your iPhone.
            </p>

            {status !== "success" ? (
              <form onSubmit={submit} className="mt-6 flex flex-col gap-3">
                <input
                  type="email"
                  required
                  autoFocus
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="w-full rounded-full border border-zinc-800 bg-black px-5 py-3 text-white placeholder:text-zinc-600 outline-none transition-colors focus:border-emerald-500"
                />
                {status === "error" && errorMsg && (
                  <p className="text-sm text-red-400">{errorMsg}</p>
                )}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold text-black transition-all hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
                  style={{ backgroundColor: "var(--regen-green)" }}
                >
                  {status === "loading" ? "Sending..." : "Send link"}
                </button>
              </form>
            ) : (
              <div
                className="mt-6 rounded-xl border p-4 text-sm"
                style={{
                  borderColor: "rgba(133, 239, 172, 0.3)",
                  backgroundColor: "rgba(133, 239, 172, 0.08)",
                  color: "var(--regen-green)",
                }}
              >
                Link sent. Open the email on your iPhone to install Regen.
              </div>
            )}
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
