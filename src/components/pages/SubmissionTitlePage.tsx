import { ProjectData } from '../../types/project';
import { PsitBrandHeader, PsitBrandFooter, PsitLogo } from '../PsitBrandHeader';

export function SubmissionTitlePage({ data }: { data: ProjectData }) {
  return (
    <div className="academic-page" id="page-5">
      <PsitBrandHeader />

      <div className="flex-1 flex flex-col justify-between py-2 text-center text-black font-serif">
        <div className="space-y-4 pt-2">
          <h1 className="text-2xl font-bold tracking-wide text-black uppercase">
            {data.projectTitle}
          </h1>

          <div className="pt-2 text-base leading-relaxed text-black">
            <p className="text-lg font-bold mb-1">A</p>
            <p className="max-w-md mx-auto">
              Report submitted in partial fulfillment of the requirement for the degree of
            </p>
            <p className="text-xl font-bold tracking-wider text-black mt-2 uppercase">
              {data.course}
            </p>
          </div>

          <div className="pt-4">
            <p className="text-base text-black mb-1">
              Under the Supervision of
            </p>
            <p className="text-base font-bold text-black">
              {data.supervisorName}
            </p>
            <p className="text-sm text-black">
              ({data.supervisorDesignation})
            </p>
          </div>
        </div>

        <div className="my-4">
          <p className="text-base font-bold text-black mb-2">By</p>
          <div className="inline-block text-center space-y-1 text-base text-black">
            {data.students.map((student) => (
              <div key={student.id}>
                <span>{student.name}</span> (<span className="font-mono text-sm">{student.rollNo}</span>)
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3 pb-2">
          <div className="flex justify-center">
            <PsitLogo className="h-16" />
          </div>
          <div>
            <h3 className="text-base font-bold text-black">
              PSIT College Of Higher Education,Kanpur
            </h3>
            <p className="text-base font-medium text-black">
              C.S.J.M. University
            </p>
            <p className="text-base font-medium text-black">
              Kanpur
            </p>
          </div>
        </div>
      </div>

      <PsitBrandFooter />
    </div>
  );
}
