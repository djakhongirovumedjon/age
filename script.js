axios.get('https://dummyjson.com/users')
    .then(res => reload(res.data.users))
    .catch(err => console.log(err))


let container = document.querySelector('.container')
let container_two = document.querySelector('.container_two')
let container_three = document.querySelector('.container_three')
function ht(item) {
    return `
    <div class="item">
    <div class="name">
        <h2>${item.firstName} ${item.lastName}</h2>
    </div>
    <div class="age">
        <p class="grey_text">Age</p>
        <p class="age_text"><b>${item.age}</b></p>
    </div>
    </div>`
}

function reload(arr) {
    for (let item of arr) {
        if (item.age <25) {
            container.innerHTML += ht(item)
        }else if(item.age < 50){
            container_two.innerHTML += ht(item)
        }else if(item.age > 50){
            container_three.innerHTML += ht(item)
        }
        }

}

let loadeer = document.querySelector('.loader')
let body = document.body

function loader() {
    loadeer.style.display = "block"
    body.style.overflow = "hidden"
    setTimeout(() => {
        loadeer.style.display = "none"  
        body.style.overflow = "" 
    }, 1000);
}



loader()
