'use client';

/**
 * @editableContentMap
 * {
 *   "text-0": "badge",
 *   "text-1": "mainTitle",
 *   "text-2": "mainTitleHighlight",
 *   "text-3": "mainDescription",
 *   "text-4": "feature1Title",
 *   "text-5": "feature1Description",
 *   "text-6": "feature1Badge",
 *   "text-7": "feature2Title",
 *   "text-8": "feature2Description",
 *   "text-9": "feature2Badge",
 *   "text-10": "feature3Title",
 *   "text-11": "feature3Description",
 *   "text-12": "feature3Badge",
 *   "text-13": "feature4Title",
 *   "text-14": "feature4Description",
 *   "text-15": "feature4Badge",
 *   "text-16": "feature5Title",
 *   "text-17": "feature5Description",
 *   "text-18": "feature5Badge",
 *   "text-19": "feature6Title",
 *   "text-20": "feature6Description",
 *   "text-21": "feature6Badge",
 *   "text-22": "feature7Title",
 *   "text-23": "feature7Description",
 *   "text-24": "feature7Badge",
 *   "text-25": "feature8Title",
 *   "text-26": "feature8Description",
 *   "text-27": "feature8Badge",
 *   "text-28": "feature9Title",
 *   "text-29": "feature9Description",
 *   "text-30": "feature9Badge",
 *   "text-31": "ctaQuestion",
 *   "text-32": "primaryCTA",
 *   "link-0": "primaryCTAHref",
 *   "text-33": "secondaryCTA",
 *   "link-1": "secondaryCTAHref"
 * }
 */

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Zap,
  Shield,
  Smartphone,
  Globe,
  BarChart3,
  Palette,
  Code2,
  Headphones,
  Lock,
} from 'lucide-react';
import { useRouter } from 'next/navigation';

interface FeaturesProps {
  badge?: string;
  mainTitle?: string;
  mainTitleHighlight?: string;
  mainDescription?: string;
  feature1Title?: string;
  feature1Description?: string;
  feature1Badge?: string;
  feature2Title?: string;
  feature2Description?: string;
  feature2Badge?: string;
  feature3Title?: string;
  feature3Description?: string;
  feature3Badge?: string;
  feature4Title?: string;
  feature4Description?: string;
  feature4Badge?: string;
  feature5Title?: string;
  feature5Description?: string;
  feature5Badge?: string;
  feature6Title?: string;
  feature6Description?: string;
  feature6Badge?: string;
  feature7Title?: string;
  feature7Description?: string;
  feature7Badge?: string;
  feature8Title?: string;
  feature8Description?: string;
  feature8Badge?: string;
  feature9Title?: string;
  feature9Description?: string;
  feature9Badge?: string;
  ctaQuestion?: string;
  primaryCTA?: string;
  primaryCTAHref?: string;
  secondaryCTA?: string;
  secondaryCTAHref?: string;
}

