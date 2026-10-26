import { ProjectData } from '../../types/project';
import { PsitBrandHeader, PsitBrandFooter } from '../PsitBrandHeader';

export function SynopsisPage({ data }: { data: ProjectData }) {
  const { synopsis } = data;

  return (
    <div className="academic-page" id="page-9">
      <PsitBrandHeader />

      <div className="flex-1 flex flex-col justify-between py-1 text-black font-serif text-[12.5px] leading-relaxed">
        <div>
          <div className="text-center mb-4">
            <h2 className="text-xl font-bold tracking-wider text-black uppercase underline decoration-1 underline-offset-8">
              Synopsis
            </h2>
            <h3 className="text-sm font-bold text-black mt-2">{synopsis.title}</h3>
          </div>

          <div className="space-y-3.5 text-justify text-black">
            <div>
              <p>
                <strong>1. Introduction & Background: </strong>
                {synopsis.introduction}
              </p>
            </div>

            <div>
              <p>
                <strong>2. Problem Statement: </strong>
                {synopsis.problemStatement}
              </p>
            </div>

            <div>
              <p className="font-bold mb-1">3. Project Objectives:</p>
              <ul className="list-disc pl-6 space-y-1 text-[12px]">
                {synopsis.objectives.slice(0, 4).map((obj, i) => (
                  <li key={i}>{obj}</li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-bold mb-1">4. System Architecture & Technical Specifications:</p>
              <div className="border border-black p-2.5 text-[11.5px] space-y-1">
                <p><strong>• Frontend:</strong> {synopsis.techStack.frontend}</p>
                <p><strong>• Backend & Realtime:</strong> {synopsis.techStack.backend}</p>
                <p><strong>• AI Distress Classifier:</strong> {synopsis.techStack.aiMl}</p>
                <p><strong>• Telemetry & Geofencing:</strong> {synopsis.techStack.apis}</p>
              </div>
            </div>

            <div>
              <p className="font-bold mb-1">5. Core Modules Overview:</p>
              <div className="space-y-1 text-[11.5px]">
                {synopsis.keyModules.slice(0, 3).map((mod, i) => (
                  <p key={i}>
                    <strong>{mod.name}:</strong> {mod.desc}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <p>
                <strong>6. Expected Outcomes: </strong>
                Sub-2 second emergency response propagation across PSIT's 80-acre campus; zero-friction one-touch distress beacons; real-time security dashboard dispatching.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-black grid grid-cols-3 gap-4 text-center text-xs">
          <div>
            <div className="h-6" />
            <p className="font-bold text-black">Candidate Representative</p>
            <p className="text-[11px]">{data.students[0]?.name}</p>
          </div>
          <div>
            <div className="h-6" />
            <p className="font-bold text-black">Project Supervisor</p>
            <p className="text-[11px]">{data.supervisorName}</p>
          </div>
          <div>
            <div className="h-6" />
            <p className="font-bold text-black">HOD BCA</p>
            <p className="text-[11px]">{data.hodName}</p>
          </div>
        </div>
      </div>

      <PsitBrandFooter />
    </div>
  );
}
