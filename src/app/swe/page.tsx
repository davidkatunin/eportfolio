import { GridScan } from '../../components/GridScan';

export default function SWEPage() {
  return (
    <div className="relative h-screen grid place-items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <GridScan
          className
          style={{}}
          sensitivity={1}
          lineThickness={1}
          linesColor="#00f5ff"
          gridScale={0.05}
          scanColor="#FF9FFC"
          scanOpacity={0.6}
          enablePost
          bloomIntensity={0.5}
          chromaticAberration={0.0001}
          noiseIntensity={0.01}
        />
      </div>
      <div>
        <h1 className='text-white pl-1'>Software Engineering Page</h1>
        <h1 className='text-white text-5xl'>Coming Soon</h1>
      </div>
    </div>
  );
}
