"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export function LightboxGallery({ images, title }: { images: string[]; title: string }) {
  const [index, setIndex] = useState(0);
  const [active, setActive] = useState(false);
  const current = images[index];

  const goPrevious = () => setIndex((currentIndex) => (currentIndex === 0 ? images.length - 1 : currentIndex - 1));
  const goNext = () => setIndex((currentIndex) => (currentIndex === images.length - 1 ? 0 : currentIndex + 1));

  return (
    <>
      <div className="grid gap-3">
        <button className="relative aspect-[16/10] overflow-hidden bg-neutral-100" onClick={() => setActive(true)} type="button">
          <Image alt={`${title} screenshot ${index + 1}`} className="object-cover" fill src={current} />
        </button>
        <div className="flex items-center justify-between border-t border-[var(--line)] pt-3">
          <button className="inline-flex items-center gap-2 py-2 text-sm font-medium" onClick={goPrevious} type="button">
            <ChevronLeft size={17} /> Previous
          </button>
          <p className="text-sm text-neutral-500">
            {index + 1} / {images.length}
          </p>
          <button className="inline-flex items-center gap-2 py-2 text-sm font-medium" onClick={goNext} type="button">
            Next <ChevronRight size={17} />
          </button>
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
              <Image alt={`${title} enlarged screenshot`} className="object-contain" fill src={current} />
              <button aria-label="Previous image" className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 p-3" onClick={goPrevious} type="button">
                <ChevronLeft size={22} />
              </button>
              <button aria-label="Next image" className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 p-3" onClick={goNext} type="button">
                <ChevronRight size={22} />
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
