import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow, 
} from "@/components/ui/table"
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CirclePlus } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex flex-col justify-center h-full text-center gap-6 max-w-5xl mx-auto my-12">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">
            Invoices
        </h1>
        <p>
            <Button className="inline-flex gap-2" variant="ghost" asChild>
                <Link href={"/invoices/new"}>
                <CirclePlus className="h-4 w-4 gap-2" />
                Create Invoice
                </Link>
            </Button>
        </p>
      </div>
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>

                <TableHead className="w-[100px] p-4">
                    Date
                </TableHead>

                <TableHead className="p-4">
                    Customer
                </TableHead>
                
                <TableHead className="p-4">
                    Email
                </TableHead>
                
                <TableHead className="text-center p-4">
                    Status
                </TableHead>
                
                <TableHead className="text-right p-4">
                    Value
                </TableHead>

                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>

                <TableCell  className="font-medium text-left p-4">
                    <span className="font-semibold">
                    06/15/2025
                    </span>
                </TableCell>

                <TableCell  className="text-left p-4">
                    <span className="font-semibold">
                    Homer Simpson
                    </span>
                </TableCell>

                <TableCell  className="text-left p-4">
                    <span>
                    homer.simpson@gmail.com
                    </span>
                </TableCell>
                
                <TableCell  className="text-center p-4">
                    <Badge className="rounded-full">
                        Open
                    </Badge>
                </TableCell>

                <TableCell  className="text-right p-4">
                    <span className="font-semibold">
                    $250.00
                    </span>
                </TableCell>

                </TableRow>
            </TableBody>
        </Table>
    </main>
  );
}