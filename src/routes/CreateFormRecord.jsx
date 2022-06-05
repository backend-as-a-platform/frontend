import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import AOS from 'aos';
import { Theme } from '../contexts/Theme';
import { createRecord, getFormInfo } from '../hooks/useForm';
import CreateRecordForm from '../components/Forms/CreateRecordForm';
import NavBar from '../components/Nav/NavBar';
import HeroMain from '../components/Hero/HeroMain';
import FooterAnimated from '../components/Footer/FooterAnimated';
import AuthModal, { modalTitles } from '../components/Modals/AuthModal';

const CreateFormRecord = () => {
  const [theme, setTheme] = useContext(Theme);
  const [modalTitle, setModalTitle] = useState(modalTitles[0]);
  const [showModal, setShowModal] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const { formId, recordId } = useParams();

  useEffect(() => {
    AOS.init({ mirror: true, once: true });
  }, []);

  const toggleTheme = (e) => setTheme(!theme);

  const toggleModal = (e) => {
    if (!showModal) {
      toggleToLogin(e);
    }
    setShowModal(!showModal);
  };

  const toggleToLogin = (e) => {
    setModalTitle(modalTitles[0]);
    setShowLogin(true);
  };

  const toggleToSignup = (e) => {
    setModalTitle(modalTitles[1]);
    setShowLogin(false);
  };

  return (
    <div>
      <div className="mx-auto md:max-w-full md:px-24 lg:px-14 mb-40">
        <NavBar toggleTheme={toggleTheme} showLogin={toggleModal} />
        <HeroMain />
        <CreateRecordForm
          formId={formId}
          getFormInfo={getFormInfo}
          createRecord={createRecord}
        />
        <AuthModal
          title={modalTitle}
          show={showModal}
          login={showLogin}
          toggleToLogin={toggleToLogin}
          toggleToSignup={toggleToSignup}
          onHide={toggleModal}
        />
      </div>
      <FooterAnimated />
    </div>
  );
};

export default CreateFormRecord;
