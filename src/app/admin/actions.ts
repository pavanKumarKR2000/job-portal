import { currentUser } from "@clerk/nextjs";

type FormState = { error?: string } | undefined;

export async function approveSubmission(
  formData: FormData
): Promise<FormState> {
  try {
    const jobId = parseInt(formData.get("jobId") as string);
    const user = await currentUser();
  } catch (error) {
    let message = "Unexpected error";

    if (error instanceof Error) {
      message = error.message;
    }

    return { error: message };
  }
}
