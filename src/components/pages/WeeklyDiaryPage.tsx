import { ProjectData, WeeklyLog } from '../../types/project';
import { PsitBrandHeader, PsitBrandFooter } from '../PsitBrandHeader';

export function WeeklyDiaryPage({
  data,
  log,
  pageNumber
}: {
  data: ProjectData;
  log: WeeklyLog;
  pageNumber: number;
}) {
  return (
    <div className="academic-page" id={`page-${pageNumber}`}>
      <PsitBrandHeader />

      <div className="flex-1 flex flex-col justify-between text-black font-serif text-[12.5px]">
        <div>
          <div className="text-center mb-3">
            <p className="text-[12px] font-bold">
              (To be filled by Students for every week to show the Weekly Progress of Project)
            </p>
          </div>

          <div className="flex justify-between items-center text-xs font-bold mb-1">
            <div>
              Subject Code: <span>{data.subjectCode}</span>
            </div>
            <div>
              Group Id: <span className="font-mono">{data.groupId}</span>
            </div>
          </div>

          <div className="flex justify-between items-center text-xs font-bold mb-2">
            <div>
              Meeting Date: <span className="font-mono">{log.meetingDate}</span>
            </div>
            <div>
              Week {log.weekNo} of 10
            </div>
          </div>

          <div className="text-center font-bold text-xs uppercase tracking-wide py-1 border border-black mb-2">
            Session 2026–2027 (Odd Semester)
          </div>

          {/* Student Table */}
          <table className="w-full border-collapse border border-black text-xs mb-3">
            <thead>
              <tr className="font-bold text-center">
                <th className="border border-black px-1.5 py-1 w-10">S No</th>
                <th className="border border-black px-2 py-1 w-32">Roll Number</th>
                <th className="border border-black px-2 py-1 text-left">Student Name</th>
                <th className="border border-black px-2 py-1 w-36">
                  Status on Meeting Date (Present /Absent)
                </th>
                <th className="border border-black px-2 py-1 w-32">Student Signature</th>
              </tr>
            </thead>
            <tbody>
              {data.students.map((student, idx) => (
                <tr key={student.id}>
                  <td className="border border-black px-1.5 py-1 text-center font-bold">
                    {idx + 1}
                  </td>
                  <td className="border border-black px-2 py-1 text-center font-mono">
                    {student.rollNo}
                  </td>
                  <td className="border border-black px-2 py-1 text-left">
                    {student.name}
                  </td>
                  <td className="border border-black px-2 py-1 text-center font-medium">
                    {student.status || "Present"}
                  </td>
                  <td className="border border-black px-2 py-1 text-center italic font-serif">
                    {student.signature || student.name.split(" ")[0]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Project Details */}
          <div className="space-y-1 text-xs mb-3">
            <div>
              <span className="font-bold">Project Title : </span>
              <span className="border-b border-black pb-0.5 inline-block">
                {data.projectTitle} - {data.projectSubtitle}
              </span>
            </div>
            <div>
              <span className="font-bold">Name of Project Supervisor: </span>
              <span className="border-b border-black pb-0.5 inline-block">
                {data.supervisorName} ({data.supervisorDesignation})
              </span>
            </div>
            <div className="pt-0.5 text-[11.5px] italic">
              Project Coordinator Comment and Signature: Verified milestone for week {log.weekNo}.
            </div>
          </div>

          {/* Work Done Boxes */}
          <div className="space-y-2">
            <div className="border border-black p-2 bg-white">
              <p className="font-bold text-xs mb-1">
                Work done in current Week:
              </p>
              <p className="text-xs text-justify leading-relaxed">
                {log.workDoneCurrent}
              </p>
            </div>

            <div className="border border-black p-2 bg-white">
              <p className="font-bold text-xs mb-1">
                Work to be done in next Week :
              </p>
              <p className="text-xs text-justify leading-relaxed">
                {log.workDoneNext}
              </p>
            </div>

            <div className="border border-black p-2 bg-white">
              <p className="font-bold text-xs mb-1">
                Supervisor Comments:
              </p>
              <p className="text-xs text-justify italic leading-relaxed">
                "{log.supervisorComments}"
              </p>
              <div className="mt-4 pt-1 flex justify-between items-center text-xs border-t border-dotted border-gray-400">
                <span>Supervisor Signature/Date:</span>
                <span className="font-mono font-bold">
                  {data.supervisorName.split(" ")[1] || "R.Sharma"} · {log.supervisorSignatureDate}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PsitBrandFooter />
    </div>
  );
}
