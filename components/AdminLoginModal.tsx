import React, { useState } from 'react';
import { XIcon } from './Icons';

interface AdminLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: () => void;
}

const AdminLoginModal: React.FC<AdminLoginModalProps> = ({ isOpen, onClose, onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  // Hardcoded password
  // In a real production app, this should be an environment variable (process.env.ADMIN_PASSWORD)
  // or handled via a secure backend authentication endpoint.
  const ADMIN_PASSWORD = 'yang2026';

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      onLogin();
      setPassword('');
      setError(false);
      onClose();
    } else {
      setError(true);
      setPassword('');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-stone-950/90 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]">
      <div className="bg-stone-900 w-full max-w-sm shadow-2xl border border-stone-800 p-8 flex flex-col">
        
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-serif text-stone-100">Admin Login</h2>
          <button onClick={onClose} className="text-stone-500 hover:text-stone-300 transition-colors">
            <XIcon size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest">Passwort</label>
            <input 
              type="password" 
              autoFocus
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              className={`w-full p-3 bg-stone-800 border ${error ? 'border-red-900 focus:border-red-700' : 'border-stone-700 focus:border-stone-500'} text-stone-100 focus:outline-none transition-colors rounded-none placeholder-stone-600`}
              placeholder="••••••"
            />
            {error && (
              <p className="text-xs text-red-700 mt-1">Passwort falsch.</p>
            )}
          </div>

          <div className="pt-2 flex justify-end gap-4">
             <button 
                type="button" 
                onClick={onClose}
                className="text-xs font-bold text-stone-500 hover:text-stone-300 uppercase tracking-widest transition-colors"
             >
                Abbrechen
             </button>
             <button 
                type="submit" 
                className="text-xs font-bold text-stone-100 hover:text-white bg-stone-800 hover:bg-stone-700 px-6 py-2 uppercase tracking-widest transition-colors"
             >
                Login
             </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default AdminLoginModal;