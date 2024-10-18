import Image from "next/image";
import { FaDownload } from "react-icons/fa";
import Contact from "./Contact";
import Download from "./Download";
import Languages from "./Languages";
import Location from "./Location";
import Skills from "./Skills";
import Tools from "./Tools";

const Intro = () => {
  return (
    <>
      {/* fixed at top */}
      <div className="headerr z-50 absolute bg-MidNightBlack backdrop-blur-sm inset-y-0 h-48 top-0 flex items-center justify-center w-full flex-col px-4 gap-y-4">
        <Image
          className="w-24 h-24 object-cover rounded-full"
          src={"/images/me.jpg"}
          alt="profile picture"
          width={150}
          height={150}
        />
         
      </div>

      {/* middle components */}
      <div className="beech z-20 flex flex-col overflow-y-scroll pt-48 top-48 space-y-6 divide-y divide-white overflow-x-hidden no-scrollbar px-4">
        <Location />
        <Languages />
        <Skills />
        <Tools />
        <Contact />
        <Download icon={<FaDownload />} />
      </div>

      {/* fixed at bottom */}
      <div className="footer absolute flex justify-center space-x-6 text-xl items-center bottom-0 z-50 h-10 w-full bg-MidNightBlack text-Snow">
        {/* <Link href={SOCIAL_LINKS.GITHUB} target='_blank' rel='noreferrer' className=''>
          <FaGithub />
        </Link> */}
      </div>
    </>
  );
};

export default Intro;
