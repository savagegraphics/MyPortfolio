export default function Byline({ className }: { className: string }) {
  return (
    <div
      className={`${className} bg-vc-border-gradient  mr-12 bottom-3 left-8 mx-3 rounded-lg p-px shadow-lg shadow-black/20`}
    >
      <div className="flex flex-col justify-between space-y-2 rounded-lg bg-black p-3.5 lg:px-5 lg:py-3">
        <div className="flex items-center gap-x-1.5">
          <p className="px-5 py-1 text-left text-xs text-cyan-500">
            Copyright Savagedotjsx 2023
          </p>
        </div>
      </div>
    </div>
  );
}
