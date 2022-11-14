var form=document.getElementById('Detail')

form.addEventListener('submit',storeDetails)

function storeDetails(e){
    e.preventDefault()
    var name=document.getElementById('uname').value 
    var age=document.getElementById('age').value 
    var gender=document.getElementById('gender').value 
    localStorage.setItem('Name',name)
    localStorage.setItem('Gender',gender)
    localStorage.setItem('age',age)
}