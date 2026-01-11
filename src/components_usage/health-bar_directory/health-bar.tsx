import HealthBar from "@/components/ui/8bit/health-bar";

export function HealthBarDemo() {
  return (
    <div className="w-full max-w-md">
      <div className="mb-4">Player Health</div>
      <HealthBar value={75} variant="retro" />
    </div>
  );
}

export default HealthBarDemo;
