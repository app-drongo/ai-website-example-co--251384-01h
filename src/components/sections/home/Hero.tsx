'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Play } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_HERO = {
  badge: '☝ Limited Time Offer',
  title: 'Transform Your Business with',
  titleHighlight: 'Revolutionary Solutions',
  description:
    "Experience the power of cutting-edge technology that drives real results. Join thousands of successful businesses who've already made the switch.",
  features: [
    'Lightning-fast implementation',
    '24/7 premium support',
    '99.9% uptime guarantee',
    'Enterprise-grade security',
  ],
  primaryCTA: 'Start Free Trial',
  secondaryCTA: 'Watch Demo',
  primaryCTAHref: '/pricing',
  secondaryCTAHref: '#demo',
  imageUrl:
    'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1920&auto=format&fit=crop',
  imageAlt: 'Business dashboard analytics',
  statsLabel1: 'Success Rate',
  statsValue1: '98% Growth',
  statsLabel2: 'Customer Satisfaction',
  statsValue2: '4.9/5 Stars',
} as const;

type HeroProps = Partial<typeof DEFAULT_HERO>;

export default function Hero(props: HeroProps) {
  const config = { ...DEFAULT_HERO, ...props };
  const navigate = useSmartNavigation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="hero" className="relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-transparent to-yellow-500/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,0,0.1)_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-2 lg:gap-20 lg:py-32">
          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-red-500/30 bg-red-600/20 px-3 py-1.5 text-sm font-medium text-red-400">
              <span className="inline-block h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
              <span data-editable="badge">{config.badge}</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span data-editable="title">{config.title}</span>
              <span
                className="block bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent"
                data-editable="titleHighlight"
              >
                {config.titleHighlight}
              </span>
            </h1>

            <p
              className="mt-6 max-w-xl text-lg leading-relaxed text-gray-300"
              data-editable="description"
            >
              {config.description}
            </p>

            <ul className="mt-6 grid gap-3 text-sm text-gray-300 sm:grid-cols-2">
              {config.features.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-yellow-400" />
                  <span data-editable={`features[${idx}]`}>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="group px-7 text-base bg-red-600 hover:bg-red-700 text-white border-0"
                onClick={() => navigate(config.primaryCTAHref)}
                data-editable-href="primaryCTAHref"
                data-href={config.primaryCTAHref}
              >
                <span data-editable="primaryCTA">{config.primaryCTA}</span>
                <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                onClick={() => navigate(config.secondaryCTAHref)}
                data-editable-href="secondaryCTAHref"
                data-href={config.secondaryCTAHref}
              >
                <Play className="mr-2 size-5" />
                <span data-editable="secondaryCTA">{config.secondaryCTA}</span>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-red-500/30 bg-gray-900 shadow-2xl shadow-red-500/20">
              <div className="aspect-[16/10] relative">
                <Image
                  src={config.imageUrl}
                  alt={config.imageAlt}
                  fill
                  className="object-cover"
                  priority
                  data-editable-src="imageUrl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="absolute left-4 top-4 rounded-full bg-black/80 border border-yellow-400/50 px-3 py-1 text-xs font-medium shadow text-yellow-400">
                <span data-editable="imageAlt">{config.imageAlt}</span>
              </div>
            </div>

            <div className="absolute -right-6 -top-6 hidden w-36 rounded-xl border border-red-500/30 bg-black/90 p-3 shadow-xl shadow-red-500/20 sm:block">
              <p className="text-xs text-gray-400" data-editable="statsLabel1">
                {config.statsLabel1}
              </p>
              <p className="text-sm">
                <span className="font-semibold text-red-400" data-editable="statsValue1">
                  {config.statsValue1}
                </span>
              </p>
            </div>
            <div className="absolute -left-6 -bottom-6 hidden w-36 rounded-xl border border-yellow-400/30 bg-black/90 p-3 shadow-xl shadow-yellow-400/20 sm:block">
              <p className="text-xs text-gray-400" data-editable="statsLabel2">
                {config.statsLabel2}
              </p>
              <p className="text-sm">
                <span className="font-semibold text-yellow-400" data-editable="statsValue2">
                  {config.statsValue2}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
