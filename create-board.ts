"use server";
import {db} from "@/lib/db";
import { tr } from "date-fns/locale";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {z} from "zod";

export type State = {
  errors?:{
    title?: string[];
  },
  message?:string | null;
}
const CreateBoard = z.object({
    title: z.string().min(3,{
      message: "Min len is 3!"
    }),
});

export async function createBoard(prevState: State, formData : FormData){
    const validatedFields = CreateBoard.safeParse({
        title: formData.get("title"),
    });

    if(!validatedFields.success){
      return{
        errors: validatedFields.error.flatten().fieldErrors,
        message: "Missing fields"
      }
    }
    
    const {title} = validatedFields.data;

    try{
      await db.board.create({
        data:{
          title,
        }
      });
  
    }catch(error){
      return {
        message: "Database Error",
      }
    }

    revalidatePath("/organization/org_2d0ckJNBo1WCP5q2RqKlRm2kAl0");
    redirect("/organization/org_2d0ckJNBo1WCP5q2RqKlRm2kAl0");
  }