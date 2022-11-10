const header = <h1 className="title">Witaj na stronie!</h1>

const classBig = "big";

const handleClick = () => alert("klik")

const main = (
    <div>
        <h1 onClick={handleClick} className="red">Pierwszy artykuł</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aperiam id sit neque odit totam dicta? Nostrum impedit similique assumenda libero dicta, reiciendis, iste atque maxime a officiis optio cumque.</p>
    </div>
)

const text = "stopkaaaa"

const footer = (
    <footer className={classBig}>
        <p>{text}</p>
    </footer>
)

const app = [header, main, footer]

ReactDOM.render(app, document.getElementById("root"));