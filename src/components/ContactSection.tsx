
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
    <section id="contacts" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Свяжитесь с нами</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Оставьте заявку, и наш специалист свяжется с вами в ближайшее время
            для предоставления бесплатной консультации
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-6">Напишите нам</h3>
            <form>
              <div className="space-y-4">
                <div>
                  <Input placeholder="Ваше имя" required />
                </div>
                <div>
                  <Input type="tel" placeholder="Телефон" required />
                </div>
                <div>
                  <Input type="email" placeholder="E-mail" />
                </div>
                <div>
                  <Textarea placeholder="Ваш вопрос" rows={4} />
                </div>
                <Button type="submit" className="w-full">Отправить заявку</Button>
                <p className="text-xs text-gray-500 mt-2">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </div>
            </form>
          </div>
          
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Контактная информация</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Icon name="MapPin" className="h-5 w-5 text-primary mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium">Адрес:</h4>
                    <p className="text-gray-600">г. Москва, ул. Примерная, д. 123, офис 45</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="Phone" className="h-5 w-5 text-primary mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium">Телефон:</h4>
                    <p className="text-gray-600">+7 (999) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="Mail" className="h-5 w-5 text-primary mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium">E-mail:</h4>
                    <p className="text-gray-600">info@profmigratsiya.ru</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="Clock" className="h-5 w-5 text-primary mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium">Режим работы:</h4>
                    <p className="text-gray-600">Пн-Пт: 9:00 - 18:00, Сб: 10:00 - 15:00</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Мы в социальных сетях</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-200 hover:bg-primary hover:text-white p-3 rounded-full transition-colors">
                  <Icon name="Facebook" className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-200 hover:bg-primary hover:text-white p-3 rounded-full transition-colors">
                  <Icon name="Instagram" className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-200 hover:bg-primary hover:text-white p-3 rounded-full transition-colors">
                  <Icon name="MessageCircle" className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-200 hover:bg-primary hover:text-white p-3 rounded-full transition-colors">
                  <Icon name="Send" className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
