let tg=window.Telegram.WebApp
let btn = document.querySelector("#click")

btn.onClick=()=>{
    if (tg.MainButton.isVisible){
        tg.MainButton.hide()
    }else{
        tg.MainButton.setText("ЛАЙК!")
        tg.MainButton.show()
    }
}

tg.expand














