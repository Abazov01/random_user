
const body=document.body
const row = document.querySelector('.row')
const API='https://randomuser.me/api/?results=30'
const row_alt = document.createElement('div')
const out = async()=>{
    let request= await fetch(API)
    let response = await request.json()
    console.log(response)
    response.results.forEach(el =>{
        const row = document.querySelector('.row')
        const box = document.createElement('div')
        box.classList='box'
        const img = document.createElement('img')
        img.src = el.picture.large
        img.classList='img'
        const name = document.createElement('h3')
        name.innerHTML=el.name.first+'  ' + el.name.last +' '+el.name.title
        const cell = document.createElement('h6')
        cell.classList='cell'
        cell.innerHTML='cell:    '+ el.cell 
        const email = document.createElement('h6')
        email.innerHTML='email:  ' + el.email
        email.classList='email'  
        const btn = document.createElement('button')
        btn.innerHTML='Подробнее'         
        row.append(box)
        box.append(img,name,cell,email,btn)     
        btn.addEventListener('click', (e)=>{        
            row.innerHTML=''                //'Name:' + JSON.stringify(el.name.title + el.name.last)
            row_alt.classList='row_alt'
            const img_alt = document.createElement('img')
            img_alt.classList='img_alt'
            img_alt.src=el.picture.large
            const name_alt = document.createElement('h1')
            name_alt.classList='name_alt'
            name_alt.innerHTML=el.name.title+'  ' + el.name.firs +' '+el.name.last
            // const btn_alt = document.createElement('div')
            // btn_alt.innerHTML='Назад'
            // btn_alt.addEventListener('click', out())
            const email_alt = document.createElement('h6')
            email_alt.innerHTML='email:  ' + el.email
            email_alt.classList='email_alt'
            const address = document.createElement('h6')
            address.innerHTML='country:   '+el.location.country +'      city:   '+el.location.city +'   street:    ' + el.location.street.name+ ' '+el.location.street.number
            body.append(row_alt)
            row_alt.append(name_alt, img_alt, email_alt, address, btn_alt)
            const h1 = document.querySelector('.text')
            // h1.innerHTML=''
        })
    })
    
}
const btn_alt = document.createElement('button')
btn_alt.innerHTML='Назад'
btn_alt.addEventListener('click', ()=>{
    row_alt.innerHTML=''
    out()
})
out()
