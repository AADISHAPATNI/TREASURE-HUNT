class Security {

    constructor(){
         // Add code to create the input and button elements
this.input = createInput("code1");
this.input.position(100,80);
this.input.style('background', 'white')
this.input2 = createInput("code2");
this.input2.position(800,200);
this.input2.style('background', 'white')
this.input3 = createInput("code3");
this.input3.position(100,350);
this.input3.style('background', 'white')

this.button = createButton("check");
this.button.position(100,110);
this.button.style('background', 'light grey')
this.button2 = createButton("check");
this.button2.position(800,230);
this.button2.style('background', 'light grey')
this.button3 = createButton("check")
this.button3.position(100,380);
this.button.style('background', 'light grey')
}

    hide(){
        this.input.hide();
        this.input2.hide();
        this.input3.hide();
        this.button.hide();
        this.button2.hide();
        this.button3.hide();
    }

 display(){

        // Add code to make the buttons function as expected
this.button.mousePressed(() =>{
if(system.athenticate(accessCode1,this.access1.value())){
this.input.hide();
this.input2.hide();
this.input3.hide();
this.button.hide();
this.button2.hide();
this.button3.hide();
score++;
}



 });

}
}