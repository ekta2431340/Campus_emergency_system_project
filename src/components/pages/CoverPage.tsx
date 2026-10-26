import { ProjectData } from '../../types/project';
import { PsitBrandHeader, PsitBrandFooter, PsitLogo } from '../PsitBrandHeader';

export function CoverPage({ data }: { data: ProjectData }) {
  return (
    <div className="academic-page" id="page-1">
      <PsitBrandHeader />

      <div className="flex-1 flex flex-col justify-between py-2 text-center text-black font-serif">
        <div className="space-y-4 pt-1">
          <h2 className="text-xl font-bold tracking-wide uppercase text-black">
            {data.departmentName}
          </h2>

          <div className="pt-2">
            <h3 className="text-lg font-bold text-black">Minor Project</h3>
            <p className="text-base font-bold text-black">(2026-2027)</p>
          </div>

          <div className="pt-3">
            <h1 className="text-2xl font-black tracking-wider uppercase text-black">
              PROGRESS DIARY
            </h1>
            <p className="text-base font-bold mt-1 text-black">({data.subjectCode})</p>
          </div>

          <div className="pt-4 pb-2">
            <h2 className="text-2xl font-extrabold tracking-wide text-black uppercase">
              {data.projectTitle}
            </h2>
            {data.projectSubtitle && (
              <p className="text-sm font-normal text-black italic mt-1">
                ({data.projectSubtitle})
              </p>
            )}
          </div>
        </div>

        <div className="my-4">
          <div className="inline-block text-center space-y-1 text-base font-medium text-black">
            {data.students.map((student) => (
              <div key={student.id} className="tracking-wide">
                <span>{student.name}</span>, <span className="font-mono text-sm">{student.rollNo}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4 pb-2">
          <p className="text-base font-bold italic tracking-wide text-black">
            Project_Id: <span className="font-mono font-normal not-italic">{data.projectId}</span>
          </p>

          <div className="pt-2">
            <p className="text-base font-bold text-black">{data.supervisorName}</p>
            <p className="text-sm text-black">({data.supervisorDesignation})</p>
          </div>

          <div className="pt-4 flex justify-center">
            <PsitLogo className="h-16" />
          </div>
        </div>
      </div>

      <PsitBrandFooter />
    </div>
  );
}
