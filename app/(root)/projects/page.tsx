'use client';

import { useEffect, useMemo, useState } from 'react';
import { currentProjectsData } from '@/data/currentProjects';
import { projectsData, type Project, type ProjectCategory } from '@/data/projects';

type FilterValue = 'All' | ProjectCategory;

type ProjectCardProps = {
  project: {
    id: string;
    name: string;
    description: string;
    techStack: string[];
    githubLink?: string;
    deploymentLink?: string;
    categories?: string[];
  };
  index: number;
  isVisible: boolean;
  statusLabel: string;
  statusClasses: string;
  dotClasses: string;
  overlayClasses: string;
};

function ProjectCard({
  project,
  index,
  isVisible,
  statusLabel,
  statusClasses,
  dotClasses,
  overlayClasses,
}: ProjectCardProps) {
  return (
    <div
      className={`project-card-enhanced group ${isVisible ? 'fade-in-up' : 'opacity-0'}`}
      style={{ animationDelay: `${(index + 1) * 0.08}s` }}
    >
      <div className="relative flex h-full flex-col">
        <div className="flex h-full flex-col p-8">
          <div className="mb-4 flex items-start justify-between gap-4">
            <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-blue-400">
              {project.name}
            </h3>
            <div className={`flex items-center space-x-2 text-sm font-semibold ${statusClasses}`}>
              <div className={`h-3 w-3 rounded-full ${dotClasses}`} />
              <span>{statusLabel}</span>
            </div>
          </div>

          {project.categories && project.categories.length > 0 && (
            <div className="mb-5 flex flex-wrap gap-2">
              {project.categories.map((category) => (
                <span
                  key={`${project.id}-${category}`}
                  className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-100"
                >
                  {category}
                </span>
              ))}
            </div>
          )}

          <p className="mb-6 text-base leading-relaxed text-gray-300">
            {project.description}
          </p>

          <div className="mb-6 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={`${project.id}-${tech}`} className="tech-item-enhanced">
                {tech}
              </span>
            ))}
          </div>

          <div className="relative z-10 mt-auto flex gap-4">
            {project.githubLink ? (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex-1"
              >
                <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                    clipRule="evenodd"
                  />
                </svg>
                View Code
              </a>
            ) : (
              <div className="btn-disabled flex-1">
                <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2V7a3 3 0 10-6 0v2h6z"
                    clipRule="evenodd"
                  />
                </svg>
                Private Repository
              </div>
            )}

            {project.deploymentLink && (
              <a
                href={project.deploymentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex-1"
              >
                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Live Demo
              </a>
            )}
          </div>
        </div>

        <div
          className={`pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${overlayClasses}`}
        />
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<FilterValue>('All');

  useEffect(() => {
    const timer = window.setTimeout(() => setIsVisible(true), 100);

    return () => window.clearTimeout(timer);
  }, []);

  const featuredProjects = useMemo(
    () =>
      [...projectsData]
        .filter((project) => project.featured)
        .sort((a, b) => (a.featuredRank ?? 999) - (b.featuredRank ?? 999)),
    []
  );

  const orderedProjects = useMemo(
    () =>
      [...projectsData].sort((a, b) => {
        const rankDiff = (a.featuredRank ?? 999) - (b.featuredRank ?? 999);
        return rankDiff !== 0 ? rankDiff : a.name.localeCompare(b.name);
      }),
    []
  );

  const categories = useMemo<FilterValue[]>(() => {
    const discovered = new Set<ProjectCategory>();

    orderedProjects.forEach((project) => {
      project.categories.forEach((category) => discovered.add(category));
    });

    return ['All', ...Array.from(discovered).sort()];
  }, [orderedProjects]);

  const filteredProjects = useMemo(
    () =>
      selectedCategory === 'All'
        ? orderedProjects
        : orderedProjects.filter((project) => project.categories.includes(selectedCategory)),
    [orderedProjects, selectedCategory]
  );

  const selectedCount =
    selectedCategory === 'All'
      ? orderedProjects.length
      : filteredProjects.length;

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="absolute inset-0">
        <div className="absolute left-20 top-20 h-72 w-72 animate-pulse rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-20 right-20 h-96 w-96 animate-pulse rounded-full bg-purple-500/10 blur-3xl delay-1000" />
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-green-500/5 blur-3xl" />
      </div>

      <section className="relative z-10 py-20">
        <div className="mb-16 text-center">
          <h1
            className={`mb-6 text-6xl font-bold text-white md:text-7xl ${isVisible ? 'fade-in-up' : 'opacity-0'}`}
          >
            Completed <span className="gradient-text">Projects</span>
          </h1>
          <p
            className={`mx-auto max-w-4xl px-4 text-xl text-gray-300 ${isVisible ? 'fade-in-up delay-200' : 'opacity-0'}`}
          >
            A categorized collection of projects across AI, analytics, systems,
            developer tooling, homelab infrastructure, and full-stack product work.
          </p>
        </div>
      </section>

      <section className="relative z-10 pb-16">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 inline-flex rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-100">
                Featured Work
              </p>
              <h2 className="text-4xl font-bold text-white md:text-5xl">
                Top Projects First
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isVisible={isVisible}
                statusLabel="Featured"
                statusClasses="text-amber-300"
                dotClasses="bg-amber-300 pulse-glow"
                overlayClasses="bg-gradient-to-r from-amber-500/10 to-pink-500/10"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 pb-20">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-10 flex flex-col gap-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-4xl font-bold text-white md:text-5xl">
                  Browse By <span className="gradient-text">Domain</span>
                </h2>
                <p className="mt-3 max-w-3xl text-lg text-gray-300">
                  Projects can belong to multiple categories, so filtering keeps the
                  list flexible as more work gets added.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-200 backdrop-blur-sm">
                Showing <span className="font-semibold text-white">{selectedCount}</span>{' '}
                project{selectedCount === 1 ? '' : 's'} in{' '}
                <span className="font-semibold text-cyan-200">{selectedCategory}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {categories.map((category) => {
                const isSelected = selectedCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                      isSelected
                        ? 'border-cyan-300/40 bg-cyan-300/20 text-white shadow-lg shadow-cyan-500/10'
                        : 'border-white/15 bg-white/5 text-gray-300 hover:border-white/30 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  isVisible={isVisible}
                  statusLabel={project.featured ? 'Featured' : 'Completed'}
                  statusClasses={project.featured ? 'text-amber-300' : 'text-green-400'}
                  dotClasses={project.featured ? 'bg-amber-300' : 'bg-green-400'}
                  overlayClasses={
                    project.featured
                      ? 'bg-gradient-to-r from-amber-500/10 to-pink-500/10'
                      : 'bg-gradient-to-r from-blue-500/10 to-purple-500/10'
                  }
                />
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <p className="text-2xl text-gray-400">No projects found in this category</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="relative z-10 pb-20">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-12 text-center">
            <h2
              className={`mb-4 text-4xl font-bold text-white md:text-5xl ${isVisible ? 'fade-in-up delay-300' : 'opacity-0'}`}
            >
              Currently <span className="gradient-text">Working On</span>
            </h2>
            <p
              className={`mx-auto max-w-2xl text-lg text-gray-300 ${isVisible ? 'fade-in-up delay-400' : 'opacity-0'}`}
            >
              Projects in active development and ongoing improvements
            </p>
          </div>

          <div className="mb-20 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {currentProjectsData.length > 0 ? (
              currentProjectsData.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  isVisible={isVisible}
                  statusLabel={project.status}
                  statusClasses="text-yellow-400"
                  dotClasses="animate-pulse bg-yellow-400"
                  overlayClasses="bg-gradient-to-r from-yellow-500/10 to-orange-500/10"
                />
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <p className="text-2xl text-gray-400">No current projects found</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </section>
  );
}
