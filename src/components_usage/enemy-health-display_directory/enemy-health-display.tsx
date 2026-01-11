import EnemyHealthDisplay from "@/components/ui/8bit/enemy-health-display";

export function EnemyHealthDisplayDemo() {
  return (
    <div className="w-full max-w-md">
      <EnemyHealthDisplay
        enemyName="Goblin Raider"
        level={5}
        currentHealth={32}
        maxHealth={120}
        healthBarVariant="retro"
        healthBarColor="bg-red-500"
      />
    </div>
  );
}

export default EnemyHealthDisplayDemo;
