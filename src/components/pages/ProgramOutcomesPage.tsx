import { PsitBrandHeader, PsitBrandFooter } from '../PsitBrandHeader';

export function ProgramOutcomesPage() {
  const outcomes = [
    {
      id: "PO2",
      title: "Problem Analysis",
      desc: "Identify, formulate, review research literature, and analyse complex problems reaching substantiated conclusions using basic principles."
    },
    {
      id: "PO3",
      title: "Design/Development of Solutions",
      desc: "Design solutions for complex computer application problems and design system processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations."
    },
    {
      id: "PO4",
      title: "Conduct Investigations of Complex Problems",
      desc: "Use research-based knowledge and research methods including design of experiments, including analysis and interpretation of data, and synthesis of information to provide valid conclusions for complex problems – that cannot be solved by straightforward application of knowledge, theories and techniques applicable to the Computer Application discipline; that may not have a unique solution; that require consideration of appropriate constraints / requirements not explicitly given in the problem statement; which need to be defined within appropriate mathematical framework and that often require use of modern computational concepts and tools."
    },
    {
      id: "PO5",
      title: "Modern Tool Usage",
      desc: "Create, select, and apply appropriate techniques, resources, and modern Computer Application and IT tools including prediction and modelling to complex Computer Application activities with an understanding of the limitations."
    },
    {
      id: "PO6",
      title: "The Computer Professionals and Society",
      desc: "Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional computer application practice."
    },
    {
      id: "PO7",
      title: "Environment and Sustainability",
      desc: "Understand the impact of the professional computer application solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development."
    },
    {
      id: "PO8",
      title: "Ethics",
      desc: "Apply ethical principles and commit to professional ethics and responsibilities and norms of the computer application practice."
    },
    {
      id: "PO9",
      title: "Individual and Teamwork",
      desc: "Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings."
    },
    {
      id: "PO10",
      title: "Communication",
      desc: "Communicate effectively on complex Computer Application activities with the community and with society at large, such as, being able to comprehend and write effective reports and design/maintain documentation, make effective presentations, and give and receive clear instructions."
    }
  ];

  return (
    <div className="academic-page" id="page-3">
      <PsitBrandHeader />

      <div className="flex-1 text-slate-900 text-xs font-serif leading-relaxed">
        <table className="w-full border-collapse border border-slate-900">
          <tbody>
            {outcomes.map((po) => (
              <tr key={po.id}>
                <td className="w-14 border border-slate-900 px-2.5 py-1.5 font-bold text-center align-top bg-slate-50">
                  {po.id}
                </td>
                <td className="border border-slate-900 px-2.5 py-1.5 text-justify">
                  <strong>{po.title}:</strong> {po.desc}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <PsitBrandFooter />
    </div>
  );
}
