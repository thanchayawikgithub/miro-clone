import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-4">
      <div>users only</div>
      <div>
        <UserButton />
      </div>
    </div>
  );
}
