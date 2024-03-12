import React, { cache } from "react";
import prisma from "@/lib/prisma";

interface PageProps {
  params: { slug: string };
}

const getJob = cache(async (slug: string) => {
  const job = await prisma?.job.findUnique({ where: { slug } });
});

const Page = ({ params: { slug } }: PageProps) => {
  return <div>{slug}</div>;
};

export default Page;
