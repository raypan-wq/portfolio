import {
  BentoSkeleton,
  BentoSkeletonWide,
  type BentoGridItemProps,
} from "@/components/BentoGrid";
import { getImage } from "astro:assets";
import { SiIeee, SiAcm } from "solid-icons/si";
import { AiOutlineLink } from "solid-icons/ai";
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
        <AiOutlineLink class="hover:opacity-65 transition-opacity" />
      </a>
    ),
    description:
      "Explored the evolution of containerization and serverless computing, focusing on Kubernetes as a key container orchestration platform and examining its potential for improving application development efficiency and security.",
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
        <SiAcm class="hover:opacity-65 transition-opacity" />
      </a>
    ),
    description:
      "Explored Kubernetes as a powerful container orchestration tool, demonstrating how it enables rapid application deployment through a comprehensive CI/CD pipeline and advanced container management techniques.",
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
        <SiIeee class="hover:opacity-65 transition-opacity" />
      </a>
    ),
    description:
      "Examined the performance implications of integrating zero-knowledge proofs (ZKPs) into Hyperledger Fabric, revealing significant performance overhead while maintaining user privacy in blockchain transactions.",
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
            "MTR Malls"
          }
        </li>
        <li>
          {
            "MTR · Care App"
          }
        </li>
        <li>
          {
            "High Speed Rail App"
          }
        </li>
        <li>
          {
            "MTR Mobile App (MTR Mobile Badge System)"
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
            "Designed a scalable blockchain network using Hyperledger Fabric."
          }
        </li>
        <li>
          {
            "Streamlined design-to-code workflows by implementing automated Azure DevOps CI/CD pipelines, improving deployment efficiency and system reliability."
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
      "Developed a Python automation solution using xlwings, Pandas and NumPy to streamline daily logistics Excel reporting, reducing manual operations by 80%.",
    class: "bg-neutral-50 sm:col-span-2",
    footer: (
      <small class="text-xs text-muted-foreground">10/2021 - 12/2021</small>
    ),
  },
  BentoSkeleton,
];
