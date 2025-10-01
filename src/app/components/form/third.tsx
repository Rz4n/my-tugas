import React from 'react'

type InfoBoxProps = {
  color: string;
  value: string;
  label: string;
  progress?: number;
};
  
function InfoBox({ color, value, label, progress }: InfoBoxProps) {
  return (
    <div className={`${color} text-white shadow-md overflow-hidden`}>
      <div className="p-5">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-4xl font-bold leading-none">{value}</div>
            <div className="mt-2 text-sm">{label}</div>
          </div>
          <div className="w-12 h-12 border-2 border-white/70 rounded-sm"></div>
        </div>
        {typeof progress === 'number' && (
          <div className="mt-4">
            <div className="text-xs opacity-90 mb-1">
              {progress}% Increase in 30 Days
            </div>
            <div className="w-full h-2 bg-white/30 rounded">
              <div
                className="h-2 bg-white rounded"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>
      <div className="bg-black/10 px-4 py-2 text-xs">More info</div>
    </div>
  );
}

type WhiteTileProps = {
  stripColor: string;
  title: string;
  value: string;
};

function WhiteTile({ stripColor, title, value }: WhiteTileProps) {
  return (
    <div className="bg-white shadow border border-gray-200 overflow-hidden flex">
      <div className={`${stripColor} w-20 flex items-center justify-center`}>
        <div className="w-8 h-8 border-2 border-white/80 rounded-sm"></div>
      </div>
      <div className="flex-1 p-4">
        <div className="text-xs text-gray-500 uppercase">{title}</div>
        <div className="text-xl font-semibold text-gray-800">{value}</div>
      </div>
    </div>
  );
}

type SolidTileProps = {
  color: string;
  darker: string;
  title: string;
  value: string;
  progress?: number;
};

function SolidTile({ color, darker, title, value, progress = 70 }: SolidTileProps) {
  return (
    <div className={`${color} text-white shadow overflow-hidden`}>
      <div className="flex">
        <div className="w-20 flex items-center justify-center bg-black/10">
          <div className="w-8 h-8 border-2 border-white/80 rounded-sm"></div>
        </div>
        <div className="flex-1 p-4">
          <div className="text-xs uppercase opacity-90">{title}</div>
          <div className="text-lg font-semibold">{value}</div>
          <div className="mt-3 text-xs opacity-90">{progress}% Increase in 30 Days</div>
          <div className={`mt-1 h-1.5 ${darker} bg-opacity-60 rounded`}>
            <div
              className="h-1.5 bg-white rounded"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DashboardTiles() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-6 space-y-6">
    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <WhiteTile stripColor="bg-cyan-500" title="MESSAGES" value="1,410" />
        <WhiteTile stripColor="bg-green-600" title="BOOKMARKS" value="410" />
        <WhiteTile stripColor="bg-amber-600" title="UPLOADS" value="13,648" />
        <WhiteTile stripColor="bg-rose-600" title="LIKES" value="93,139" />
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <SolidTile color="bg-cyan-500" darker="bg-cyan-600" title="BOOKMARKS" value="41,410" />
        <SolidTile color="bg-green-600" darker="bg-green-700" title="LIKES" value="41,410" />
        <SolidTile color="bg-amber-600" darker="bg-amber-700" title="EVENTS" value="41,410" />
        <SolidTile color="bg-rose-600" darker="bg-rose-700" title="COMMENTS" value="41,410" />
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <InfoBox color="bg-cyan-500" value="150" label="New Orders" />
        <InfoBox color="bg-green-600" value="53%" label="Bounce Rate" progress={53} />
        <InfoBox color="bg-amber-600" value="44" label="User Registrations" />
        <InfoBox color="bg-rose-600" value="65" label="Unique Visitors" />
      </div>
    </div>
  );
}