export default function Features({
  badge = 'POWERFUL FEATURES',
  mainTitle = 'Revolutionary Tools That',
  mainTitleHighlight = 'Transform Your Business',
  mainDescription = 'Unleash the full potential of your business with our cutting-edge platform. Built for speed, designed for success, engineered for growth.',
  feature1Title = 'Lightning Performance',
  feature1Description = 'Experience blazing-fast speeds with our optimized infrastructure. Load times under 0.5 seconds guaranteed.',
  feature1Badge = 'SPEED',
  feature2Title = 'Military-Grade Security',
  feature2Description = 'Advanced encryption and multi-layer protection keeps your data fortress-level secure 24/7.',
  feature2Badge = 'SECURITY',
  feature3Title = 'Mobile Domination',
  feature3Description = 'Pixel-perfect responsive design that conquers every device and screen size flawlessly.',
  feature3Badge = 'MOBILE',
  feature4Title = 'Global Network',
  feature4Description = 'Worldwide CDN with 200+ edge locations delivers content at light speed anywhere on Earth.',
  feature4Badge = 'GLOBAL',
  feature5Title = 'Smart Analytics',
  feature5Description = 'AI-powered insights and real-time data visualization to supercharge your decision making.',
  feature5Badge = 'ANALYTICS',
  feature6Title = 'Brand Mastery',
  feature6Description = 'Complete visual control with unlimited customization options to match your unique brand.',
  feature6Badge = 'BRANDING',
  feature7Title = 'Developer Paradise',
  feature7Description = 'Robust APIs, comprehensive docs, and powerful tools that developers absolutely love.',
  feature7Badge = 'DEV TOOLS',
  feature8Title = 'Elite Support',
  feature8Description = 'Premium 24/7 expert support with average response time under 2 minutes.',
  feature8Badge = 'SUPPORT',
  feature9Title = 'Privacy Shield',
  feature9Description = 'Your data is yours forever. Zero tracking, zero selling, maximum privacy protection.',
  feature9Badge = 'PRIVACY',
  ctaQuestion = 'Ready to dominate your market?',
  primaryCTA = 'START FREE TRIAL',
  primaryCTAHref = '/pricing',
  secondaryCTA = 'SEE ALL FEATURES',
  secondaryCTAHref = '/#features',
}: FeaturesProps) {
  const router = useRouter();

  const handlePrimaryAction = () => {
    if (primaryCTAHref.startsWith('http://') || primaryCTAHref.startsWith('https://')) {
      window.open(primaryCTAHref, '_blank', 'noopener,noreferrer');
    } else {
      router.push(primaryCTAHref);
    }
  };

  const handleSecondaryAction = () => {
    if (secondaryCTAHref.startsWith('http://') || secondaryCTAHref.startsWith('https://')) {
      window.open(secondaryCTAHref, '_blank', 'noopener,noreferrer');
    } else {
      router.push(secondaryCTAHref);
    }
  };

  const features = [
    {
      icon: Zap,
      title: feature1Title,
      description: feature1Description,
      badge: feature1Badge,
    },
    {
      icon: Shield,
      title: feature2Title,
      description: feature2Description,
      badge: feature2Badge,
    },
    {
      icon: Smartphone,
      title: feature3Title,
      description: feature3Description,
      badge: feature3Badge,
    },
    {
      icon: Globe,
      title: feature4Title,
      description: feature4Description,
      badge: feature4Badge,
    },
    {
      icon: BarChart3,
      title: feature5Title,
      description: feature5Description,
      badge: feature5Badge,
    },
    {
      icon: Palette,
      title: feature6Title,
      description: feature6Description,
      badge: feature6Badge,
    },
    {
      icon: Code2,
      title: feature7Title,
      description: feature7Description,
      badge: feature7Badge,
    },
    {
      icon: Headphones,
      title: feature8Title,
      description: feature8Description,
      badge: feature8Badge,
    },
    {
      icon: Lock,
      title: feature9Title,
      description: feature9Description,
      badge: feature9Badge,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background via-muted/10 to-background relative overflow-hidden">
      {/* Bold Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(239,68,68,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(234,179,8,0.1),transparent_50%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Bold Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <Badge
            variant="outline"
            className="mb-6 px-6 py-3 text-sm font-bold border-primary/30 bg-primary/5"
          >
            <span data-editable="badge">{badge}</span>
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8 leading-tight">
            <span data-editable="mainTitle" className="text-foreground">
              {mainTitle}
            </span>
            <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mt-2">
              <span data-editable="mainTitleHighlight">{mainTitleHighlight}</span>
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed font-medium">
            <span data-editable="mainDescription">{mainDescription}</span>
          </p>
        </div>

        {/* Bold Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const titleId = `feature${index + 1}Title`;
            const descId = `feature${index + 1}Description`;
            const badgeId = `feature${index + 1}Badge`;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-2 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 bg-card/80 backdrop-blur-sm"
              >
                {/* Bold Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                <CardHeader className="relative pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="size-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300 border border-primary/20">
                      <Icon className="size-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <Badge
                      variant="secondary"
                      className="text-xs font-bold px-3 py-1 bg-accent/20 text-accent-foreground border border-accent/30"
                    >
                      <span data-editable={badgeId}>{feature.badge}</span>
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                    <span data-editable={titleId}>{feature.title}</span>
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed font-medium text-muted-foreground">
                    <span data-editable={descId}>{feature.description}</span>
                  </CardDescription>
                </CardContent>

                {/* Bold Hover Border */}
                <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300" />
              </Card>
            );
          })}
        </div>

        {/* Bold Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-card/50 to-muted/50 backdrop-blur-sm rounded-3xl p-12 border-2 border-primary/20">
          <p className="text-xl font-bold text-foreground mb-8">
            <span data-editable="ctaQuestion">{ctaQuestion}</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="px-10 py-4 text-lg font-bold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={handlePrimaryAction}
              data-editable-href="primaryCTAHref"
              data-href={primaryCTAHref}
            >
              <span data-editable="primaryCTA">{primaryCTA}</span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-10 py-4 text-lg font-bold border-2 border-primary/30 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 transform hover:scale-105"
              onClick={handleSecondaryAction}
              data-editable-href="secondaryCTAHref"
              data-href={secondaryCTAHref}
            >
              <span data-editable="secondaryCTA">{secondaryCTA}</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
