class Form{
    constructor(){
    }
    display(){
        var title=createElement('h2')
        title.html("CAR RACEING GAME")
        title.position(550,0)
        var input=createInput("")
        input.position(550,250)
        var button=createButton("PLAY")
        button.position(650,300)
        var greeting=createElement('h3')
        button.mousePressed(function(){
            input.hide()
            button.hide() 
            var name=input.value()
            playerCount+=1
            player.update(name)
            player.updateCount(playerCount)
            greeting.html("hello "+name)
            greeting.position(550,300)
        })
    }
}
