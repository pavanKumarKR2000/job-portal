import { Metadata } from "next";
import React from "react";
import NewJobForm from "./NewJobForm";

export const metadata: Metadata = {
  title: "Post a new job",
  description: "",
};

const page = () => {
  return <NewJobForm />;
};

export default page;
