
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-r from-blue-50 to-sky-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Помощь мигрантам <br />
              <span className="text-primary">в России</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 md:pr-10">
              Предоставляем полный спектр услуг по легальному оформлению документов, 
              трудоустройству и адаптации для мигрантов. 
              Гарантируем качество и прозрачность на каждом этапе работы.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="px-8">
                Консультация
              </Button>
              <Button size="lg" variant="outline" className="px-8">
                Подробнее
              </Button>
            </div>
            <div className="flex items-center mt-10 space-x-6">
              <div className="flex items-start">
                <div className="bg-primary rounded-full p-1">
                  <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="ml-2 text-gray-700">Официально</span>
              </div>
              <div className="flex items-start">
                <div className="bg-primary rounded-full p-1">
                  <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="ml-2 text-gray-700">Быстро</span>
              </div>
              <div className="flex items-start">
                <div className="bg-primary rounded-full p-1">
                  <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="ml-2 text-gray-700">Надежно</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Помощь мигрантам" 
              className="rounded-lg shadow-lg object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
