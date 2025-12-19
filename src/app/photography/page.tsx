import Prism from '../../components/Prism';

export default function PhotographyPage() {
  return (
    <div className="relative h-screen grid place-items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Prism
          animationType="3drotate"
          timeScale={.75}
          height={3}
          baseWidth={5}
          scale={1.25}
          hueShift={0}
          colorFrequency={1}
          noise={0.2}
          glow={1}
        />
      </div>
      <div>
        <h1 className='text-white pl-1'>Photography Page</h1>
        <h1 className='text-white text-5xl'>Coming Soon</h1>
      </div>
    </div>
  );
}
