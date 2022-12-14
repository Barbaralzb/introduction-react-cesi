import Abstract from "./components/Abstract";
//import ExperienceList from "./components/ExperienceList";
import FormationList from "./components/FormationList";
import Personal from "./components/PersonalInfomation";
import Resume from "./components/Resume";
import SkillList from "./components/SkillList";
import Photo from "./components/PersonalInfomation/Photo";

function Resume() {
  return (
  <>
  <div className="w-100 h-48 bg-[url('./assets/img/gradient.jpeg')]" />
  <div className="w-full min-h-screen bg-indigo-50/20 px-16 lg:px-32 pb-16 lg:pb-32">
    <div className="flex justify-between ">
      <div className="flex gap-8">
        <div className="flex relative h-28 w-28">
          <div className="absolute -top-8">
            <Photo />
          </div>
        </div>

        <div className="flex flex-col mt-8">
          <h2 className="text-2xl font-bold text-gray-700 sm:text-xl">Barbara Lizama</h2>
          <p className="text-gray-500 font-mono text-xs">
            I'm a Web Developper based in Normandie, France
          </p>
        </div>
      </div>

      <div className="">
        <div className="mt-8 flex gap-x-4 sm:justify-center">
          <a
            href="#"
            className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
          >
            Live demo
            <span className="text-gray-400" aria-hidden="true">
              &rarr;
            </span>
          </a>
          <a
            href="#"
            className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
          >
            Get started
            <span className="text-indigo-200" aria-hidden="true">
              &rarr;
            </span>
          </a>
        </div>
      </div>

    </div>


    <div className="grid grid-cols-3 gap-8">
      <div className='col-span-1 flex flex-col rounded gap-16'>
          <Resume />
          <Personal />
      </div>
      <div className='col-span-2 flex flex-col gap-4'>
        <div  className="flex bg-cyan-400 rounded grow">
          <Abstract />
        </div>
        <div className="flex bg-red-400 rounded grow">
          <FormationList />
        </div>
        {/* <div className="flex bg-teal-400 rounded grow">
          <ExperienceList />
        </div> */}
        <div className="flex bg-purple-400 rounded grow">
          <SkillList />
        </div>
      </div>
    </div>
  </div>
  </>
  );
}

export default Resume;
