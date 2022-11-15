var form=document.getElementById('Detail')

form.addEventListener('submit',storeDetails)

function storeDetails(e){
    e.preventDefault()
    var name=document.getElementById('uname').value 
    var emailid=document.getElementById('email').value 
    var age=document.getElementById('age').value 
    

    var userobj={
        'name':name,
        'email':emailid,
        'age':age
    }
    localStorage.setItem(userobj.email,JSON.stringify(userobj))

    var userinfo=JSON.parse(localStorage.getItem(emailid))
    var li = document.createElement('li')
    li.className='Userinfo'
    li.appendChild(document.createTextNode(userobj.name))
    li.appendChild(document.createTextNode(" "+" "+userobj.email))
    li.appendChild(document.createTextNode(" "+" "+userobj.age))

    var itemList = document.getElementById('items')
    itemList.appendChild(li)
}