import { Button } from "@headlessui/react";

export default function BaseButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Button className="inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-1.5 text-sm/6 font-semibold text-on-primary shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-on-primary/80 data-hover:bg-primary/80 data-open:bg-primary/80">
      {children}
    </Button>
  );
}
