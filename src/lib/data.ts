import type { LucideIcon } from "lucide-react";
import { Building2, FlaskConical, Globe, Rocket, User } from "lucide-react";

export interface Zone {
  id: string;
  label: string;
  tagline: string;
  route: string;
  Icon: LucideIcon;
  color: string;
  position: { x: number; y: number };
}

export const zones: Zone[] = [
  {
    id: "projects",
    label: "Projects City",
    tagline: "Projets clients & études de cas",
    route: "/projects",
    Icon: Building2,
    color: "#22d3ee",
    position: { x: 56, y: 13 },
  },
  {
    id: "apps",
    label: "Apps Station",
    tagline: "SaaS & applications produit",
    route: "/apps",
    Icon: Rocket,
    color: "#8b5cf6",
    position: { x: 80, y: 32 },
  },
  {
    id: "seo",
    label: "SEO District",
    tagline: "SEO local & sites vitrines",
    route: "/seo",
    Icon: Globe,
    color: "#10b981",
    position: { x: 10, y: 44 },
  },
  {
    id: "lab",
    label: "Lab Zone",
    tagline: "IA, prototypes & expérimentations",
    route: "/lab",
    Icon: FlaskConical,
    color: "#f59e0b",
    position: { x: 62, y: 68 },
  },
  {
    id: "about",
    label: "About Base",
    tagline: "Parcours, vision & contact",
    route: "/about",
    Icon: User,
    color: "#ec4899",
    position: { x: 22, y: 76 },
  },
];

export const connections: [string, string][] = [
  ["projects", "apps"],
  ["projects", "seo"],
  ["seo", "about"],
  ["lab", "apps"],
  ["lab", "about"],
];
