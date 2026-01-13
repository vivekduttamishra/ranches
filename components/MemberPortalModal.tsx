
import React from 'react';
import { X, Lock, Info } from 'lucide-react';

interface MemberPortalModalProps {
  onClose: () => void;
}

export const MemberPortalModal: React.FC<MemberPortalModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-md rounded-[32px] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-3">
              <div className="bg-green-100 p-2 rounded-xl">
                <Lock className="text-brand-green" size={24} />
              </div>
              <h3 className="text-2xl font-outfit font-bold text-gray-900">Resident Login</h3>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={24} className="text-gray-400" />
            </button>
          </div>

          <div className="bg-blue-50 border border-blue-100 p-6 rounded-2xl mb-8 flex gap-4">
            <div className="text-blue-500 shrink-0">
               <Info size={24} />
            </div>
            <div>
              <h4 className="font-bold text-blue-900 text-sm mb-1">Coming Soon!</h4>
              <p className="text-blue-800 text-xs leading-relaxed">
                The member-only zone is currently under development. Soon you'll be able to view notices, pay maintenance, and book facilities online.
              </p>
            </div>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700 ml-1">Flat Number / Email</label>
              <input 
                type="text" 
                placeholder="e.g. A-102"
                disabled
                className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-brand-green outline-none opacity-50 cursor-not-allowed"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700 ml-1">Access Key</label>
              <input 
                type="password" 
                placeholder="••••••••"
                disabled
                className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-brand-green outline-none opacity-50 cursor-not-allowed"
              />
            </div>
            
            <button 
              disabled
              className="w-full bg-gray-200 text-gray-400 font-bold py-5 rounded-2xl transition-all flex items-center justify-center space-x-2 cursor-not-allowed"
            >
              <span>Login Authorized</span>
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-xs text-gray-400">
              New resident? Contact the AOA Office at Site No. 95 for registration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
