import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const LoggedIn = { firstName: 'Olujimi', lastName: 'Adebakin' }
  
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={LoggedIn} />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="menu icon" />
          <div>
            <MobileNav user={LoggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
