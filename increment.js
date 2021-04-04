const counter = document.querySelectorAll('.counter');

counter.forEach(count => {
    count.innerText ='0'

    const UpdateCounter = () =>{
        const target = +count.getAttribute('data-target')
        const c = +count.innerText

        const increment = target / 700

        if(c < target){
            count.innerText =`${Math.ceil(c+increment)}`
            setTimeout(UpdateCounter,1)
        }
        else{
            count.innerText = +target
        }

    }
    UpdateCounter()
})