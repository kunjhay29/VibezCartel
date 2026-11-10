// app/join/page.tsx — the "Join the Cartel" application form (/join).

// This line makes it a CLIENT component — required for any page that uses
// interactivity (typing, clicking, state). Without it, useState won't work.
"use client";

import { useState } from "react"; // React's tool for "remembering" values that change
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTag from "@/components/SectionTag";

// The community archetypes for the dropdown (matches your brand world).
const archetypes = [
  "The Connector", "The Creator", "The Archivist", "The Energy", "The Builder",
];

export default function JoinPage() {
  // STATE: these "remember" what the user has typed/selected.
  // useState gives you [the value, a function to change it].
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", city: "",
    archetype: "", occupation: "", story: "",
  });
  const [submitted, setSubmitted] = useState(false); // tracks if form was sent

  // Runs whenever any input changes — updates the matching field in state.
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Runs when the form is submitted.
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault(); // stop the browser's default page-reload on submit
    // FOR NOW: just log it and show success. Later: send to the backend.
    console.log("Application submitted:", form);
    setSubmitted(true);
  }

  // If submitted, show a success message instead of the form.
  if (submitted) {
    return (
      <div className="min-h-screen bg-onyx text-cream" style={{ paddingTop: "52px" }}>
        <Navbar />
        <section className="flex min-h-[70vh] flex-col items-center justify-center px-8 text-center">
          <SectionTag>APPLICATION RECEIVED</SectionTag>
          <h1 className="mt-6 font-display text-6xl tracking-wide text-cream md:text-8xl">
            WELCOME TO<br /><span className="text-amber">THE FREQUENCY</span>
          </h1>
          <p className="mt-6 max-w-md font-body text-lg text-grey">
            We&apos;ve got your application, {form.firstName}. The cartel will be
            in touch. Until then — stay on the frequency.
          </p>
        </section>
        <Footer />
      </div>
    );
  }

  // Otherwise, show the form.
  return (
    <div className="min-h-screen bg-onyx text-cream">
      <Navbar />

      <section className="px-8 pt-24 pb-12 md:px-16">
        <div className="mx-auto max-w-2xl">
          <SectionTag>THE FOUNDING GENERATION</SectionTag>
          <h1 className="mt-6 font-display text-6xl tracking-wide text-cream md:text-8xl">
            JOIN THE<br /><span className="text-amber">CARTEL</span>
          </h1>
          <p className="mt-4 font-body text-lg text-grey">
            This is not a job. This is a legacy. Tell us who you are and why now.
          </p>
        </div>
      </section>

      <section className="px-8 pb-32 md:px-16">
        <form onSubmit={handleSubmit} className="mx-auto max-w-2xl">
          {/* First + last name, side by side on desktop */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Field label="FIRST NAME" name="firstName" value={form.firstName} onChange={handleChange} required />
            <Field label="LAST NAME" name="lastName" value={form.lastName} onChange={handleChange} required />
          </div>

          <Field label="EMAIL" name="email" type="email" value={form.email} onChange={handleChange} required />
          <Field label="CITY" name="city" value={form.city} onChange={handleChange} placeholder="Lagos, Abuja, London…" />

          {/* Archetype dropdown */}
          <div className="mt-6">
            <label className="font-mono text-xs tracking-[0.2em] text-amber">YOUR ARCHETYPE</label>
            <select
              name="archetype"
              value={form.archetype}
              onChange={handleChange}
              className="mt-2 w-full border border-rule bg-onyx-2 px-4 py-3 font-body text-cream outline-none focus:border-amber"
            >
              <option value="">Select one…</option>
              {archetypes.map((a) => (
                <option key={a} value={a}>{a}</option>
              ))}
            </select>
          </div>

          <Field label="WHAT DO YOU DO?" name="occupation" value={form.occupation} onChange={handleChange} placeholder="Your work, your craft…" />

          {/* Story textarea */}
          <div className="mt-6">
            <label className="font-mono text-xs tracking-[0.2em] text-amber">YOUR STORY</label>
            <textarea
              name="story"
              value={form.story}
              onChange={handleChange}
              placeholder="Why now? What are you looking for? What do you bring to the frequency?"
              className="mt-2 min-h-[140px] w-full border border-rule bg-onyx-2 px-4 py-3 font-body text-cream outline-none focus:border-amber"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="mt-8 w-full bg-amber px-6 py-4 font-mono text-sm font-bold tracking-[0.15em] text-onyx transition-colors hover:bg-amber-dim"
          >
            APPLY NOW →
          </button>
        </form>
      </section>

      <Footer />
    </div>
  );
}

// A small reusable Field component — defined right here in the same file,
// since it's only used on this page. Keeps the form markup clean.
function Field({
  label, name, value, onChange, type = "text", placeholder, required,
}: {
  label: string; name: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string; placeholder?: string; required?: boolean;
}) {
  return (
    <div className="mt-6">
      <label className="font-mono text-xs tracking-[0.2em] text-amber">
        {label} {required && <span className="text-grey">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full border border-rule bg-onyx-2 px-4 py-3 font-body text-cream outline-none focus:border-amber"
      />
    </div>
  );
}