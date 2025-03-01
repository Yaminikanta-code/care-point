import Image from "next/image";
import Link from "next/link";

import { PatientForm } from "@/components/forms/PatientForm";

const Home = () => {
  return (
    <div className="flex h-screen max-h-screen">
      {/* otp verificatiom*/}

      <section className="remove-scrollbar container mb-4">
        <div className="sub-container max-w-[496px]">
          <h1 className="header text-white text-4xl mb-8">CarePoint</h1>
          <PatientForm />

          <div className="text-14-regular mt-1 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 CarePoint
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>

      <Image
        src="/assets/images/onboarding-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      />
    </div>
  );
};

export default Home;
