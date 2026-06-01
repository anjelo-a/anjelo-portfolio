"use client";

import { useState } from "react";
import { Download, ExternalLink, FileText, X } from "lucide-react";
import { profile } from "@/data/portfolio";

export function ResumeCard() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="w-full border-t border-[var(--line)] py-7 text-left"
        onClick={() => setOpen(true)}
        type="button"
      >
        <div className="mb-5 flex items-center justify-between">
          <FileText size={22} />
          <span className="text-xs uppercase tracking-[0.18em] text-neutral-500">Resume</span>
        </div>
        <div className="space-y-3">
          <p className="text-lg font-semibold">Entry-level developer resume</p>
          <div className="space-y-2 text-sm text-neutral-600">
            <p>Projects-first experience</p>
            <p>TypeScript, React, Next.js</p>
            <p>Backend and cloud fundamentals</p>
          </div>
          <p className="text-sm font-medium">Preview resume</p>
        </div>
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
              <div className="min-h-[420px] border border-[var(--line)] bg-white p-7">
                <p className="text-2xl font-bold">{profile.name}</p>
                <p className="mt-1 text-neutral-600">{profile.role}</p>
                <div className="mt-7 space-y-5 text-sm">
                  <div>
                    <p className="mb-2 font-semibold uppercase tracking-[0.16em] text-neutral-500">Profile</p>
                    <p className="leading-6 text-neutral-700">{profile.about}</p>
                  </div>
                  <div>
                    <p className="mb-2 font-semibold uppercase tracking-[0.16em] text-neutral-500">Highlights</p>
                    <ul className="list-disc space-y-1 pl-5 text-neutral-700">
                      <li>Project-based full-stack learning</li>
                      <li>Responsive UI and accessibility practice</li>
                      <li>Git, deployment, and database fundamentals</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <a className="flex items-center justify-center gap-2 border border-neutral-900 bg-neutral-900 px-4 py-3 text-sm font-medium text-white" href={profile.resumeUrl} download>
                  <Download size={16} /> Download Resume
                </a>
                <a className="flex items-center justify-center gap-2 border border-neutral-900 px-4 py-3 text-sm font-medium" href={profile.resumeUrl} rel="noopener noreferrer" target="_blank">
                  <ExternalLink size={16} /> Open PDF
                </a>
                <p className="text-xs leading-5 text-neutral-500">Add your final PDF at public/resume/anjelo-arnaez-resume.pdf when ready.</p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
