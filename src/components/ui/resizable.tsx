import { GripVerticalIcon } from "lucide-react";

import { cn } from "@/lib/utils";

// Fallback stub implementations for environments where react-resizable-panels
// may not expose the same named exports. These provide basic layout so the
// UI remains usable without the full library API.
function ResizablePanelGroup({ className, children, ...props }: any) {
  return (
    <div
      data-slot="resizable-panel-group"
      className={cn("flex h-full w-full", className)}
      {...props}
    >
      {children}
    </div>
  );
}

function ResizablePanel({ children, ...props }: any) {
  return (
    <div data-slot="resizable-panel" {...props}>
      {children}
    </div>
  );
}

function ResizableHandle({
  withHandle,
  className,
  ...props
}: any & { withHandle?: boolean }) {
  return (
    <div
      data-slot="resizable-handle"
      className={cn(
        "bg-border relative flex w-px items-center justify-center",
        className
      )}
      {...props}
    >
      {withHandle && (
        <div className="bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border">
          <GripVerticalIcon className="size-2.5" />
        </div>
      )}
    </div>
  );
}

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
