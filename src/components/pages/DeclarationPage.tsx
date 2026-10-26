import { ProjectData } from '../../types/project';
import { PsitBrandHeader, PsitBrandFooter } from '../PsitBrandHeader';

export function DeclarationPage({ data }: { data: ProjectData }) {
  return (
    <div className="academic-page" id="page-6">
      <PsitBrandHeader />

      <div className="flex-1 flex flex-col justify-between py-2 text-black font-serif">
        <div>
          <h2 className="text-xl font-bold text-center tracking-wider text-black uppercase underline decoration-1 underline-offset-8 mb-8">
            DECLARATION
          </h2>

          <div className="space-y-5 text-justify text-[14px] leading-[1.8] text-black">
            <p>
              We hereby declare that the work presented in this report entitled{" "}
              <strong>"{data.projectTitle.toUpperCase()}"</strong>, was carried out by us.
              We have not submitted the matter embodied in this report for the award of any other
              degree or diploma of any other University or Institute.
            </p>

            <p>
              We have given due credit to the original authors/sources for all the words, ideas,
              diagrams, graphics, computer programs, experiments, results, that are not my original
              contribution. We have used quotation marks to identify verbatim sentences and given
              credit to the original authors/sources.
            </p>

            <p>
              We affirm that no portion of my work is plagiarized, and the experiments and results
              reported in the report are not manipulated. In the event of a complaint of plagiarism
              and the manipulation of the experiments and results, we shall be fully responsible and
              answerable.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-4">
          <div className="space-y-4 text-sm text-black">
            {data.students.map((student, idx) => (
              <div key={student.id} className="grid grid-cols-12 gap-2 border-b border-dotted border-gray-300 pb-2">
                <div className="col-span-5">
                  <span className="font-semibold">Name {idx + 1} : </span>
                  <span>{student.name}</span>
                </div>
                <div className="col-span-4">
                  <span className="font-semibold">Roll. No : </span>
                  <span className="font-mono">{student.rollNo}</span>
                </div>
                <div className="col-span-3 text-right">
                  <span className="font-semibold">Signature : </span>
                  <span className="italic font-serif">{student.signature || student.name.split(" ")[0]}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <PsitBrandFooter />
    </div>
  );
}
