"use client";

import { useEffect, useActionState } from "react";
import { actionFunction } from "@/types";
import { toast } from "sonner";

const initialState = {
    message: '',
};

type FormContainerProps = {
    action: actionFunction;
    children: React.ReactNode;
};

const FormContainer = ({ action, children }: FormContainerProps) => {
    const [state, formAction] = useActionState(action, initialState);
    
    useEffect(() => {
        if (state.message) {
            toast.success(state.message);
        }
    }, [state]);

    return <form action={formAction}>{children}</form>;
}

export default FormContainer