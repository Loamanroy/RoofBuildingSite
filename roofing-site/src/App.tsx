import { Phone, Mail, MapPin, Shield, Clock, Users, Award, CheckCircle, Home, Wrench, Droplets, Thermometer } from 'lucide-react'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-900 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Phone className="w-5 h-5" />
              <span className="text-sm">8 (495) 989-48-07</span>
              <span className="text-sm">8 (915) 102-09-01</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-5 h-5" />
              <span className="text-sm">Республика Татарстан и Самарская область</span>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="w-5 h-5" />
              <span className="text-sm">info@krovgruppstroy.ru</span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-900">
              КРОВГРУППСТРОЙ
              <div className="text-sm font-normal text-gray-600">КРОВЕЛЬНЫЕ СИСТЕМЫ</div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-900 transition-colors">УСЛУГИ</a>
              <a href="#advantages" className="text-gray-700 hover:text-blue-900 transition-colors">О КОМПАНИИ</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-900 transition-colors">КОНТАКТЫ</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1635424824800-d80b5b8b6e8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`
          }}
        ></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            ПРОФЕССИОНАЛЬНЫЙ МОНТАЖ<br />
            МЯГКОЙ РУЛОННОЙ КРОВЛИ
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Кровгруппстрой специализируется на строительстве мягкой рулонной кровли любой сложности. 
            Квалифицированные специалисты помогут сделать вашу кровлю надежной в быстрые сроки. С гарантией.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              РАССЧИТАТЬ СТОИМОСТЬ
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Оперативная доставка</h3>
              <p className="text-gray-600 text-sm">Быстрая доставка материалов на объект</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Замеры и расчет</h3>
              <p className="text-gray-600 text-sm">Точные замеры и расчет материалов</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Возможность оплаты по факту</h3>
              <p className="text-gray-600 text-sm">Удобные условия оплаты</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Качественные и надежные материалы</h3>
              <p className="text-gray-600 text-sm">Только проверенные материалы</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">НАШИ УСЛУГИ</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Мы можем предоставить большой спектр услуг кровли
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Droplets className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Гидроизоляция крыши и фундамента</h3>
              <p className="text-gray-600">Профессиональная гидроизоляция для защиты от влаги</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Thermometer className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Утепление крыши</h3>
              <p className="text-gray-600">Качественное утепление для энергоэффективности</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Разуклонка крыши под ливневку</h3>
              <p className="text-gray-600">Создание правильного уклона для отвода воды</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Стяжка любой сложности</h3>
              <p className="text-gray-600">Выравнивание поверхности под кровлю</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Огрунтовка основания</h3>
              <p className="text-gray-600">Подготовка поверхности для монтажа кровли</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Монтаж рулонной кровли</h3>
              <p className="text-gray-600">Профессиональный монтаж мягкой рулонной кровли</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Монтаж парапетных крышек</h3>
              <p className="text-gray-600">Установка отливов и прижимной планки</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Демонтаж старой кровли</h3>
              <p className="text-gray-600">Аккуратный демонтаж старого покрытия</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="advantages" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">ПОЧЕМУ ИМЕННО КРОВГРУППСТРОЙ</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Наш главный критерий - индивидуальный подход к каждому клиенту. Быстро, надежно, качественно, в кратчайшие сроки.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Широкая география работ</h3>
                    <p className="text-gray-600">Работаем по республике Татарстан и всей Самарской области, имеем несколько действующих бригад в каждой области. Каждая бригада имеет большой опыт по монтажу мягкой рулонной кровли.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Доверие крупных заказчиков</h3>
                    <p className="text-gray-600">Нам доверяют государственные, муниципальные, промышленные и частные учреждения. Наши бригады участвовали в застройке Кошелев парка, Южного города и многих других крупных объектов.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Опыт и гарантии</h3>
                    <p className="text-gray-600">Опыт работы более 10 лет, гарантия на работу от 3 лет. Составление договора на оказание услуг в день начала работ.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Профессиональная команда</h3>
                    <p className="text-gray-600">Профессиональная бригада по монтажу кровли выполняет работу в кратчайшие сроки. Подходим с решением вашей задачи на профессиональном уровне.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Дилер Технониколь</h3>
                    <p className="text-gray-600">Мы являемся дилером Технониколь в городе Самара, самые низкие цены на материал.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://cdn.pixabay.com/photo/2017/10/26/16/51/roofers-2891664_960_720.jpg" 
                alt="Профессиональные кровельщики за работой"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-blue-200">лет опыта</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">3+</div>
              <div className="text-blue-200">года гарантии</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-200">выполненных объектов</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2</div>
              <div className="text-blue-200">региона работы</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">КОНТАКТЫ</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Свяжитесь с нами</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-blue-600" />
                  <div>
                    <div className="font-semibold">8 (495) 989-48-07</div>
                    <div className="font-semibold">8 (915) 102-09-01</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <div>
                    <div className="font-semibold">info@krovgruppstroy.ru</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  <div>
                    <div className="font-semibold">Республика Татарстан и Самарская область</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Получить консультацию</h4>
                <form className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Ваше имя" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input 
                    type="tel" 
                    placeholder="Телефон" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <textarea 
                    placeholder="Сообщение" 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                  <button 
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors"
                  >
                    Отправить заявку
                  </button>
                </form>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6">Наши преимущества</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span>Индивидуальный подход к каждому клиенту</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span>Быстрое выполнение работ</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <span>Гарантия качества от 3 лет</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-blue-600" />
                  <span>Дилер Технониколь</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">КРОВГРУППСТРОЙ</h3>
              <p className="text-gray-400 mb-4">
                Профессиональный монтаж мягкой рулонной кровли любой сложности. 
                Работаем в Республике Татарстан и Самарской области.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <div>8 (495) 989-48-07</div>
                <div>8 (915) 102-09-01</div>
                <div>info@krovgruppstroy.ru</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <div className="space-y-2 text-gray-400">
                <div>Монтаж рулонной кровли</div>
                <div>Гидроизоляция</div>
                <div>Утепление крыши</div>
                <div>Демонтаж старой кровли</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Кровгруппстрой. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
