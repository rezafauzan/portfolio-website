import {
  Network,
  Layers,
  Puzzle,
  Blocks,
  Scissors,
  LayoutGrid,
  RefreshCw,
  ShieldCheck,
  Globe,
  ShieldAlert,
  Bug,
  FlaskConical,
  TestTube,
  Server,
  Boxes,
  PanelsTopLeft,
  Search,
  Database,
  Cpu,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import {
  siGo,
  siGin,
  siPhp,
  siLaravel,
  siCodeigniter,
  siSpringboot,
  siQuarkus,
  siOpenjdk,
  siRabbitmq,
  siJsonwebtokens,
  siReact,
  siNextdotjs,
  siTypescript,
  siJavascript,
  siRedux,
  siTailwindcss,
  siBootstrap,
  siJquery,
  siVite,
  siPostgresql,
  siMysql,
  siRedis,
  siMongodb,
  siFirebase,
  siSupabase,
  siDocker,
  siGithubactions,
  siLinux,
  siVercel,
  siNetlify,
  siSwagger,
  siOwasp,
  siPostman,
  siChartdotjs,
  type SimpleIcon,
} from "simple-icons";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type TechIcon = SimpleIcon | LucideIcon;

// First match wins, so more specific patterns come before broader ones.
const iconRules: Array<[RegExp, TechIcon]> = [
  [/golang|go fiber|^go\b/i, siGo],
  [/^php/i, siPhp],
  [/^java \(/i, siOpenjdk],
  [/gin/i, siGin],
  [/laravel/i, siLaravel],
  [/codeigniter/i, siCodeigniter],
  [/spring/i, siSpringboot],
  [/quarkus/i, siQuarkus],
  [/rabbitmq/i, siRabbitmq],
  [/jwt/i, siJsonwebtokens],
  [/next/i, siNextdotjs],
  [/react/i, siReact],
  [/typescript/i, siTypescript],
  [/javascript/i, siJavascript],
  [/redux/i, siRedux],
  [/tailwind/i, siTailwindcss],
  [/bootstrap/i, siBootstrap],
  [/jquery/i, siJquery],
  [/vite/i, siVite],
  [/postgre/i, siPostgresql],
  [/mysql/i, siMysql],
  [/redis/i, siRedis],
  [/mongo/i, siMongodb],
  [/firebase/i, siFirebase],
  [/supabase/i, siSupabase],
  [/docker/i, siDocker],
  [/github actions/i, siGithubactions],
  [/linux/i, siLinux],
  [/vercel/i, siVercel],
  [/netlify/i, siNetlify],
  [/swagger|openapi/i, siSwagger],
  [/owasp/i, siOwasp],
  [/postman/i, siPostman],
  [/chart\.?js/i, siChartdotjs],
  [/squirrel|gorm/i, Database],
  [/middleware/i, Workflow],
  [/ssh|vps/i, Server],
  [/microservice/i, Boxes],
  [/microfrontend/i, PanelsTopLeft],
  [/seo/i, Search],
  [/rest/i, Network],
  [/clean architecture/i, Layers],
  [/dependency injection/i, Puzzle],
  [/solid/i, Blocks],
  [/yagni/i, Scissors],
  [/mvc/i, LayoutGrid],
  [/agile|scrum/i, RefreshCw],
  [/validation/i, ShieldCheck],
  [/cors/i, Globe],
  [/csrf/i, ShieldAlert],
  [/xss/i, Bug],
  [/unit testing/i, FlaskConical],
  [/testing/i, TestTube],
  [/microcontroller/i, Cpu],
];

function findIcon(name: string) {
  return iconRules.find(([pattern]) => pattern.test(name))?.[1];
}

// Brand colors like Next.js or Vercel are pure black, which disappears on the dark theme.
function isTooDark(hex: string) {
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b < 0.3;
}

function Icon({ icon, className }: { icon: TechIcon; className?: string }) {
  if ("path" in icon) {
    return (
      <svg
        role="img"
        aria-hidden="true"
        viewBox="0 0 24 24"
        className={cn("flex-none", className)}
        fill={isTooDark(icon.hex) ? "currentColor" : `#${icon.hex}`}
      >
        <path d={icon.path} />
      </svg>
    );
  }
  const LucideIconComponent = icon;
  return <LucideIconComponent aria-hidden="true" className={cn("flex-none text-cyan-200/80", className)} />;
}

export function TechBadge({ name, className }: { name: string; className?: string }) {
  const icon = findIcon(name);
  return (
    <Badge className={className}>
      {icon ? <Icon icon={icon} className="h-3.5 w-3.5" /> : null}
      {name}
    </Badge>
  );
}
