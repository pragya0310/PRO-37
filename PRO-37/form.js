class Form{
constructor(){
   this.input=createInput("ENTER NAME")
    this.button=createButton("play")
    this.msg=createElement("h2")
}
display(){
    var title=createElement("h1")
    title.html("MY QUIZ APP")
    title.position(200,30)

   
    this.input.position(200,100)

   
    this.button.position(200,130)
    this.button.mousePressed(()=>{
        this.input.hide()
        this.button.hide()

      
      
      
      
      
        
        this.msg.html("WELCOME "+name,200,300)
        this.msg.html("1.NAME ONE WORD STARTING AND ENDING WITH 'W'",200,100)
   
    })

}
hide(){
    this.input.hide()
    this.button.hide()
    this.msg.hide()

}
}
   
