import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../../components/ui/button";
import { CirclePlus } from "lucide-react";
import Link from "next/link";

const Dashboard = () => {
  return (
    <section className={" container mx-auto"}>
      <div className={"flex flex-col p-4 md:p-8 space-y-12"}>
        <div className={"flex items-center justify-between"}>
          <h1 className={"text-3xl font-bold"}>Invoices</h1>
          <Button
            asChild
            variant={"default"}
            size={"sm"}
            className={"flex items-center gap-2"}
          >
            <Link href="/invoices/new">
              Add Invoice
              <CirclePlus className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>12.03.2023</TableCell>
              <TableCell className="font-medium">Acme Inc.</TableCell>
              <TableCell className="text-muted-foreground">
                0WnJ4@example.com
              </TableCell>
              <TableCell>
                <Badge variant={"destructive"} className="rounded-full">
                  PENDING
                </Badge>
              </TableCell>
              <TableCell className="text-right">$890</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </section>
  );
};
export default Dashboard;
