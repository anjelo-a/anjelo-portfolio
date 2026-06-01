"use client";

import Image from "next/image";
import { useState, useTransition } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

export function LightboxGallery({ images, title }: { images: string[]; title: string }) {
  const [index, setIndex] = useState(0);
  const [active, setActive] = useState(false);
  const [, startTransition] = useTransition();
  const current = images[index];

  const goPrevious = () => {
    startTransition(() => {
      setIndex((currentIndex) => (currentIndex === 0 ? images.length - 1 : currentIndex - 1));
    });
  };
  const goNext = () => {
    startTransition(() => {
      setIndex((currentIndex) => (currentIndex === images.length - 1 ? 0 : currentIndex + 1));
    });
  };

  return (
    <>
      <div className="grid gap-3">
        <div className="relative">
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
            <Image alt={`${title} screenshot ${index + 1}`} className="object-cover" fill sizes="(min-width: 1024px) 768px, calc(100vw - 56px)" src={current} />
          </div>
          <button aria-label="Open full image" className="absolute right-3 top-3 grid h-9 w-9 place-items-center border border-neutral-200 bg-white text-neutral-950 shadow-[0_8px_24px_rgba(0,0,0,0.22)] transition hover:bg-white" onClick={() => setActive(true)} type="button">
            <Maximize2 size={16} strokeWidth={1.8} />
          </button>
          <button aria-label="Previous image" className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center border border-neutral-200 bg-white text-neutral-950 shadow-[0_8px_24px_rgba(0,0,0,0.22)] transition hover:bg-white" onClick={goPrevious} type="button">
            <ChevronLeft size={21} strokeWidth={1.9} />
          </button>
          <button aria-label="Next image" className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center border border-neutral-200 bg-white text-neutral-950 shadow-[0_8px_24px_rgba(0,0,0,0.22)] transition hover:bg-white" onClick={goNext} type="button">
            <ChevronRight size={21} strokeWidth={1.9} />
          </button>
        </div>
        <div className="flex justify-center border-t border-[var(--line)] pt-3">
          <p className="text-sm text-neutral-500">{index + 1} / {images.length}</p>
        </div>
      </div>
      {active ? (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4" role="dialog" aria-modal="true">
          <div className="w-full max-w-5xl bg-white">
            <div className="flex items-center justify-between border-b border-[var(--line)] p-3">
              <p className="text-sm font-semibold">{title}</p>
              <button aria-label="Close image preview" className="p-2 hover:bg-neutral-100" onClick={() => setActive(false)} type="button">
                <X size={18} />
              </button>
            </div>
            <div className="relative aspect-[16/10] bg-white">
              <Image alt={`${title} enlarged screenshot`} className="object-contain" fill sizes="(min-width: 1024px) 1024px, calc(100vw - 32px)" src={current} />
              <button aria-label="Previous image" className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center border border-neutral-200 bg-white text-neutral-950 shadow-[0_8px_24px_rgba(0,0,0,0.22)] transition hover:bg-white" onClick={goPrevious} type="button">
                <ChevronLeft size={22} strokeWidth={1.9} />
              </button>
              <button aria-label="Next image" className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center border border-neutral-200 bg-white text-neutral-950 shadow-[0_8px_24px_rgba(0,0,0,0.22)] transition hover:bg-white" onClick={goNext} type="button">
                <ChevronRight size={22} strokeWidth={1.9} />
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
