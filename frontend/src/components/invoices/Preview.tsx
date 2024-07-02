import { Invoice } from "@prisma/client";
import { Button } from "@/components/ui/button";
import { capitalize, cn } from "@/lib/utils";

import { GoDotFill } from "react-icons/go";
import { FaChevronRight } from "react-icons/fa";

type PreviewProps = {
  invoice: Invoice;
};

export default function Preview({ invoice }: PreviewProps) {
  const paymentDue = new Date(invoice.paymentDue).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <li className="block rounded-md border-2 border-secondary shadow-sm hover:border-primary">
      <Button variant="secondary" asChild>
        <a
          href=""
          className="flex h-full w-full flex-col justify-between px-4 py-8 sm:flex-row sm:items-center md:px-6"
        >
          <div className="flex w-full justify-between sm:flex-1 sm:justify-start sm:gap-3 md:gap-8">
            <p className="font-bold text-foreground">
              <span className="text-primary">#</span>
              {invoice.id}
            </p>
            <p className="hidden text-gray-200 sm:block">{paymentDue}</p>
            <p className="text-foreground">{invoice.clientName}</p>
          </div>

          <div className="mt-6 flex w-full items-center justify-between sm:mt-0 sm:max-w-[340px] sm:justify-end">
            <p className="flex flex-col text-lg font-bold text-foreground sm:mr-4 sm:text-base md:mr-10">
              <span className="text-xs text-gray-200 sm:hidden">
                {paymentDue}
              </span>
              &pound; {invoice.total}
            </p>

            <p
              className={cn(
                "flex w-[120px] items-center justify-center gap-x-2 rounded-md py-3 font-bold sm:max-w-[110px] sm:flex-1 md:max-w-[140px]",
                {
                  "bg-success/10 text-success": invoice.status === "paid",
                  "bg-pending/10 text-pending": invoice.status === "pending",
                  "bg-gray-200/10 text-gray-200": invoice.status === "draft",
                },
              )}
            >
              <GoDotFill />
              {capitalize(invoice.status)}
            </p>
            <div className="ml-5 hidden text-primary sm:block">
              <FaChevronRight size={16} />
            </div>
          </div>
        </a>
      </Button>
    </li>
  );
}
