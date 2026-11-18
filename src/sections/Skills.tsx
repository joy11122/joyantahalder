import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const skillGroups = [
  {
    title: 'Frontend Development',
    description: 'Building responsive, accessible interfaces and polished product experiences.',
    skills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'HTML & CSS'],
  },
  {
    title: 'Backend & Data',
    description: 'Connecting interfaces to application logic, APIs, authentication and databases.',
    skills: ['Node.js', 'REST APIs', 'MongoDB', 'Mongoose', 'Authentication'],
  },
  {
    title: 'Product Engineering',
    description: 'Taking ideas from interface planning through implementation and deployment.',
    skills: ['UI/UX', 'Git & GitHub', 'Vercel', 'GSAP', 'SEO Fundamentals'],
  },
];

const tools = ['Figma', 'VS Code', 'Git', 'MongoDB Atlas', 'Vercel', 'Postman'];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.skill-card',
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 78%',
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-topaz/5 to-transparent" />

      <div className="relative z-10 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block text-topaz text-sm font-semibold tracking-widest uppercase mb-4">
              My Toolkit
            </span>
            <h2 className="font-display font-bold text-fluid-3xl text-white mb-6">
              Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-topaz to-golden">Technologies</span>
            </h2>
            <p className="text-white/60 text-fluid-base max-w-2xl mx-auto">
              Technologies and practices I use while building and improving real-world web products.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {skillGroups.map((group) => (
              <article key={group.title} className="skill-card card-glass h-full">
                <h3 className="font-display font-semibold text-xl text-white mb-3">
                  {group.title}
                </h3>
                <p className="text-white/60 leading-relaxed mb-6">
                  {group.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="glass px-3 py-2 rounded-full text-sm text-white/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 card-glass">
            <h3 className="font-display font-semibold text-lg text-white mb-5">
              Tools I Work With
            </h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="glass px-4 py-2 rounded-xl text-white/80 font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
