import { Button } from "@/components/ui/button";
import { AiFillPlusCircle } from "react-icons/ai";
import FilterDropdown from "./FilterDropdown";

type HeaderProps = {
  count: number;
};

export default function Header({ count }: HeaderProps) {
  return (
    <header className="flex items-center justify-between">
      <section>
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Invoices
        </h1>
        <p className="text-sm tracking-wider text-gray-200">
          <span className="hidden sm:block">
            There are {count} total invoices
          </span>
          <span className="sm:hidden">{count} invoices</span>
        </p>
      </section>

      <section className="flex gap-x-4">
        <FilterDropdown />
        <Button className="rounded-full py-6 font-bold">
          <AiFillPlusCircle className="mr-4 rounded-full text-3xl" />
          New <span className="ml-1 hidden sm:block"> Invoice</span>
        </Button>
      </section>
    </header>
  );
}
