import { Footer } from '@/components/Footer';
import { Quote } from '@/components/Quote';
import Project from '@/components/templates/Project';
import Work from '@/components/templates/Work';
import { PROJECTS, WORKS } from '@/data/data';
import { getProjects, getWorks } from '@/data/requests';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: App,
  loader: async () => {
    // Uncomment to use server functions
    // const works = await getWorks();
    // const projects = await getProjects();
    const works = WORKS;
    const projects = PROJECTS;
    return { works, projects };
  },
});

function App() {
  const { works, projects } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-slate-800 flex flex-col gap-4 p-4">
      <section className="relative py-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="relative max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-6 mb-6">
            <img
              src="/profile_pic.jpeg"
              alt="Profile pic"
              className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
            />
            <h1 className="text-6xl md:text-7xl font-black text-white [letter-spacing:-0.08em]">
              Evan Teague
            </h1>
          </div>
          <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
            Senior Software Engineer | Full Stack Web Developer | Scrum master
          </p>
        </div>
      </section>
      <section className="">
        <Quote>
          Whenever someone asks my mom about what I do for a living, she tends
          to begin by telling the story about how when I was a baby in the
          doctor's office, I was either taking apart legos or looking under a
          chair to see how the pieces connect together. I guess I have always
          been an engineer at heart!
        </Quote>
      </section>
      <section className="flex flex-col gap-4">
        {works.map((work) => (
          <Work
            key={work.id}
            title={work.title}
            positions={work.positions}
            timeLine={work.timeLine}
            image={work.image}
          />
        ))}
      </section>
      <section className="">
        <Quote>
          My focus as a Senior Software Engineer is on full stack web
          development. I have overseen the development of large scale, user
          facing applications with hundreds of thousands of users, guiding
          various teams with best frontend practices.
        </Quote>
      </section>
      <section className="flex flex-col gap-4">
        {projects.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            link={project.link}
            image={project.image}
            gitHub={project.gitHub}
          />
        ))}
      </section>
      <section className="">
        <Quote>
          Beyond coding, I've embraced mentorship and leadership. Part of
          growing up is realizing when you need to support others instead of
          just yourself, and nothing brings me more joy than seeing others excel
          in their careers.
        </Quote>
      </section>
      <Footer />
    </div>
  );
}
