import JobFilterSidebar from "@/components/JobFilterSidebar";
import JobResults from "@/components/JobResults";
import Heading from "@/components/ui/h1";
import { jobFilterValues } from "@/lib/validation";

interface PageProps {
  searchParams: {
    q?: string;
    type?: string;
    location?: string;
    remote?: string;
  };
}

/** server component */
export default async function Home({
  searchParams: { q, type, location, remote },
}: PageProps) {
  const filterValues: jobFilterValues = {
    q,
    type,
    location,
    remote: remote === "true",
  };

  return (
    <main className="max-w-5xl mx-auto px-3 my-10 space-y-10">
      <div className="space-y-5 text-center">
        <Heading>Developer Jobs</Heading>
        <p className="text-muted-foreground">Find your dream job</p>
      </div>
      <section className="flex flex-col md:flex-row gap-4">
        <JobFilterSidebar defaultValues={filterValues} />
        <JobResults filterValues={filterValues} />
      </section>
    </main>
  );
}
