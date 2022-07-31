import Layout from "../components/layout";

export default function Contacts() {
  return(
    <Layout>
      <div className="wrapper">
        <h1>Контакты</h1>
        <div className="contacts-blocks">
          <a href="" className="contacts-block">
            <div className="contacts-block__img">
              <img src="./img/icons/telegram.svg" alt="" />
            </div>
            <div className="contacts-block__text">
              <p href="/">arseniyivanov</p>
              <span>лучше пишите в телеграм</span>
            </div>
          </a>
          <a href="" className="contacts-block">
            <div className="contacts-block__img">
              <img src="./img/icons/gmail.svg" alt="" />
            </div>
            <div className="contacts-block__text">
              <p href="/">arseniyivanovweb<br />@gmail.com</p>
              <span>можно и на почту, но отвечу вам не сразу :(</span>
            </div>
          </a>
        </div>
      </div>
    </Layout>
  )
}