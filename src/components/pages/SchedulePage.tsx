import { ProjectData } from '../../types/project';
import { PsitBrandHeader, PsitBrandFooter } from '../PsitBrandHeader';

export function SchedulePage({ data }: { data: ProjectData }) {
  return (
    <div className="academic-page" id="page-10">
      <PsitBrandHeader />

      <div className="flex-1 flex flex-col justify-between py-4 text-slate-900 font-serif">
        <div>
          <div className="text-center mb-6">
            <p className="text-sm font-semibold italic text-slate-700">Minor Project-Time Line</p>
            <h2 className="text-lg font-bold tracking-wider text-slate-950 uppercase underline decoration-1 underline-offset-4 mt-1">
              PROJECT SCHEDULE ODD SEM 2026-2027
            </h2>
          </div>

          <table className="w-full border-collapse border border-slate-900 text-xs font-sans">
            <thead>
              <tr className="bg-slate-100 font-bold font-serif text-slate-900 text-center uppercase tracking-wide">
                <th className="border border-slate-900 px-3 py-3 text-left w-1/4">ACTIVITY</th>
                <th className="border border-slate-900 px-3 py-3 w-1/4">DEADLINE</th>
                <th className="border border-slate-900 px-3 py-3 w-1/4">PERSON INCHARGE</th>
                <th className="border border-slate-900 px-3 py-3 w-1/4">DOCUMENT/FORM</th>
              </tr>
            </thead>
            <tbody>
              {data.schedule.map((item, index) => (
                <tr key={index} className="text-slate-800">
                  <td className="border border-slate-900 px-3 py-3 font-medium text-left">
                    {item.activity}
                  </td>
                  <td className="border border-slate-900 px-3 py-3 text-center font-medium">
                    {item.deadline}
                  </td>
                  <td className="border border-slate-900 px-3 py-3 text-center">
                    {item.incharge}
                  </td>
                  <td className="border border-slate-900 px-3 py-3 text-center font-medium text-slate-900">
                    {item.document}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 p-4 border border-slate-300 rounded bg-slate-50/50 text-xs font-sans space-y-1">
          <p className="font-bold text-slate-900 font-serif">Note on Submission Timeline:</p>
          <p className="text-slate-700">
            • Progress Diary must be submitted every week to the designated project supervisor for signature.
          </p>
          <p className="text-slate-700">
            • CT-I and CT-II evaluations are mandatory and comprise 30% of the internal assessment.
          </p>
          <p className="text-slate-700">
            • Final report and source code repository must be uploaded prior to the Pre-University (PU) examination.
          </p>
        </div>
      </div>

      <PsitBrandFooter />
    </div>
  );
}
