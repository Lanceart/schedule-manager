import { db } from "@/lib/db";
import { Board } from "@prisma/client";

// import { BoardTitleForm } from "./board-title-form";
// import { BoardOptions } from "./board-options";

interface BoardNavbarProps {
  id: string
};

export const BoardNavbar = async ({
  id
}: BoardNavbarProps) => {
    const board = await db.board.findUnique({
        where:{
            id: params.boardId,
            orgId,
        }
    })
  return (
    <div className="w-full h-14 z-[40] bg-black/50 fixed top-14 flex items-center px-6 gap-x-4 text-white">
      
    </div>
  );
};