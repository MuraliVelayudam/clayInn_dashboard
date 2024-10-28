import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import { Plus } from "lucide-react";
import { FaEdit } from "react-icons/fa";

import CreateLocation from "../forms/create-location";
import { useState } from "react";
import { Separator } from "../ui/separator";

export default function Common_Dialog_Create_and_Update({ heading, description, action, location }) {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <Dialog open={open} onOpenChange={setOpen} className="px-6">
                <DialogTrigger asChild>
                    <Button
                        className={`bg-card border border-cardBorder hover:ring-2 hover:ring-clayInnBackground/50 transition-all duration-300 ease-linear ${action === "Create" ? " flex items-center justify-center px-4 py-6   transition-all duration-300 ease-linear" : "bg-green-500 hover:bg-green-600"}`}
                    >
                        {action === "Create" ? <Plus className="w-5 h-4    animate-pulse transition-all duration-1000 delay-100 ease-linear" /> : <FaEdit className="w-5 h-4 text-clayInnBackground text-white" />}
                        <span className={`hidden md:block ${action === "Create" ? " group-hover:text-clayInnPrimary  font-semibold capitalize transition-all duration-300" : "text-white"}`}>
                            {heading}
                        </span>
                    </Button>
                </DialogTrigger>
                <DialogContent className="max-md:w-[95%]">
                    <DialogHeader className="flex flex-col items-center justify-center">
                        <DialogTitle className="text-clayInnPrimary uppercase text-xl tracking-wide">
                            {heading}
                        </DialogTitle>
                        <DialogDescription className="text-clayInnPrimary text-base">
                            {description}
                        </DialogDescription>
                    </DialogHeader>

                    <div className="flex items-center justify-center">
                        <Separator className="w-full" />
                    </div>
                    <CreateLocation action={action} setOpen={setOpen} location={location} />
                </DialogContent>
            </Dialog>
        </div>
    );
}
