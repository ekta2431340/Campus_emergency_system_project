import { PsitBrandHeader, PsitBrandFooter } from '../PsitBrandHeader';

export function VisionMissionPage() {
  return (
    <div className="academic-page" id="page-2">
      <PsitBrandHeader />

      <div className="flex-1 text-slate-900 text-[13px] leading-relaxed font-serif">
        <div className="text-center mb-5">
          <h2 className="text-lg font-bold text-slate-950 underline decoration-1 underline-offset-4">
            Department Vision Statement
          </h2>
          <p className="mt-2 text-justify text-[13px] leading-normal italic text-slate-800">
            To be a recognized department of Computer Application that produces versatile computer
            professional with the ability to adapt to the changing needs of computer and related Industry.
          </p>
        </div>

        <div className="mb-5">
          <h2 className="text-lg font-bold text-center text-slate-950 underline decoration-1 underline-offset-4 mb-2">
            Department Mission Statements
          </h2>
          <p className="mb-1 font-semibold text-slate-800">The mission of the Department of Computer Applications is:</p>
          <ol className="list-decimal pl-6 space-y-1 text-justify text-slate-800">
            <li>To provide broad based quality education with knowledge and attitude to succeed in Computer Application career.</li>
            <li>To prepare students for emerging trends in Computer and related industry.</li>
            <li>To develop competence in students by providing them skills and aptitude to foster culture of continuous and lifelong learning.</li>
            <li>To develop practicing professionals who investigate, design and find workable solution to the related complex problems with awareness and concern for society and environment.</li>
          </ol>
        </div>

        <div className="mb-5">
          <h2 className="text-lg font-bold text-center text-slate-950 underline decoration-1 underline-offset-4 mb-2">
            Program Educational Objectives (PEOs)
          </h2>
          <div className="space-y-2 text-justify text-slate-800">
            <p>
              <strong className="text-slate-950">PEO-1:</strong> Graduates will be efficient leading professionals with the knowledge of computer application discipline that enables them to pursue higher education and/or successful careers in national and global realms.
            </p>
            <p>
              <strong className="text-slate-950">PEO-2:</strong> Graduates will possess the capability of designing successful and sustainable innovative solutions to real life problems that are technically sound, economically viable and socially acceptable.
            </p>
            <p>
              <strong className="text-slate-950">PEO-3:</strong> Graduates will be competent team leaders, effective communicators and capable of working in multidisciplinary teams following ethical values.
            </p>
            <p>
              <strong className="text-slate-950">PEO-4:</strong> Graduates will be capable of adapting to new technologies/tools, constantly upgrading their knowledge and skills with an attitude for life-long learning.
            </p>
            <p>
              <strong className="text-slate-950">PEO-5:</strong> Graduates with an aptitude of self-employment will be able to initiate and build upon entrepreneurial ventures or demonstrate enterprising expertise for their employer organization.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold text-center text-slate-950 underline decoration-1 underline-offset-4 mb-2">
            Department Program Outcomes (POs)
          </h2>
          <p className="mb-2 font-semibold text-slate-800">The students of Computer Application Department will be able:</p>
          <table className="w-full border-collapse border border-slate-900 text-xs">
            <tbody>
              <tr>
                <td className="w-16 border border-slate-900 px-3 py-2 font-bold text-center align-top bg-slate-50">
                  PO1
                </td>
                <td className="border border-slate-900 px-3 py-2 text-justify leading-relaxed">
                  <strong>Computer Application Knowledge:</strong> Apply the knowledge of mathematics, social science, fundamentals of computer application, and management to the solution of complex problems.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <PsitBrandFooter />
    </div>
  );
}
