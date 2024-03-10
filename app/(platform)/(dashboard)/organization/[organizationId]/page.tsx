// 'use client';
import {create} from "@/actions/create-board";
import { Board } from "./settings/board";
import { Suspense } from "react";

import { Separator } from "@/components/ui/separator";

import { Info } from "./_components/info";
import { BoardList } from "./_components/board-list";

import { OrganizationSwitcher } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import {Form} from "./form";
const OrganizationIdPage = async() => {
  // const isPro = await checkSubscription();

  const boards = await db.board.findMany();

  const isPro = true;
  return (

    // <div>
    //   <Form />
      
    //   <div className="space-y-2">
    //      {boards.map((board)=>(
          
    //         <Board key={board.id} title={board.title} id={board.id}/>

    //      ))}

    //   </div>
    // </div>

    <div className="w-full mb-20">
      <Info isPro />
      <Separator className="my-4" />
      <div className="px-2 md:px-4">
        <Suspense fallback={<BoardList.Skeleton />}>
          <BoardList />
        </Suspense>
      </div>
    </div>
  );
};

export default OrganizationIdPage;
