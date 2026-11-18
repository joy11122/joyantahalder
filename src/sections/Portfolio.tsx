import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Github, Globe2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: '01',
    title: 'LOVESONE',
    category: 'Multi-vendor Pet Marketplace',
    description:
      'A Bangladesh-focused pet marketplace connecting customers, sellers and administrators through product discovery, secure checkout, vendor workspaces and order management.',
    image: '/projects/lovesone-preview.svg',
    imageAlt: 'Illustrative visual preview of the LOVESONE pet marketplace storefront',
    technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Auth.js', 'SSLCommerz'],
    liveUrl: 'https://lovesone.vercel.app/',
    githubUrl: 'https://github.com/joy11122/lovesone',
  },
  {
    number: '02',
    title: 'MULTI-SALON',
    category: 'Salon Management & Booking Platform',
    description:
      'A multi-tenant salon platform with independent salon workspaces, staff and service management, real-time slot protection, and customer appointment booking.',
    image: '/projects/multi-salon-preview.svg',
    imageAlt: 'Illustrative visual preview of the Multi-Salon booking platform',
    technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Auth.js', 'Tailwind CSS'],
    liveUrl: 'https://multi-salon-pi.vercel.app/',
    githubUrl: 'https://github.com/joy11122/multi-salon',
  },
  {
    number: '03',
    title: 'AI ANALYTICS SAAS',
    category: 'Natural-language Database Analytics',
    description:
      'An AI-powered analytics workspace that lets users connect PostgreSQL, MySQL and MongoDB, ask questions in natural language, inspect safe read-only results and export reports.',
    image: '/projects/ai-analytics-preview.svg',
    imageAlt: 'Illustrative visual preview of the AI analytics SaaS dashboard',
    technologies: ['Next.js', 'TypeScript', 'OpenAI', 'MongoDB', 'Stripe'],
    liveUrl: 'https://ai-analytics-saas-mu.vercel.app/',
    githubUrl: 'https://github.com/joy11122/database-querry',
  },
];

const Portfolio = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!projectsRef.current) return;

      const cards = projectsRef.current.querySelectorAll<HTMLElement>('.project-card');
      gsap.fromTo(
        cards,
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: projectsRef.current,
            start: 'top 82%',
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative overflow-hidden py-24 sm:py-28 lg:py-32"
      aria-labelledby="portfolio-heading"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-topaz/30 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-topaz/30 to-transparent" />

      <div className="section-padding relative z-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.22em] text-topaz">
                Selected work
              </span>
              <h2
                id="portfolio-heading"
                className="font-display text-fluid-3xl font-bold text-white"
              >
                Recent{' '}
                <span className="bg-gradient-to-r from-topaz to-golden bg-clip-text text-transparent">
                  Projects
                </span>
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-7 text-white/60 sm:text-base">
              A closer look at the products I have been designing and building — from commerce
              and booking workflows to AI-powered data tools.
            </p>
          </div>

          <div ref={projectsRef} className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.number}
                className="project-card group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] transition duration-500 hover:-translate-y-1 hover:border-topaz/40 hover:bg-white/[0.055]"
              >
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block aspect-[16/10] overflow-hidden bg-black/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-topaz"
                  aria-label={`Open live ${project.title} project`}
                >
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    width="1200"
                    height="750"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                  />
                  <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/55 px-3 py-1 text-[11px] font-semibold tracking-[0.16em] text-white/90 backdrop-blur">
                    PROJECT {project.number} · VISUAL PREVIEW
                  </span>
                  <span className="absolute bottom-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-topaz text-black shadow-lg transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                    <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                  </span>
                </a>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-topaz">
                    {project.category}
                  </p>
                  <h3 className="mb-3 font-display text-2xl font-bold tracking-tight text-white">
                    {project.title}
                  </h3>
                  <p className="mb-6 flex-1 text-sm leading-7 text-white/65">
                    {project.description}
                  </p>

                  <ul className="mb-6 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
                    {project.technologies.map((technology) => (
                      <li
                        key={technology}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-medium text-white/70"
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap items-center gap-3 border-t border-white/10 pt-5">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-topaz to-golden px-4 py-2.5 text-sm font-semibold text-black transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-topaz focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                    >
                      <Globe2 className="h-4 w-4" aria-hidden="true" />
                      Live demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-topaz/60 hover:text-topaz focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-topaz"
                    >
                      <Github className="h-4 w-4" aria-hidden="true" />
                      Source code
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://github.com/joy11122?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/75 transition hover:border-topaz/50 hover:text-topaz focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-topaz"
            >
              Explore all repositories
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
