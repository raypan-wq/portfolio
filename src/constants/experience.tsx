import {
  BentoSkeleton,
  BentoSkeletonWide,
  type BentoGridItemProps,
} from "@/components/BentoGrid";
import { getImage } from "astro:assets";
import {
  FaBrandsGithub,
} from "solid-icons/fa";
import { FiExternalLink } from "solid-icons/fi";
import { ImLibrary } from "solid-icons/im";
import rspack from "../assets/rspack.svg";
import accenture from "../assets/accenture.svg";
import hyperledger from "../assets/hyperledger.svg";
import { SiChinasouthernairlines, SiKubernetes } from "solid-icons/si";

// Optimise images at build time
const rspackSvg = await getImage({
  src: rspack,
});
const accentureSvg = await getImage({
  src: accenture,
});
const hyperledgerSvg = await getImage({
  src: hyperledger,
});

export const publications: BentoGridItemProps[] = [
  {
    header: (
      <ImLibrary class="w-24 h-24 m-auto opacity-70 group-hover/bento:rotate-3 transition-all" />
    ),
    title: "Kubernetes in IT Administration and Serverless Computing: An Empirical Study and Research Challenges",
    icon: (
      <a
        href="https://link.springer.com/article/10.1007/s11227-021-03982-3"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Github repository for Expense Tracker"
      >
        <FaBrandsGithub class="hover:opacity-65 transition-opacity" />
      </a>
    ),
    description:
      "A desktop and iOS expense tracking application built with Tauri and SolidJS. Features include transaction management, recurring payments, financial analytics with interactive charts, automated processing via clipboard commands, and local SQLite storage with backup/restore functionality.",
    class: "bg-neutral-50 sm:col-span-2",
    },
    {
    header: (
      <SiKubernetes
      size={72}
      class="m-auto opacity-70 group-hover/bento:rotate-3 transition-all rounded-md"
      color="#326CE5"
      />
    ),
    title: "On Rapid Application Deployment with Kubernetes",
    icon: (
      <a
        href="https://dl.acm.org/doi/10.1145/3700523.3700538"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Github repository for portfolio"
      >
        <FaBrandsGithub class="hover:opacity-65 transition-opacity" />
      </a>
    ),
    description:
      "The current portfolio you are viewing. A minimalist design with a focus on responsive UI.  Built with Astro, Solidjs and Shadcn UI.",
    class: "bg-neutral-50",
  },
  BentoSkeleton,
  {
    header: (
      <img
        class="group-hover/bento:scale-105 transition-transform h-[96px]"
        src={hyperledgerSvg.src}
        alt="hyperledger fabric Logo"
      />
    ),
    title: "Operating ZKPs on Blockchain: A Performance Analysis Based on Hyperledger Fabric",
    icon: (
      <a
        href="https://ieeexplore.ieee.org/document/10646455"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Github repository for Rustscript"
      >
        <FaBrandsGithub class="hover:opacity-65 transition-opacity" />
      </a>
    ),
    description:
      "Developed a statically typed, compiled programming language combining Rust's syntax with the simplicity of TypeScript and Go with core features including primitive data types, higher-order functions, type checking, concurrency and garbage collector. The language to compile code into bytecode, akin to Java, followed by execution on a virtual machine.",
    class: "bg-neutral-50 sm:col-span-2",
  },
];

export const openSourceContrib: BentoGridItemProps[] = [
  {
    header: (
      <img
        src={rspackSvg.src}
        alt="Rspack logo"
        width={96}
        height={96}
        class="m-auto group-hover/bento:rotate-3 transition-all rounded-md"
      />
    ),
    title: "Rspack",
    icon: (
      <a
        href="https://www.rspack.dev/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Rspack website"
      >
        <FiExternalLink class="hover:opacity-65 transition-opacity" />
      </a>
    ),
    description:
      "Made contribution to Webpack alignments and Javascript to Typescript migrations.",
    class: "bg-neutral-50",
  },
  BentoSkeletonWide,
];

export const professionalExperiences: BentoGridItemProps[] = [
  {
    header: (
      <img
        class="group-hover/bento:scale-105 transition-transform h-[96px]"
        src={accentureSvg.src}
        alt="Accenture Logo"
      />
    ),
    title: "Senior Software Engineer Analyst @ Accenture",
    icon: (
      <a
        href="https://www.accenture.com/hk-en"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Accenture website"
      >
        <FiExternalLink />
      </a>
    ),
    description: (
      <ul class="list-inside list-disc">
        <li>
          {
            "Enhanced on-call efficiency with AI-driven Oncall Agent features, reducing incident analysis time for Wallet services."
          }
        </li>
        <li>
          {
            "Optimized core RPC services by rewriting high-QPS handlers from Golang to Rust, achieving 50% resource savings and 30% latency reduction, projected to save $500K annually."
          }
        </li>
      </ul>
    ),
    class: "bg-neutral-50 sm:col-span-2",
    footer: (
      <small class="text-xs text-muted-foreground">09/2023 - Present</small>
    ),
  },
  BentoSkeleton,
  BentoSkeleton,
  {
    header: (
      <img
        class="group-hover/bento:scale-105 transition-transform h-[96px]"
        src={accentureSvg.src}
        alt="Accenture Logo"
      />
    ),
    title: "Software Engineer Intern @ Accenture, Netherlands",
    icon: (
      <a
        href="https://www.accenture.com/nl-en"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="ByteDance website"
      >
        <FiExternalLink />
      </a>
    ),
    description: (
      <ul class="list-inside list-disc">
        <li>
          {
            "Led a cross-functional team collaboration to migrate Money-Platform from Webpack to Rspack, reducing bundling time by 50%."
          }
        </li>
        <li>
          {
            "Developed on whitescreen alarms and alarm handling system, streamlined the process of handling alarms. The whitescreen alarm caught and report a major bug released to production."
          }
        </li>
      </ul>
    ),
    class: "bg-neutral-50 sm:col-span-2",
    footer: (
      <small class="text-xs text-muted-foreground">06/2022 - 12/2022</small>
    ),
  },
  {
    header: (
      <SiChinasouthernairlines
        size={72}
        class="m-auto opacity-70 group-hover/bento:rotate-3 transition-all rounded-md"
      />
    ),
    title: "Software Developer Intern @ China Southern Airlines, Netherlands",
    icon: (
      <a
        href="https://www.csair.com/hk/en/index.shtml"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="CSA website"
      >
        <FiExternalLink />
      </a>
    ),
    description:
      "Reduced backend response time by 5 times by porting a Case Management System backend from Ruby on Rails to Golang. Features ported include RBAC, Auth, 2FA and Masquerading.",
    class: "bg-neutral-50 sm:col-span-2",
    footer: (
      <small class="text-xs text-muted-foreground">10/2021 - 12/2021</small>
    ),
  },
  BentoSkeleton,
];
