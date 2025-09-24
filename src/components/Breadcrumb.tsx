// src/components/Breadcrumb.tsx
import React from 'react';

const Breadcrumb: React.FC = () => {
  return (
    <div className="border px-3 py-2 text-xs md:text-sm text-slate-600 flex flex-nowrap items-center gap-1 overflow-x-auto scrollbar-hide whitespace-nowrap">
      <a href="https://www.ds3comunicaciones.com/index.html" className="flex-shrink-0 hover:text-blue-600">
        <i className="fa-solid fa-house text-[0.9em]"></i>
      </a>
      <span className="text-gray-400 flex-shrink-0"><i className="fa-solid fa-angle-right text-[0.8em]"></i></span>
      <a href="http://www.ds3comunicaciones.com/cisco/index.html" className="flex-shrink-0 hover:underline hover:text-blue-600">
        Cisco
      </a>
      <span className="text-gray-400 flex-shrink-0"><i className="fa-solid fa-angle-right text-[0.8em]"></i></span>
      <a href="http://ds3comunicaciones.com/cisco/catalyst.html" className="flex-shrink-0 hover:underline hover:text-blue-600">
        Switch Catalyst
      </a>
      <span className="text-gray-400 flex-shrink-0"><i className="fa-solid fa-angle-right text-[0.8em]"></i></span>
      <span className="text-slate-800 font-medium flex-shrink-0">
        C9200L-24T-4G-E
      </span>
    </div>
  );
};

export default Breadcrumb;
