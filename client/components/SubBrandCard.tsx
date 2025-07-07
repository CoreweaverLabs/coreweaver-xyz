import { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface SubBrandCardProps {
  name: string;
  tagline: string;
  description: string;
  icon: ReactNode;
  url: string;
  color: string;
  features: string[];
}

export function SubBrandCard({
  name,
  tagline,
  description,
  icon,
  url,
  color,
  features,
}: SubBrandCardProps) {
  return (
    <Card className="bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50 transition-all duration-300 group overflow-hidden">
      <CardHeader className="pb-4">
        <div
          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-white`}
        >
          {icon}
        </div>
        <CardTitle className="text-xl text-white group-hover:text-cyan-400 transition-colors">
          {name}
        </CardTitle>
        <CardDescription className="text-slate-400">{tagline}</CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-slate-300 text-sm mb-4 leading-relaxed">
          {description}
        </p>
        <div className="space-y-2 mb-6">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
              <span className="text-xs text-slate-400">{feature}</span>
            </div>
          ))}
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="w-full text-slate-300 hover:text-white hover:bg-slate-700/50"
          asChild
        >
          <a href={`https://${url}`} target="_blank" rel="noopener noreferrer">
            Visit {url}
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
