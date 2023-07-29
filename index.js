
    var numberOfButtons = document.querySelectorAll(".drum").length;

    for(let i=0; i<numberOfButtons; i++)
    {
        document.querySelectorAll("button")[i].addEventListener("click", function () 
    {
       //function code for event listerner
        // alert("I got Clicked");

        // var audio = new Audio("sounds/tom-1.mp3");
        // audio.play();

       // this.style.color = "white";

       var buttonPress = this.innerHTML;
       makeSound(buttonPress);
       buttonAnimation(buttonPress);
        
    });
    }
    
    

        document.addEventListener("keypress", function(event){
            makeSound(event.key);
            buttonAnimation(event.key);
        })

        function makeSound(key)
        {
            switch (key){
                case "w": var audio = new Audio("sounds/crash.mp3");
                 audio.play();
                 break;
    
                 case "a": var audio = new Audio("sounds/kick-bass.mp3");
                 audio.play();
                 break;
    
                 case "s": var audio = new Audio("sounds/snare.mp3");
                 audio.play();
                 break;
    
                 case "d": var audio = new Audio("sounds/tom-1.mp3");
                 audio.play();
                 break;
    
                 case "j": var audio = new Audio("sounds/tom-2.mp3");
                 audio.play();
                 break;
    
                 case "k": var audio = new Audio("sounds/tom-3.mp3");
                 audio.play();
                 break;
    
                 case "l": var audio = new Audio("sounds/tom-4.mp3");
                 audio.play();
                 break;
    
            }
        }


        function buttonAnimation(currentKey)
        {
            var activeButton = document.querySelector("."+currentKey);
            activeButton.classList.add("pressed");

            setTimeout(function(){
                activeButton.classList.remove("pressed");
            }, 100);
        }

        var object1 = {
            name: "navin",
            age:24,
            job:"yes",
            description: function(){
                console.log("my name is "+this.name);
            }
        }
        
            function Person (name, age, job) {
                this.name = name;
                this.age = age;
                this.job = job;
                this.description = function(){
                    console.log("my name is "+this.name);
                }
            }
    
            var object2 = new Person("snehal", 24, "yes");
            console.log(object1);
            console.log(object2);
            object1.description();
            object2.description();