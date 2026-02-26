/*
              +++++++++++++++
          -===###############===-
        ::*#####################*::
        ###########################
      *####################---=#####*
      *#####=------+#######-----=###*
    *#####=---------------------=######
    *#####=---------------------=######
  ######@@@@@@@@@@@*---%@@@@@@@@@@@######
  ######@@=-------%@@@@@@-------=@@######:
  ######@@=---%@=-#@=--@@--@@---=@@########
 #####==@@=----=--#@=--@@-------=@@==######
 #####-=**%@@@@@@@=------@@@@@@@%**-=######
 #####*****+++++++-------+++++++*****######
########**=----*************----=**########
##########+=--###############=-==##########
*###########==##+=========+##==############
*#################*******################:
  ###############################%%####
           ####################
              ##############*
*/

import type { FC } from "react";
import { about } from "../../../data/about";

function calculateTimeToBirthday() {
  const pastDate = new Date("1999-08-30T13:00:00");

  const currentDate = new Date();

  const timeDifferenceMs = currentDate.getTime() - pastDate.getTime();

  const millisecondsPerMinute = 1000 * 60;
  const millisecondsPerHour = millisecondsPerMinute * 60;
  const millisecondsPerDay = millisecondsPerHour * 24;

  const totalDays = Math.floor(timeDifferenceMs / millisecondsPerDay);
  const remainingMsAfterDays = timeDifferenceMs % millisecondsPerDay;
  const totalHours = Math.floor(remainingMsAfterDays / millisecondsPerHour);
  const remainingMsAfterHours = remainingMsAfterDays % millisecondsPerHour;
  const totalMinutes = Math.floor(remainingMsAfterHours / millisecondsPerMinute);

  return `${totalDays} Days, ${totalHours} Hours, ${totalMinutes} Minutes`;
}

type Props = {
  sendCommand: (command: string) => void;
}

const FetchCommand: FC<Props> = ({ sendCommand }) => (
  <div className="grid md:grid-cols-[auto_1fr] grid-cols-1 gap-4">
    <div className="flex flex-col whitespace-pre-wrap text-yellow-900 leading-3 text-xs">
      <span>              +++++++++++++++</span>
      <span>          -===###############===-</span>
      <span>        ::*#####################*::</span>
      <span>        ###########################</span>
      <span>      *#######################=#####*</span>
      <span>      *#####=<span className="text-rose-300">######</span>+#######<span className="text-rose-300">#####</span>=###*</span>
      <span>    *#####=<span className="text-rose-300">#####################</span>=######</span>
      <span>    *#####=<span className="text-rose-300">#####################</span>=######</span>
      <span>  ######<span className="text-black">@@@@@@@@@@@*</span><span className="text-rose-300">###</span><span className="text-black">%@@@@@@@@@@@</span>######</span>
      <span>  ######<span className="text-black">@@</span><span className="text-rose-200">########</span><span className="text-black">%@@@@@@</span><span className="text-rose-200">########</span><span className="text-black">@@</span>######:</span>
      <span>  ######<span className="text-black">@@</span><span className="text-rose-200">####</span><span className="text-green-900">%@=</span><span className="text-rose-200">#</span><span className="text-black">#@</span><span className="text-rose-300">###</span><span className="text-black">@@</span><span className="text-rose-200">##</span><span className="text-green-900">@@</span><span className="text-rose-200">####</span><span className="text-black">@@</span>########</span>
      <span> #####<span className="text-rose-300">==</span><span className="text-black">@@</span><span className="text-rose-200">########</span><span className="text-black">#@</span><span className="text-rose-300">###</span><span className="text-black">@@</span><span className="text-rose-200">-#######</span><span className="text-black">@@</span><span className="text-rose-300">==</span>######</span>
      <span> #####<span className="text-rose-300">-=**</span><span className="text-black">%@@@@@@@=</span><span className="text-rose-300">######</span><span className="text-black">@@@@@@@%</span><span className="text-rose-300">**-=</span>######</span>
      <span> #####<span className="text-rose-300">*****+++++++#######+++++++*****</span>######</span>
      <span>########<span className="text-rose-300">**=####</span>*************<span className="text-rose-300">####=**</span>########</span>
      <span>##########<span className="text-rose-300">+=##</span>###############<span className="text-rose-300">=#==</span>##########</span>
      <span>*###########<span className="text-rose-300">==</span>##<span className="text-rose-400">+=========+</span>##<span className="text-rose-300">==</span>############</span>
      <span>*#################<span className="text-rose-300">*******</span>################:</span>
      <span>  ###############################%%####</span>
      <span>           ####################</span>
      <span>              ##############*</span>
    </div>
    <div className="flex flex-col text-gray-300 gap-1">
      <div className="flex items-center gap-2">
        <span className="text-yellow-400">OS:</span>
        <span>Arch<span className="text-gray-500">, btw</span></span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-yellow-400">Uptime:</span>
        <span>{calculateTimeToBirthday()}</span>
        <span className="text-gray-500 hidden md:block">Type <button className="text-green-500 italic underline cursor-pointer" onClick={() => sendCommand("about")}>about</button> to know more</span>
      </div>
      <span className="text-gray-500 md:hidden">Type <button className="text-green-500 italic underline cursor-pointer" onClick={() => sendCommand("about")}>about</button> to know more</span>
      <div className="flex items-center gap-2">
        <span className="text-yellow-400">Experience:</span>
        <span>+4 Years </span>
        <span className="text-gray-500 hidden md:block">Type <button className="text-green-500 italic underline cursor-pointer" onClick={() => sendCommand("experience")}>experience</button> to know more</span>
      </div>
      <span className="text-gray-500 md:hidden">Type <button className="text-green-500 italic underline cursor-pointer" onClick={() => sendCommand("experience")}>experience</button> to know more</span>
      <div className="flex items-center gap-2">
        <span className="text-yellow-400">Technologies:</span>
        <span>{about.stack.join(', ')}</span>
        <span className="text-gray-500 hidden md:block">Type <button className="text-green-500 italic underline cursor-pointer" onClick={() => sendCommand("skills")}>skills</button> to know more</span>
      </div>
      <span className="text-gray-500 md:hidden">Type <button className="text-green-500 italic underline cursor-pointer" onClick={() => sendCommand("skills")}>skills</button> to know more</span>
    </div>
    <hr className="text-purple-500 md:hidden" />
  </div>
)

export default FetchCommand;
