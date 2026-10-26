import { ProjectData } from '../../types/project';
import { PsitBrandHeader, PsitBrandFooter } from '../PsitBrandHeader';

export function CertificatePage({ data }: { data: ProjectData }) {
  const studentNamesList = data.students.map((s) => s.name).join(", ");

  return (
    <div className="academic-page" id="page-7">
      <PsitBrandHeader />

      <div className="flex-1 flex flex-col justify-between py-6 text-black font-serif">
        <div>
          <h2 className="text-xl font-bold text-center tracking-wider text-black uppercase underline decoration-1 underline-offset-8 mb-12">
            Certificate
          </h2>

          <div className="text-justify text-[15px] leading-[1.8] text-black space-y-6">
            <p>
              This is to certify that Project Report entitled{" "}
              <strong>"{data.projectTitle}"</strong> which is submitted by{" "}
              <strong>{studentNamesList}</strong> in partial fulfilment of the
              requirement for the award of degree <strong>B.C.A</strong> of{" "}
              <strong>{data.collegeName}</strong>, affiliated to{" "}
              <strong>{data.universityName}</strong> is a record of the candidates own
              work carried out by them under my/our supervision. The project embodies result of
              original work and studies carried out by the students themselves and the contents
              of the project do not form the basis for the award of any other degree to the
              candidate or to anybody else.
            </p>
          </div>
        </div>

        <div className="mt-20 pt-8 grid grid-cols-2 gap-12 text-black">
          <div className="text-left space-y-1">
            <p className="font-bold text-sm">Signature:</p>
            <div className="h-10" />
            <p className="font-bold text-sm text-black">HOD BCA:</p>
            <p className="text-xs text-black">{data.hodName}</p>
          </div>

          <div className="text-left pl-8 space-y-1">
            <p className="font-bold text-sm">Signature:</p>
            <div className="h-10" />
            <p className="font-bold text-sm text-black">Name of Supervisor</p>
            <p className="text-sm font-semibold text-black">{data.supervisorName}</p>
            <p className="text-xs text-black">Designation: {data.supervisorDesignation}</p>
          </div>
        </div>
      </div>

      <PsitBrandFooter />
    </div>
  );
}
