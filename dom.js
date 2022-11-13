var forms=document.getElementById('addform')

var itemlist=document.getElementById('items')

forms.addEventListener('submit',additem)

itemlist.addEventListener('click',removeitem)

function additem(e){
    e.preventDefault()

    var inputvalue=document.getElementById('item').value
    
    var list=document.createElement('li')
    list.className='list-group-item'
    
    list.appendChild(document.createTextNode(inputvalue))

    var deletebtn=document.createElement('button')
    deletebtn.className= 'btn btn-danger btn-sm float-right delete'
    deletebtn.appendChild(document.createTextNode('X'))
    list.appendChild(deletebtn)
    itemlist.appendChild(list)   
}

function removeitem(e){
    if(e.target.classList.contains='delete'){
        var li=e.target.parentElement
        itemlist.removeChild(li)
    }
}
