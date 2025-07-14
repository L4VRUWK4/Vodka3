import React from 'react';
import { Shield, AlertTriangle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <AlertTriangle className="w-6 h-6 text-yellow-500 mr-2" />
            <span className="text-lg font-semibold">Важная информация</span>
          </div>
          
          <div className="bg-red-900/30 rounded-lg p-6 max-w-4xl mx-auto">
            <p className="text-yellow-200 text-lg mb-2">
              🔞 Азартные игры — развлечение 18+
            </p>
            <p className="text-gray-300">
              Бонусы не гарантируют выигрыш. Играйте ответственно и в рамках своих возможностей.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center">
            <Shield className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Безопасность</h3>
            <p className="text-gray-400 text-sm">
              Все данные защищены современными методами шифрования
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="font-semibold mb-2">Поддержка</h3>
            <p className="text-gray-400 text-sm">
              Служба поддержки работает 24/7 для решения ваших вопросов
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="font-semibold mb-2">Ответственная игра</h3>
            <p className="text-gray-400 text-sm">
              Мы поддерживаем принципы ответственного гейминга
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2025 Vodka Casino Guide. Информационный сайт.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Контакты
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;