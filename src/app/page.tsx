import MaintenancePage from "@/components/MaintenancePage";

export default function Home() {
  if (process.env.MAINTENANCE) {
    return <MaintenancePage />;
  }

  return <div></div>;
}
