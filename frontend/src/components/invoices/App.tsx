import { useQuery } from "@tanstack/react-query";
import Container from "../Container";
import Header from "./Header";
import Preview from "./Preview";

import { sleep } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

import { BASE_INVOICE_COUNT } from "@/lib/constants";

import { api } from "@/lib/api";

const getInvoices = async () => {
  await sleep(2000);

  const res = await api.invoices.$get();
  if (!res.ok) throw new Error("Failed to fetch invoices");
  const data = await res.json();

  return data.invoices;
};

export default function App() {
  const invoices = useQuery({
    queryKey: ["invoices"],
    queryFn: getInvoices,
  });

  if (invoices.isError) return <div>Error: {invoices.error.message}</div>;

  return (
    <main className="my-12">
      <Container>
        <Header count={invoices.data?.length || BASE_INVOICE_COUNT} />
        <ul className="mt-16 flex flex-col gap-4">
          {invoices.isPending
            ? Array.from({ length: BASE_INVOICE_COUNT }, (_, i) => (
                <Skeleton key={i} className="h-20 w-full" />
              ))
            : invoices.data.map((invoice) => (
                <Preview key={invoice.id} invoice={invoice} />
              ))}
        </ul>
      </Container>
    </main>
  );
}
