import { redirect } from "next/navigation";

export async function GET() {
  redirect(
    "https://gdg.community.dev/events/details/google-gdg-portlaoise-presents-devfest-ireland-2025/"
  );
}
