let addTobill = document.getElementById('addTobill');
let tablePrice = document.getElementById('tablePrice');
let tableDishes = document.getElementById('tableDishes');
let tableName = document.getElementById('tableName');
let ul1 = document.getElementById('table1');
let ul2 = document.getElementById('table2');
let ul3 = document.getElementById('table3');
let baseUrl = 'https://crudcrud.com/api/88771d5536c44a78973442edb95228ae';


addTobill.addEventListener('click',addToCrud);


window.addEventListener('DOMContentLoaded',()=>{
    axios.get(`${baseUrl}/billpayment`).then((res)=>{
        for(let i = 0;i<res.data.length;i++){
            showScreen(res.data[i]);
        }
    })
})

function addToCrud (){
    let myObj = {
        "tablePrice" : tablePrice.value,
        "tableName" : tableName.value,
        "tableDishes" : tableDishes.value
    }
    axios.post(`${baseUrl}/billpayment`,myObj).then((res)=>console.log(res))
    .catch((err)=>console.error(err));
    showScreen(myObj);
}


function showScreen(myObj){
    // e.preventDefault();
    let ulNo = 0;
    let li = document.createElement('li');
    let textTable = document.createTextNode(`${myObj.tablePrice} -- ${myObj.tableName} -- ${myObj.tableDishes}`);
    li.appendChild(textTable);
    
    if(myObj.tableName ==='Table1'){
        ul1.appendChild(li)
        ulNo = 1;
    }
    if(myObj.tableName ==='Table2'){
        ul2.appendChild(li)
        ulNo =2;
    }if(myObj.tableName ==='Table3'){
        ul3.appendChild(li);
        ulNo = 3;
    }
    let deleteOrder = document.createElement('input');
    deleteOrder.type= 'button';
    deleteOrder.value = 'DeleteOrder';
    li.appendChild(deleteOrder)
    deleteOrder.onclick = () =>{
        if(myObj.tableName ==='Table1'){
            ul1.removeChild(li)
            axios.delete(`${baseUrl}/billpayment/${myObj._id}`)
        }
        if(myObj.tableName ==='Table2'){
            ul2.removeChild(li)
            axios.delete(`${baseUrl}/billpayment/${myObj._id}`)
        }
        if(myObj.tableName ==='Table3'){
            ul3.removeChild(li)
            axios.delete(`${baseUrl}/billpayment/${myObj._id}`)
        }
        
    }
    

}