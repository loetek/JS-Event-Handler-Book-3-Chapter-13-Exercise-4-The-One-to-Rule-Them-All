
const theOneToRuleThemAll = (event) => {

    var x = event.target.id;
    console.log (x);
    if (x === "activate-flight"){
        let reClass = document.getElementById('flight');
        reClass.classList.remove('disabled');
        reClass.classList.add('enabled');
        
    }if (x === "activate-mindreading"){
        let reClass = document.getElementById('mindreading');
        reClass.classList.remove('disabled');
        reClass.classList.add('enabled');
        
    }if (x === "activate-xray"){
        let reClass = document.getElementById('xray');
        reClass.classList.remove('disabled');
        reClass.classList.add('enabled');
        
    }if (x === "activate-all"){
        let reClass = document.getElementById('flight');
        reClass.classList.remove('disabled');
        reClass.classList.add('enabled');
        let reClass = document.getElementById('mindreading');
        reClass.classList.remove('disabled');
        reClass.classList.add('enabled');
        let reClass = document.getElementById('xray');
        reClass.classList.remove('disabled');
        reClass.classList.add('enabled');
        
    }if (x === "deactivate-all"){
        let reClass = document.getElementById('flight');
        reClass.classList.remove('enabled');
        reClass.classList.add('disabled');
        let reClass2 = document.getElementById('mindreading');
        reClass2.classList.remove('enabled');
        reClass2.classList.add('disabled');
        let reClass3 = document.getElementById('xray');
        reClass3.classList.remove('enabled');
        reClass3.classList.add('disabled');

        
    }
    

}
addEventListener("click", theOneToRuleThemAll)