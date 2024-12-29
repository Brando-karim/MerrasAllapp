import React, { useContext } from 'react';
import { AppContext, AppProvider } from './AppContext';

const MainContent = () => {
  const { isDarkTheme, toggleTheme, language, changeLanguage, t } = useContext(AppContext);

  const texts = {
    en: {
      name: 'Mohamed Merras',
      description: 'My name is Mohamed Merras, a 19-year-old enthusiastic and results-driven developer with a strong passion for IT development. Proficient in programming languages such as Python, JavaScript, ReactJS, and PHP, I specialize in creating dynamic applications and managing robust databases with MySQL. I thrive in collaborative environments, embrace innovation, and am committed to continuous growth and learning to stay at the forefront of technology.'
    },
    fr: {
      name: 'Mohamed Merras',
      description: "Je m'appelle Mohamed Merras, je suis un développeur de 19 ans enthousiaste et axé sur les résultats, avec une forte passion pour le développement informatique. Compétent dans les langages de programmation tels que Python, JavaScript, ReactJS et PHP, je me spécialise dans la création d'applications dynamiques et la gestion de bases de données robustes avec MySQL. Je m'épanouis dans les environnements collaboratifs, j'adopte l'innovation et je m'engage à une croissance et un apprentissage continus pour rester à la pointe de la technologie."
    },
    ar: {
      name: 'محمد مرّاس',
      description: 'اسمي محمد مراس، مطور متحمس يبلغ من العمر 19 عامًا ويسعى لتحقيق النتائج ولديه شغف قوي بتطوير تكنولوجيا المعلومات. أتقن لغات البرمجة مثل Python وJavaScript وReactJS وPHP، وأتخصص في إنشاء تطبيقات ديناميكية وإدارة قواعد بيانات قوية باستخدام MySQL. أزدهر في البيئات التعاونية، وأحتضن الابتكار، وألتزم بالنمو المستمر والتعلم للبقاء في طليعة التكنولوجيا.'
    }
  };

  return (
    <div className={`min-vh-100 ${isDarkTheme ? 'bg-dark text-light' : 'bg-light text-dark'}`} style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className={`card shadow-lg ${isDarkTheme ? 'bg-dark text-light border-secondary' : 'bg-white text-dark'}`}>              
              <div className="card-header border-0 bg-transparent d-flex justify-content-end gap-2 pt-3 px-3">
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                    {language.toUpperCase()}
                  </button>
                  <ul className="dropdown-menu">
                    <li><button className="dropdown-item" onClick={() => changeLanguage('en')}>English</button></li>
                    <li><button className="dropdown-item" onClick={() => changeLanguage('fr')}>Français</button></li>
                    <li><button className="dropdown-item" onClick={() => changeLanguage('ar')}>العربية</button></li>
                  </ul>
                </div>
                <button 
                  className={`btn ${isDarkTheme ? 'btn-light' : 'btn-dark'}`}
                  onClick={toggleTheme}
                >
                  {t('themeSwitch')}
                </button>
              </div>
              <div className='row p-3'>
                <div className="col-md-5 d-flex align-items-center justify-content-center">
                  <img 
                    src="me.jpeg" 
                    className="img-fluid shadow" 
                    style={{ height: '400px', objectFit: 'cover', width: '250px',objectFit: 'cover' }} 
                    alt="profile"
                  />
                </div>
                <div className="col-md-7">
                  <h4 className="fw-bold mb-3 text-center">{texts[language].name}</h4>
                  <p style={{ textAlign: 'justify' }}>{texts[language].description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
};

export default App;
