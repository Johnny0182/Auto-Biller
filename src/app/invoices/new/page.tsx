'use client'

import { SyntheticEvent, useState, startTransition } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createAction } from "@/app/actions";
import SubmitButton from "@/components/SubmitButton";



// This is the page for creating a new invoice

export default function Home() {
    const [state, setState] = useState('ready');
    async function handleOnSubmit(event: SyntheticEvent) {
        event.preventDefault();
        if (state === 'pending') return;
        setState('pending');
        const target = event.target as HTMLFormElement;
        
        startTransition(async () => {
            const formData = new FormData(target);
        await createAction(formData);
        console.log('hey');
    })
}
    return (
        <main className="flex flex-col justify-center h-full gap-6 max-w-5xl mx-auto my-12">
            <div className="flex justify-between">
                <h1 className="text-3xl font-bold">
                    Create A New Invoice
                </h1>
            </div>

            <form action={createAction} onSubmit={handleOnSubmit} className="grid gap-4 max-w-xs">
                <div>
                    <Label htmlFor="name" className="block mb-2 text-sm font-semibold">
                        Billing Name
                    </Label>
                    <Input id="name" name="name" type="text" autoComplete="name" />
                </div>

                <div>
                    <Label htmlFor="email" className="block mb-2 text-sm font-semibold">
                        Billing Email
                    </Label>
                    <Input id="email" name="email" type="email" />
                </div>

                <div>
                    <Label htmlFor="value" className="block mb-2 text-sm font-semibold">
                        Billing Value
                    </Label>
                    <Input id="value" name="value" type="text" />
                </div>

                <div>
                    <Label htmlFor="description" className="block mb-2 text-sm font-semibold">
                        Description
                    </Label>
                    <Textarea id="description" name="description"></Textarea>
                </div>
                
                <div>
                    <SubmitButton />
                </div>
            </form>
        </main>
    );
}