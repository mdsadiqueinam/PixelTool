import { Tool } from "@/types";
import { Link } from "react-router";

export default function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link
      to={tool.path}
      className="bg-surface-container p-4 rounded-xl hover:bg-surface-container/50 transition-colors cursor-pointer"
    >
      <div className="flex items-center gap-3">
        <div className="text-2xl">{tool.icon}</div>
        <div>
          <h3 className="font-bold text-lg">{tool.name}</h3>
          <p className="text-sm text-slate-400">{tool.description}</p>
        </div>
      </div>
    </Link>
  );
}
