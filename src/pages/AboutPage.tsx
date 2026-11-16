import React from 'react';
import { ArrowRight } from 'lucide-react';
import {
  ABOUT_VALUES,
  BRAND_CONFIG,
  BRAND_TIMELINE,
  TEAM_MEMBERS,
} from '../data/brand';
import { PageKey } from '../utils/navigation';
import { SafeImage } from '../components/SafeImage';

interface AboutPageProps {
  onNavigate: (page: PageKey) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div>
      {/* Hero Story Header */}
      <section className="bg-[var(--fo-charcoal)] text-[var(--fo-cream)] py-14 sm:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <p className="font-mono-tabular text-xs font-bold uppercase tracking-widest text-[var(--fo-lime)]">
              About FOOD O’CLOCK · Est. {BRAND_CONFIG.established}
            </p>
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-balance">
              Fast Food Without the Freezer Shortcut.
            </h1>
            <p className="text-base sm:text-lg text-[var(--fo-cream)]/80 leading-relaxed">
              We built FOOD O’CLOCK for the generation that treats food as both fuel and culture. Between university lectures, midnight coding sprints, and weekend squad hangs, our kitchens run on fresh prep and unapologetic flavor.
            </p>
          </div>

          <div className="lg:col-span-6 rounded-2xl overflow-hidden aspect-[4/3] bg-black">
            <SafeImage
              src="/src/assets/images/team_kitchen_crew_1794861040122.jpg"
              alt="The three FOOD O'CLOCK founders and culinary directors standing inside their modern kitchen"
              loading="eager"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Three Brand Values */}
      <section
        aria-labelledby="values-heading"
        className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
      >
        <div className="space-y-2 mb-12">
          <p className="font-mono-tabular text-xs font-bold uppercase tracking-wider text-[var(--fo-orange)]">
            What Runs Our Kitchen
          </p>
          <h2
            id="values-heading"
            className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight"
          >
            Three Non-Negotiable Values
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {ABOUT_VALUES.map((val) => (
            <article
              key={val.number}
              className="p-7 rounded-2xl bg-white border border-[var(--fo-charcoal)]/12 space-y-4"
            >
              <span className="font-mono-tabular text-sm font-bold text-[var(--fo-orange)]">
                {val.number}.
              </span>
              <h3 className="font-display text-2xl font-bold tracking-tight">
                {val.title}
              </h3>
              <p className="text-sm sm:text-base text-[var(--fo-text-muted)] leading-relaxed">
                {val.summary}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Brand Timeline */}
      <section
        aria-labelledby="timeline-heading"
        className="bg-[var(--fo-surface-muted)] border-y border-[var(--fo-charcoal)]/12 py-16 sm:py-24"
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-2 mb-12">
            <p className="font-mono-tabular text-xs font-bold uppercase tracking-wider text-[var(--fo-orange)]">
              Milestones
            </p>
            <h2
              id="timeline-heading"
              className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight"
            >
              From One Flat-Top to Three Cities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BRAND_TIMELINE.map((milestone) => (
              <div
                key={milestone.year}
                className="p-6 rounded-2xl bg-white border border-[var(--fo-charcoal)]/12 space-y-3"
              >
                <span className="inline-block font-mono-tabular text-lg font-bold text-[var(--fo-charcoal)] bg-[var(--fo-lime)] px-3 py-1 rounded-lg">
                  {milestone.year}
                </span>
                <h3 className="font-display text-xl font-bold tracking-tight">
                  {milestone.title}
                </h3>
                <p className="text-sm text-[var(--fo-text-muted)] leading-relaxed">
                  {milestone.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        aria-labelledby="team-heading"
        className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div className="space-y-2">
            <p className="font-mono-tabular text-xs font-bold uppercase tracking-wider text-[var(--fo-orange)]">
              The Crew Behind the Clock
            </p>
            <h2
              id="team-heading"
              className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight"
            >
              Meet Our Kitchen Leads
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 text-sm font-bold text-[var(--fo-charcoal)] hover:text-[var(--fo-orange)] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>Say hello or join the crew</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TEAM_MEMBERS.map((member) => (
            <article
              key={member.name}
              className="p-7 rounded-2xl bg-[var(--fo-charcoal)] text-[var(--fo-cream)] space-y-4"
            >
              <div>
                <p className="font-mono-tabular text-xs uppercase text-[var(--fo-lime)]">
                  {member.role}
                </p>
                <h3 className="font-display text-2xl font-bold mt-1">
                  {member.name}
                </h3>
              </div>
              <p className="text-sm text-[var(--fo-cream)]/80 leading-relaxed">
                {member.bio}
              </p>
              <div className="pt-3 border-t border-white/15 text-xs">
                <span className="text-[var(--fo-cream)]/60">Go-to Order: </span>
                <span className="font-semibold text-[var(--fo-orange)]">
                  {member.specialty}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
