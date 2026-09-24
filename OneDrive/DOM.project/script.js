let add =document.querySelector('#add');
let h4 =document.querySelector('h4');
let check = 0;



add.addEventListener('click',function(){
    if(check == 0){
    h4.innerHTML = 'Friend';
    h4.style.color = 'green'
    add.innerHTML = 'Remove'
    check = 1
    }else{
        h4.innerHTML = 'Strangers';
        h4.style.color = 'red'
        add.innerHTML = 'Add Friend'

        check = 0
    }
    

})