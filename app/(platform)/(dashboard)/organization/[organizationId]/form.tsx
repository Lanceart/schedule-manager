"use client";

// import { create } from "@/actions/create-board";
import { error } from "console";
import { useFormState } from "react-dom";
import { FormInput } from "@/components/form/form-input";
import { FormButton } from "./form-button";
import { FormSubmit } from "@/components/form/form-submit";
import { useAction } from "@/hooks/use-action";
import { createBoard } from "@/actions/create-board";

export const Form = () => {

  const {execute, fieldErrors} = useAction(createBoard,{
    onSuccess:(data)=>{
      console.log(data, "SUCCESS!")
    },
    onError:(error)=>{
      console.error(error);
    }
  });

  const onSubmit = (formData: FormData) =>{
    const title = formData.get("title") as string;
    execute({title});
  }
  return (
    <form action={onSubmit}>
      <div className="flex flex-col space-y-2">
            <FormInput  
            id="title"
            label="task"
            errors={fieldErrors}/>

        </div>    
        <FormButton />
        {/* <FormSubmit>
          Save
        </FormSubmit> */}
    </form>
    
  );
};
