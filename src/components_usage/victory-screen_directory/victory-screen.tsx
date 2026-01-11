import VictoryScreen from "@/components/ui/8bit/blocks/victory-screen";

export function VictoryScreenDemo() {
  const stats = [
    { id: 1, title: "XP Gained", stats: 1200 },
    { id: 2, title: "Gold", stats: 350 },
  ];

  const items = [
    { id: 1, name: "Rusty Sword", rarity: "common" as const },
    { id: 2, name: "Emerald Amulet", rarity: "rare" as const },
  ];

  const report = [
    { id: 1, title: "Enemy Slain", description: "Goblin Raider" },
  ];

  return (
    <div className="w-full max-w-2xl">
      <VictoryScreen
        itemsObtained={items}
        stats={stats}
        battleReport={report}
      />
    </div>
  );
}

export default VictoryScreenDemo;
