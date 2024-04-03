import Link from "next/link";
import { usePathname } from "next/navigation";

import { MenuButton } from "@/lib/components/Menu/components/MenuButton/MenuButton";

export const AssistantButton = (): JSX.Element => {
  const pathname = usePathname();
  const isSelected = pathname ? pathname.includes("/assistant") : false;

  return (
    <Link href={`/studio`}>
      <MenuButton
        label="Assistant"
        isSelected={isSelected}
        iconName="brainCircuit"
        type="open"
        color="primary"
      />
    </Link>
  );
};
