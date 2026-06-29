import { Tool } from "@/types";

export default function ToolCard({ tool }: { tool: Tool }) {
  return (
    <div className="bg-surface-container p-4 rounded-xl hover:bg-surface-container/50 transition-colors">
      <div className="flex items-center gap-3">
        <div className="text-2xl">{tool.icon}</div>
        <div>
          <h3 className="font-bold text-lg">{tool.name}</h3>
          <p className="text-sm text-slate-400">{tool.description}</p>
        </div>
      </div>
    </div>
  );
}
