import { ProjectData } from '../../types/project';
import { PsitBrandHeader, PsitBrandFooter } from '../PsitBrandHeader';

export function AbstractPage({ data }: { data: ProjectData }) {
  return (
    <div className="academic-page" id="page-8">
      <PsitBrandHeader />

      <div className="flex-1 flex flex-col justify-between py-2 text-black font-serif">
        <div>
          <h2 className="text-xl font-bold text-center tracking-wider text-black uppercase underline decoration-1 underline-offset-8 mb-8">
            Abstract
          </h2>

          <div className="text-justify text-[13.5px] leading-[1.7] space-y-4 text-black">
            {data.abstract.split("\n\n").map((para, i) => (
              <p key={i} className="indent-8">
                {para}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-black/20 text-xs text-black">
          <p>
            <strong>Keywords: </strong>
            Emergency Response System, Campus SOS AI, Real-Time Geofencing, Acoustic Threat Detection, Incident Command Console, PSIT Kanpur.
          </p>
        </div>
      </div>

      <PsitBrandFooter />
    </div>
  );
}
