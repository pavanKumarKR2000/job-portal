import { Button } from "@/components/ui/button";
import Image from "next/image";
import prisma from "@/lib/prisma";
import JobListItem from "@/components/JobListItem";

/** server component */
export default async function Home() {
  const jobs = await prisma.job.findMany({
    where: { approved: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="max-w-5xl mx-auto px-3 my-10 space-y-10">
      {jobs.map((job) => (
        <JobListItem job={job} key={job.id} />
      ))}
    </main>
  );
}
