import { PsitBrandHeader, PsitBrandFooter } from '../PsitBrandHeader';

export function CourseOutcomesPage() {
  return (
    <div className="academic-page" id="page-4">
      <PsitBrandHeader />

      <div className="flex-1 text-slate-900 text-xs font-serif leading-relaxed">
        {/* PO11 and PO12 Table */}
        <table className="w-full border-collapse border border-slate-900 mb-5">
          <tbody>
            <tr>
              <td className="w-14 border border-slate-900 px-2.5 py-2 font-bold text-center align-top bg-slate-50">
                PO11
              </td>
              <td className="border border-slate-900 px-2.5 py-2 text-justify">
                <strong>Project Management and Finance:</strong> Demonstrate knowledge and understanding of the computer application and management principles and apply these to one's own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.
              </td>
            </tr>
            <tr>
              <td className="w-14 border border-slate-900 px-2.5 py-2 font-bold text-center align-top bg-slate-50">
                PO12
              </td>
              <td className="border border-slate-900 px-2.5 py-2 text-justify">
                <strong>Life-long Learning:</strong> Recognize the need for and have the preparation and ability to engage in independent and lifelong learning in the broadest context of technological change.
              </td>
            </tr>
          </tbody>
        </table>

        {/* Course Outcomes */}
        <div className="mb-5">
          <h3 className="text-sm font-bold text-slate-950 mb-1">Course Outcomes:</h3>
          <p className="text-[11px] font-semibold text-slate-800 mb-2">On successful completion of this course:</p>

          <table className="w-full border-collapse border border-slate-900">
            <thead>
              <tr className="bg-slate-100 font-bold text-center">
                <th className="border border-slate-900 px-2 py-1.5 w-16">S No</th>
                <th className="border border-slate-900 px-3 py-1.5 text-left">Course Outcome</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-900 px-2 py-1.5 text-center font-bold">CO1</td>
                <td className="border border-slate-900 px-3 py-1.5 text-justify">
                  Identify <strong>[L1: Remember]</strong> and finalize the problem statement by surveying a variety of domains.
                </td>
              </tr>
              <tr>
                <td className="border border-slate-900 px-2 py-1.5 text-center font-bold">CO2</td>
                <td className="border border-slate-900 px-3 py-1.5 text-justify">
                  Specify <strong>[L2: Understand]</strong> the design methodologies appropriate to solve the problem.
                </td>
              </tr>
              <tr>
                <td className="border border-slate-900 px-2 py-1.5 text-center font-bold">CO3</td>
                <td className="border border-slate-900 px-3 py-1.5 text-justify">
                  Apply <strong>[L3: Apply]</strong> appropriate tools and techniques, resources to implement design exhibiting integrity and ethical behaviour of engineering practices.
                </td>
              </tr>
              <tr>
                <td className="border border-slate-900 px-2 py-1.5 text-center font-bold">CO4</td>
                <td className="border border-slate-900 px-3 py-1.5 text-justify">
                  Test and defend <strong>[L4: Analyse]</strong> their work along with their team members through reports and presentations.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* CO-PO/PSO Mapping */}
        <div>
          <h3 className="text-sm font-bold text-slate-950 mb-2">CO-PO/PSO Mapping:</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-slate-900 text-[11px] text-center font-sans tabular-nums">
              <thead>
                <tr className="bg-slate-100 font-bold">
                  <th className="border border-slate-900 px-1 py-1 font-serif">CO</th>
                  <th className="border border-slate-900 px-1 py-1">PO1</th>
                  <th className="border border-slate-900 px-1 py-1">PO2</th>
                  <th className="border border-slate-900 px-1 py-1">PO3</th>
                  <th className="border border-slate-900 px-1 py-1">PO4</th>
                  <th className="border border-slate-900 px-1 py-1">PO5</th>
                  <th className="border border-slate-900 px-1 py-1">PO6</th>
                  <th className="border border-slate-900 px-1 py-1">PO7</th>
                  <th className="border border-slate-900 px-1 py-1">PO8</th>
                  <th className="border border-slate-900 px-1 py-1">PO9</th>
                  <th className="border border-slate-900 px-1 py-1">PO10</th>
                  <th className="border border-slate-900 px-1 py-1">PO11</th>
                  <th className="border border-slate-900 px-1 py-1">PO12</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-900 px-1 py-1 font-bold font-serif bg-slate-50">CO1</td>
                  <td className="border border-slate-900 px-1 py-1">3</td>
                  <td className="border border-slate-900 px-1 py-1"></td>
                  <td className="border border-slate-900 px-1 py-1"></td>
                  <td className="border border-slate-900 px-1 py-1"></td>
                  <td className="border border-slate-900 px-1 py-1"></td>
                  <td className="border border-slate-900 px-1 py-1"></td>
                  <td className="border border-slate-900 px-1 py-1">3</td>
                  <td className="border border-slate-900 px-1 py-1">3</td>
                  <td className="border border-slate-900 px-1 py-1">3</td>
                  <td className="border border-slate-900 px-1 py-1"></td>
                  <td className="border border-slate-900 px-1 py-1">3</td>
                  <td className="border border-slate-900 px-1 py-1">3</td>
                </tr>
                <tr>
                  <td className="border border-slate-900 px-1 py-1 font-bold font-serif bg-slate-50">CO2</td>
                  <td className="border border-slate-900 px-1 py-1"></td>
                  <td className="border border-slate-900 px-1 py-1">3</td>
                  <td className="border border-slate-900 px-1 py-1"></td>
                  <td className="border border-slate-900 px-1 py-1">2</td>
                  <td className="border border-slate-900 px-1 py-1"></td>
                  <td className="border border-slate-900 px-1 py-1">3</td>
                  <td className="border border-slate-900 px-1 py-1"></td>
                  <td className="border border-slate-900 px-1 py-1">3</td>
                  <td className="border border-slate-900 px-1 py-1">3</td>
                  <td className="border border-slate-900 px-1 py-1"></td>
                  <td className="border border-slate-900 px-1 py-1">3</td>
                  <td className="border border-slate-900 px-1 py-1"></td>
                </tr>
                <tr>
                  <td className="border border-slate-900 px-1 py-1 font-bold font-serif bg-slate-50">CO3</td>
                  <td className="border border-slate-900 px-1 py-1"></td>
                  <td className="border border-slate-900 px-1 py-1"></td>
                  <td className="border border-slate-900 px-1 py-1">3</td>
                  <td className="border border-slate-900 px-1 py-1">2</td>
                  <td className="border border-slate-900 px-1 py-1">3</td>
                  <td className="border border-slate-900 px-1 py-1"></td>
                  <td className="border border-slate-900 px-1 py-1"></td>
                  <td className="border border-slate-900 px-1 py-1">3</td>
                  <td className="border border-slate-900 px-1 py-1">3</td>
                  <td className="border border-slate-900 px-1 py-1"></td>
                  <td className="border border-slate-900 px-1 py-1">3</td>
                  <td className="border border-slate-900 px-1 py-1">3</td>
                </tr>
                <tr>
                  <td className="border border-slate-900 px-1 py-1 font-bold font-serif bg-slate-50">CO4</td>
                  <td className="border border-slate-900 px-1 py-1"></td>
                  <td className="border border-slate-900 px-1 py-1"></td>
                  <td className="border border-slate-900 px-1 py-1"></td>
                  <td className="border border-slate-900 px-1 py-1"></td>
                  <td className="border border-slate-900 px-1 py-1"></td>
                  <td className="border border-slate-900 px-1 py-1"></td>
                  <td className="border border-slate-900 px-1 py-1"></td>
                  <td className="border border-slate-900 px-1 py-1">3</td>
                  <td className="border border-slate-900 px-1 py-1">3</td>
                  <td className="border border-slate-900 px-1 py-1">3</td>
                  <td className="border border-slate-900 px-1 py-1">3</td>
                  <td className="border border-slate-900 px-1 py-1"></td>
                </tr>
                <tr className="bg-slate-50 font-bold border-t-2 border-slate-900">
                  <td className="border border-slate-900 px-1 py-1 font-serif">Avg</td>
                  <td className="border border-slate-900 px-1 py-1">3</td>
                  <td className="border border-slate-900 px-1 py-1">3</td>
                  <td className="border border-slate-900 px-1 py-1">3</td>
                  <td className="border border-slate-900 px-1 py-1">2</td>
                  <td className="border border-slate-900 px-1 py-1">3</td>
                  <td className="border border-slate-900 px-1 py-1">3</td>
                  <td className="border border-slate-900 px-1 py-1">3</td>
                  <td className="border border-slate-900 px-1 py-1">3</td>
                  <td className="border border-slate-900 px-1 py-1">3</td>
                  <td className="border border-slate-900 px-1 py-1">3</td>
                  <td className="border border-slate-900 px-1 py-1">3</td>
                  <td className="border border-slate-900 px-1 py-1">3</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <PsitBrandFooter />
    </div>
  );
}
