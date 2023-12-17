import Image from "next/image";
import logoImage from "@/assets/logo.svg";

export default function MaintenancePage() {
  return (
    <main className="h-screen flex items-center justify-center">
      <Image alt="Logo" src={logoImage}></Image>
    </main>
  );
}
