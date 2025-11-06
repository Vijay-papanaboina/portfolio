import {
  SiNodedotjs,
  SiExpress,
  SiApachekafka,
  SiPostgresql,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiVite,
  SiVuedotjs,
  SiSocketdotio,
  SiSupabase,
  SiDocker,
  SiKubernetes,
  SiMongodb,
  SiRedis,
  SiCloudflare,
  SiGithubactions,
  SiPrisma,
  SiDrizzle,
  SiWebrtc,
  SiReactquery,
  SiShadcnui,
  SiReactrouter,
  SiChakraui,
  SiSequelize,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { RiFirebaseFill } from "react-icons/ri";
import type { IconType } from "react-icons";

interface TechIcon {
  icon: IconType;
  color: string;
}

export const techIconMap: Record<string, TechIcon> = {
  "Node.js": { icon: SiNodedotjs, color: "#339933" }, //hexcode: #339933
  Express: { icon: SiExpress, color: "#000000" }, //hexcode: #000000
  "Apache Kafka": { icon: SiApachekafka, color: "#231F20" }, //hexcode: #231F20
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" }, //hexcode: #4169E1
  React: { icon: SiReact, color: "#61DAFB" }, //hexcode: #61DAFB
  "React 19": { icon: SiReact, color: "#61DAFB" }, //hexcode: #61DAFB
  TypeScript: { icon: SiTypescript, color: "#3178C6" }, //hexcode: #3178C6
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" }, //hexcode: #06B6D4
  Vite: { icon: SiVite, color: "#646CFF" }, //hexcode: #646CFF
  Vue: { icon: SiVuedotjs, color: "#4FC08D" }, //hexcode: #4FC08D
  "Socket.io": { icon: SiSocketdotio, color: "#010101" }, //hexcode: #010101
  Firebase: { icon: RiFirebaseFill, color: "#eca115" }, //hexcode:#eca115
  Supabase: { icon: SiSupabase, color: "#3ECF8E" }, //hexcode: #3ECF8E
  Docker: { icon: SiDocker, color: "#2496ED" }, //hexcode: #2496ED
  Kubernetes: { icon: SiKubernetes, color: "#326CE5" }, //hexcode: #326CE5
  MongoDB: { icon: SiMongodb, color: "#47A248" }, //hexcode: #47A248
  Redis: { icon: SiRedis, color: "#DC382D" }, //hexcode: #DC382D
  "Cloudflare Workers": { icon: SiCloudflare, color: "#F38020" }, //hexcode: #F38020
  "Cloudflare R2": { icon: SiCloudflare, color: "#F38020" }, //hexcode: #F38020
  "GitHub Actions": { icon: SiGithubactions, color: "#2088FF" }, //hexcode: #2088FF
  Prisma: { icon: SiPrisma, color: "#2D3748" }, //hexcode: #2D3748
  AWS: { icon: FaAws, color: "#FF9900" }, //hexcode: #FF9900
  "React Query": { icon: SiReactquery, color: "#FF4154" }, //hexcode: #FF4154
  "shadcn/ui": { icon: SiShadcnui, color: "#0ea5e9" }, //hexcode: #0ea5e9
  "Drizzle ORM": { icon: SiDrizzle, color: "#008000" }, //hexcode: #008000
  "React Router": { icon: SiReactrouter, color: "#CA4245" }, //hexcode: #FF0000
  WebRTC: { icon: SiWebrtc, color: "#ff5252" }, //hexcode: #ff5252
  "Chakra UI": { icon: SiChakraui, color: "#319795" }, //hexcode: #319795
  Sequelize: { icon: SiSequelize, color: "#008000" }, //hexcode: #008000
};
