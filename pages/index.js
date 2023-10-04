// pages/index.js
import { useRouter } from 'next/router';

function HomePage() {
  const router = useRouter();

  const goToAboutUsPage = () => {
    router.push('/AboutUs');
  };

  const goToBlogPage = () => {
    router.push('/blog');
  };

  const goToKosikPage = () => {
    router.push('/Kosik');
  };

  const goToLoginPage = () => {
    router.push('/Login');
  };


  return (
    <div>
      <h1>Vítejte na hlavní stránce imaginárního eshopu s nábytkem</h1>
      <button onClick={goToAboutUsPage}>O nás</button>
      <button onClick={goToBlogPage}>Blog</button>
      <button onClick={goToKosikPage}>Košík</button>
      <button onClick={goToLoginPage}>Přihlášení</button>
    </div>
  );
}

export default HomePage;