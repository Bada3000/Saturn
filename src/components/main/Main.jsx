import SideBar from "/src/components/sidebar/SideBar.jsx";
import MainImg from "/public/Main.webp"
import "./Main.css"
const Main = () => {
    return <div className="main">
                <div className="container main-container">
                    <SideBar/>             
                    <main className="content">
                        <div className="content-bgi">
                            <h1>Saturn | 4 Сезон</h1>
                            <div className="server-ip">
                                <span>Saturn.gomc.fun</span>
                                <button> IP📎</button>
                            </div>
                            <img className="content-img" src={MainImg} alt="Фотография" />
                        </div> 
                        <p className="content-description">🌍 <span>Saturn</span> — это ванильный Minecraft сервер с элементами ролевой игры, где каждый игрок может найти своё место в огромном мире возможностей! 🎮✨<br /><br /><br />

                            Что мы предлагаем: <br />

                            🗺️ Открытый мир на версии Java 1.21+ с уникальной атмосферой и классическим игровым процессом. <br />
                            🧑‍⚕️ Продуманные ролевые механики, где вы можете стать кем угодно — от президента до агента СБС, судьи или лидера собственного клана. <br />
                            💿 Полезные плагины, которые улучшают игру, сохраняя её ванильный дух. <br />
                            🏛️ Регулярные ивенты, турниры, ролевые взаимодействия и многое другое. <br />
                            😂 Активное и дружелюбное сообщество, где вам всегда рады! <br />
                            Присоединяйтесь к Saturn и начните свои приключения в мире, где все зависит только от ваших действий и фантазии! 🌟 <br />
                        </p>
                    </main>
                </div>
            </div>
}
 
export default Main;