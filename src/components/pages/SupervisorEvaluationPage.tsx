import { ProjectData } from '../../types/project';
import { PsitBrandHeader, PsitBrandFooter } from '../PsitBrandHeader';

export function SupervisorEvaluationPage({ data }: { data: ProjectData }) {
  return (
    <div className="academic-page" id="page-21">
      <PsitBrandHeader />

      <div className="flex-1 flex flex-col justify-between py-2 text-black font-serif text-xs">
        <div>
          <div className="text-center mb-4">
            <p className="text-sm font-bold">
              (To be filled by Project Supervisor)
            </p>
          </div>

          {/* Project Title & Project ID */}
          <div className="space-y-3 mb-6 text-sm">
            <div>
              <span className="font-bold">ProjectTitle: </span>
              <span className="border-b border-black pb-0.5 inline-block font-semibold">
                {data.projectTitle} - {data.projectSubtitle}
              </span>
            </div>
            <div>
              <span className="font-bold">Project Id.: </span>
              <span className="border-b border-black pb-0.5 inline-block font-mono font-bold">
                {data.projectId}
              </span>
            </div>
          </div>

          {/* Student Grades Table */}
          <table className="w-full border-collapse border border-black text-xs mb-6">
            <thead>
              <tr className="font-bold text-center">
                <th className="border border-black px-3 py-2 w-1/3">Roll No</th>
                <th className="border border-black px-3 py-2 text-left w-1/2">
                  Name of the student
                </th>
                <th className="border border-black px-3 py-2 text-center w-1/4">
                  Grade by Supervisor
                </th>
              </tr>
            </thead>
            <tbody>
              {data.students.map((student) => (
                <tr key={student.id}>
                  <td className="border border-black px-3 py-2 text-center font-mono">
                    {student.rollNo}
                  </td>
                  <td className="border border-black px-3 py-2 text-left font-medium">
                    {student.name}
                  </td>
                  <td className="border border-black px-3 py-2 text-center font-bold">
                    {student.grade || "A+"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Type of Project */}
          <div className="mb-4">
            <p className="font-bold text-xs mb-1">
              Type of the project (Software/ Software and Hardware/ Simulation or Modelling):
            </p>
            <div className="p-2 border border-black bg-white text-xs font-semibold">
              {data.projectType}
            </div>
          </div>

          {/* Remarks */}
          <div className="mb-6">
            <p className="font-bold text-xs mb-1">Any other Remark:</p>
            <div className="p-3 border border-black bg-white text-xs text-justify leading-relaxed">
              {data.supervisorOverallRemark}
            </div>
          </div>
        </div>

        {/* Footer Area with Signatures and Grading Scheme */}
        <div className="pt-2 border-t border-black">
          <div className="grid grid-cols-2 gap-8 items-end mb-2">
            <div>
              <p className="font-bold text-xs mb-1">Grading Scheme:</p>
              <div className="text-[11.5px] space-y-0.5">
                <p><strong>A+:</strong> Outstanding</p>
                <p><strong>A:</strong> Excellent</p>
                <p><strong>B+:</strong> Good</p>
                <p><strong>B:</strong> Average</p>
                <p><strong>C:</strong> Not Satisfactory</p>
              </div>
            </div>

            <div className="text-right">
              <div className="h-10" />
              <p className="font-bold text-xs">Supervisor Name and Signature:</p>
              <p className="text-sm font-bold text-black mt-1">{data.supervisorName}</p>
              <p className="text-xs text-black">({data.supervisorDesignation})</p>
            </div>
          </div>
        </div>
      </div>

      <PsitBrandFooter />
    </div>
  );
}
