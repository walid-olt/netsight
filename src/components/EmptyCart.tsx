import { Cart } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

export default function EmptyOutline() {
  return (
    <Empty className="border border-dashed">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <HugeiconsIcon icon={Cart} />
        </EmptyMedia>
        <EmptyTitle>Your cart is currently empty</EmptyTitle>
        <EmptyDescription>Try adding some items</EmptyDescription>
      </EmptyHeader>
    </Empty>
  );
}
