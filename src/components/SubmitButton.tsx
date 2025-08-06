"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

const SubmitButton = () =>  {
    const { pending } = useFormStatus();
    console.log('pending', pending);
    return (
        <Button variant="ghost" className="w-full font-semibold ">
            <span className={pending ? 'text-transparent': ''}>Submit</span>
        </Button>
    )
}
export default SubmitButton;