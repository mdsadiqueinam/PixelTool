import { Tool } from "@/types";

const tools: Tool[] = [
  {
    name: "Passport Photo Generator",
    description: "Generate professional passport photos with ease.",
    icon: "📸",
    path: "/passport-photo-generator",
  },
];

export default function HomeRoute() {
  return (
    <main className="relative overflow-hidden grow flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Pixel Tool</h1>
      <p className="text-lg text-slate-400 mb-6">
        Select a tool from the list below to get started.
      </p>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tools.map((tool) => (
            <ToolCard key={tool.path} tool={tool} />
          ))}
        </div>
      </div>
    </main>
  );
}
