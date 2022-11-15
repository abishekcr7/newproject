var form=document.getElementById('Detail')
var itemList = document.getElementById('items')
form.addEventListener('submit',storeDetails)
itemList.addEventListener('click', removeItem)


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
    li.appendChild(document.createTextNode(userinfo.name))
    li.appendChild(document.createTextNode(" "+" "+userinfo.email))
    li.appendChild(document.createTextNode(" "+" "+userinfo.age))

    
    
    var editBtn = document.createElement('button')
    editBtn.appendChild(document.createTextNode('EDIT'))
    li.appendChild(editBtn)

    var deleteBtn = document.createElement('button')
    deleteBtn.appendChild(document.createTextNode('Delete'))
    deleteBtn.className='delete'
    li.appendChild(deleteBtn)
    itemList.addEventListener('click', removeItem)
    

    
    itemList.appendChild(li)
    
}


function removeItem(e){
        if(e.target.classList.contains('delete')){
          if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
            
          }
        }
      }
