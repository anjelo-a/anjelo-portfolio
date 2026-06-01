"use client";

import { useState } from "react";
import { Download, ExternalLink, FileText, X } from "lucide-react";
import { profile } from "@/data/portfolio";

export function ResumeCard() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="w-full border-t border-[var(--line)] py-6 text-left"
        onClick={() => setOpen(true)}
        type="button"
      >
        <div className="border border-[var(--line)] bg-white p-4">
          <div className="mb-4 flex items-center justify-between border-b border-[var(--line)] pb-3">
            <FileText size={20} />
            <span className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">Resume</span>
          </div>
          <iframe
            className="pointer-events-none h-[420px] w-full border border-[var(--line)] bg-white"
            src={`${profile.resumeUrl}#toolbar=0&navpanes=0&scrollbar=0`}
            tabIndex={-1}
            title="Resume preview"
          />
        </div>
        <p className="mt-4 text-sm font-medium">Tap for full view</p>
      </button>

      {open ? (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/55 px-4 py-6" role="dialog" aria-modal="true">
          <div className="max-h-[92vh] w-full max-w-3xl overflow-auto bg-white">
            <div className="flex items-center justify-between border-b border-[var(--line)] p-4">
              <p className="font-semibold">Resume Preview</p>
              <button aria-label="Close resume preview" className="p-2 hover:bg-neutral-200" onClick={() => setOpen(false)} type="button">
                <X size={18} />
              </button>
            </div>
            <div className="grid gap-5 p-5 md:grid-cols-[1fr_220px]">
              <iframe className="h-[72vh] min-h-[520px] w-full border border-[var(--line)] bg-white" src={profile.resumeUrl} title="Resume PDF preview" />
              <div className="space-y-3">
                <a className="primary-button flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium" href={profile.resumeUrl} download>
                  <Download size={16} /> Download Resume
                </a>
                <a className="flex items-center justify-center gap-2 border border-neutral-900 px-4 py-3 text-sm font-medium" href={profile.resumeUrl} rel="noopener noreferrer" target="_blank">
                  <ExternalLink size={16} /> Open PDF
                </a>
                <p className="text-xs leading-5 text-neutral-500">This preview summarizes the attached PDF. Use Open PDF for the full resume.</p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
