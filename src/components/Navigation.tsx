import Logo from "./Logo";
import NavLink from "./Navlink";

type Props = {
  children?: React.ReactNode;
};

export default function Navigation({ children }: Props) {
  return (
    <nav className="flex sticky top-0 z-50 bg-background justify-between px-4 py-2 items-center ">
      <div>
        <NavLink href={"/"}>
          <Logo />
        </NavLink>
      </div>
      <div className="flex gap-x-4 text-muted-foreground">
        <NavLink href={"/"}>Home</NavLink>
        <NavLink href={"/products"}>products</NavLink>
      </div>
      <div>{children}</div>
    </nav>
  );
}
