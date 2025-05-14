
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 md:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Icon name="LocateFixed" className="h-7 w-7 text-primary mr-2" />
              <span className="text-xl font-montserrat font-bold text-white">
                <span className="text-primary">Проф</span>Миграция
              </span>
            </div>
            <p className="mb-4">
              Профессиональная помощь мигрантам в России. Официальное оформление документов, 
              трудоустройство и адаптация.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Facebook" className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Instagram" className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="MessageCircle" className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Send" className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary transition-colors">Оформление документов</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Трудоустройство</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Поиск жилья</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Образование</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Медицинская помощь</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Юридическая защита</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary transition-colors">О компании</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Часто задаваемые вопросы</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Статьи и новости</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Полезная информация</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex">
                <Icon name="MapPin" className="h-5 w-5 text-primary mr-2" />
                <span>г. Москва, ул. Примерная, д. 123, офис 45</span>
              </li>
              <li className="flex">
                <Icon name="Phone" className="h-5 w-5 text-primary mr-2" />
                <span>+7 (999) 123-45-67</span>
              </li>
              <li className="flex">
                <Icon name="Mail" className="h-5 w-5 text-primary mr-2" />
                <span>info@profmigratsiya.ru</span>
              </li>
              <li className="flex">
                <Icon name="Clock" className="h-5 w-5 text-primary mr-2" />
                <span>Пн-Пт: 9:00 - 18:00, Сб: 10:00 - 15:00</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 text-center md:text-left md:flex md:justify-between">
          <p>&copy; {new Date().getFullYear()} ПрофМиграция. Все права защищены.</p>
          <p className="mt-2 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
