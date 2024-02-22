import BigDaddy from "@/components/BigDaddy";
import BiggerDaddy from "@/components/BiggerDaddy";
import BiggestDaddy from "@/components/BiggestDaddy";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      {/* <BigDaddy /> */}
      <BiggestDaddy />
      <BiggerDaddy />
    </main>
  );
}
