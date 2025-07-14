import React from 'react';
import { Sparkles, Copy, Check } from 'lucide-react';

interface HeaderProps {
  isPromoCopied: boolean;
  onCopyPromo: () => void;
}

const Header: React.FC<HeaderProps> = ({ isPromoCopied, onCopyPromo }) => {
  return (
    <header className="bg-gradient-to-br from-blue-50 to-red-50 py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-red-500 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              Vodka Casino
            </h1>
            <Sparkles className="w-8 h-8 text-blue-500 ml-3" />
          </div>
          
          <h2 className="text-xl md:text-2xl text-gray-700 mb-8">
            Промокод BON150 — Бонусы для новых игроков
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 max-w-md mx-auto">
            <div className="text-4xl md:text-5xl font-bold text-red-500 mb-4 tracking-wider">
              BON150
            </div>
            <button
              onClick={onCopyPromo}
              className={`flex items-center justify-center w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                isPromoCopied
                  ? 'bg-green-500 text-white'
                  : 'bg-blue-500 hover:bg-blue-600 text-white hover:shadow-lg'
              }`}
            >
              {isPromoCopied ? (
                <>
                  <Check className="w-5 h-5 mr-2" />
                  Скопировано!
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5 mr-2" />
                  Скопировать промокод
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;