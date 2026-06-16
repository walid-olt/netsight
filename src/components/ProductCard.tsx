import { Bookmark, ExternalLink, Plus } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatter } from "@/lib/utils";
import type { Product } from "@/types/";

type Props = {
  product: Product;
};

export default function ProjectCard({ product }: Props) {
  const { title, brand, primary_category, price, product_type, slug } = product;
  return (
    <Card className="relative w-full ">
      <Image
        src={`https://picsum.photos/seed/${slug}/200/300`}
        alt="Event cover"
        height={300}
        width={200}
        className="h-48 w-full object-cover"
      />
      <CardHeader>
        <CardAction>
          <Badge variant={"outline"}>{formatter.formatCurrency(price)}</Badge>
        </CardAction>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{brand}</CardDescription>
      </CardHeader>
      <CardContent className="flex gap-x-2 mt-auto">
        <Badge variant="secondary">{primary_category}</Badge>

        <Badge variant="secondary">{product_type}</Badge>
      </CardContent>
      <CardFooter className="mt-auto">
        <ButtonGroup className="[&_button]:cursor-pointer">
          <ButtonGroup>
            <Button variant={"secondary"}>
              <HugeiconsIcon icon={Bookmark} />
            </Button>
          </ButtonGroup>
          <ButtonGroup className="w-full">
            <Button>
              <HugeiconsIcon icon={Plus} />
              add to cart
            </Button>
            <Button
              variant={"secondary"}
              nativeButton={false}
              render={
                <Link href={`/products/${slug}`}>
                  details <HugeiconsIcon icon={ExternalLink} />
                </Link>
              }
            ></Button>
          </ButtonGroup>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
