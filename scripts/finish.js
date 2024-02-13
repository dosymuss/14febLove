const main = document.querySelector(".main")

const winner = []

let max = 0

const men = JSON.parse(localStorage.getItem("men"))

for (let key in men) {
    if (men[key] > max) {
        max = men[key]
    }
}
for (let key in men) {
    if (men[key] === max) {
        winner.push(String(key))

    }
}

if (winner.length === 1) {
    if (winner[0] === "dosa") {
        main.innerHTML = `
        <div class="pers__main">
        <div>
            <h1>Ваша любовь это Досямбусечка</h1>
            <div class="image__div">
                <a target="_blank" href="https://www.instagram.com/dossymus/">
                    <img src="../img/dosa.jpg" alt="">
                </a>
            </div>
            <h3>
                Ну а если ты попала сюда, то я тебя поздравляю.
                Вам попался капитальный красавчик. Умный, красивый, но нытик.
            </h3>
            <div class="prise">
                <h4>
                    Ну а если серьезно. Нуржан я хочу сказать тебе спасибо. Через 9 дней уже год. И я благодарен тебе,
                    что
                    ты год со мной. Без тебя мой мир без красок. Я люблю тебя жанм. Ты мое все. Моя манкуся. Я люблю
                    тебя и
                    буду любить всегда. Ты для меня самый дорогой человек. Я могу общаться с тобой на все темы. Я тебя
                    люблю
                    и поздравляю с днем всех влюбленных
                </h4>
                <h2>Песня для Нууууржааанууусика</h2>
                <audio autoplay controls src="../audio/LOBODA - Твои Глаза.mp3"></audio>
            </div>


        </div>
    </div>
        `
    }
    if (winner[0] === "lazer") {
        main.innerHTML = `
        <div class="pers__main">
        <div>
            <h1>Ваша любовь это Лазарев</h1>
            <div class="image__div">
                <a target="_blank" href="https://kstu.kg/instituty/institut-ehlektroniki-telekommunikacii/radiolektronika/sostav-kafedry/zagolovok-po-umolchaniju-2">
                    <img src="../img/lazer.jpg" alt="">
                </a>
            </div>
            <h3>Ну до этого дедульки мне далеко. А я ведь тебя люблю жанм. 
                Прекрасной жизни вам с этим дедом</h3>
        </div>
    </div>
        `
    }
    if (winner[0] === "ark") {
        main.innerHTML = `
        <div class="pers__main">
        <div>
            <h1>Ваша любовь это Эркин</h1>
            <div class="image__div">
                <a target="_blank" href="https://kstu.kg/fakultety/ehnergeticheskii-fakultet/filosofija-i-socialnye-nauki/uturov-ehz">
                    <img src="../img/ark.jpg" alt="">
                </a>
            </div>
            <h3>Эхх знал бы я что синие штаны так тебе понравяться сам бы такие носил. 
                Ну чтож я буду желать тебе только счастья жанм. Любовь всей моей жизни
            </h3>
        </div>
    </div>
        `
    }
    if (winner[0] === "tol") {
        main.innerHTML = `
        <div class="pers__main">
        <div>
            <h1>Ваша любовь это Толомуш</h1>
            <div class="image__div">
                <a href="#">
                    <img src="../img/tol.jpg" alt="">
                </a>
            </div>
            <h3>Видимо я не такой правильный как он. Ну или просто у меня руки грубее. Ну главное Нуржанусик я тебя люблю 
            </h3>
        </div>
    </div>
        `
    }
}
else {
    main.innerHTML = `
    <h1 class = "reset__h1">Победителя нет, так чтооо  проходим заново</h1>
    `
    setTimeout(() => {
        window.location.href = "../pages/firstPage.html"
    }, 5000)
}