import { ButtonDemo } from "@/components_usage/Button/Button";
import { CardDemo } from "@/components_usage/Card/Card";
import { DropdownMenuDemo } from "./components_usage/DropdownMenu/DropdownMenu";
import { InputGroupTooltip } from "./components_usage/Input/Input";
import { DialogCloseButton } from "./components_usage/Dialog/Dialog";
import { Gap } from "./shared/Gap";
import { ModeToggle } from "./shared/ToggleTheme";

import EnemyHealthDisplayDemo from "@/components_usage/enemy-health-display_directory/enemy-health-display";
import HealthBarDemo from "@/components_usage/health-bar_directory/health-bar";
import VictoryScreenDemo from "@/components_usage/victory-screen_directory/victory-screen";

function App() {
  return (
    <div>
      <Gap size="xl" label="Переключатель темы" />
      <ModeToggle />
      <Gap label="1. Кнопка" />
      <ButtonDemo />
      <Gap label="2. Card" />
      <CardDemo />
      <Gap label="3. DropDown" />
      <DropdownMenuDemo />
      <Gap label="4. Input" />
      <InputGroupTooltip />
      <Gap label="5. Dialog" />
      <DialogCloseButton />
      <Gap label="6. 8bit Enemy Health" />
      <EnemyHealthDisplayDemo />
      <Gap label="7. 8bit Health Bar" />
      <HealthBarDemo />
      <Gap label="8. Victory Screen" />
      <VictoryScreenDemo />
    </div>
  );
}

export default App;
