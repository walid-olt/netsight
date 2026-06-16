import Logo from "./Logo";
import NavLink from "./Navlink";

export default function Navigation() {
  return (
    <nav className="flex sticky top-0 z-9999 bg-background justify-between px-4 py-2 items-center ">
      <div>
        <NavLink href={"/"}>
          <Logo />
        </NavLink>
      </div>
      <div className="flex gap-x-4 text-muted-foreground">
        <NavLink href={"/"}>Home</NavLink>
        <NavLink href={"/products"}>products</NavLink>
      </div>
      <div>cart</div>
    </nav>
  );
}
