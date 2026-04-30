import SideBar from "/src/components/sidebar/SideBar.jsx";
import MainImg from "/public/Main.webp";
import "./Main.css";
const Main = () => {
  return (
    <div className="main">
      <div className="container main-container">
        <SideBar />
        <main className="content">
          <h2>Добро пожаловать!</h2>
          <div className="content-bgi">
            <h1>Saturn | 4 Сезон</h1>
            <div className="server-ip">
              <span>Saturn.gomc.fun</span>
              <button> IP📎</button>
            </div>
            <img className="content-img" src={MainImg} alt="Фотография" />
          </div>
          <p className="content-description">
            🌍 <span>Saturn</span> — это ванильный Minecraft сервер с элементами
            ролевой игры, где каждый игрок может найти своё место в огромном
            мире возможностей! 🎮✨
            <br />
            <br />
            <br />
            Что мы предлагаем: <br />
          </p>
          <div className="offers">
            <div className="offer">
              <span>🗺️</span> Открытый мир на версии Java 1.21+ с уникальной атмосферой и
              классическим игровым процессом.
            </div>
            <div className="offer">
              <span>🧑‍⚕️</span> Продуманные ролевые механики, где вы можете стать кем угодно —
              от президента до агента СБС, судьи или лидера собственного клана.
            </div>
            <div className="offer">
              <span>💿</span> Полезные плагины, которые улучшают игру, сохраняя её ванильный
              дух.
            </div>
            <div className="offer">
              <span>🎮</span> Регулярные ивенты, турниры, ролевые взаимодействия и многое
              другое.
            </div>
            <div className="offer">
              <span>😂</span> Активное и дружелюбное сообщество, где вам всегда рады! <br />
              Присоединяйтесь к Saturn и начните свои приключения в мире, где
              все зависит только от ваших действий и фантазии!
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Main;
