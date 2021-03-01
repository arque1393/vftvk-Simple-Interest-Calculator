var slider = document.getElementById('input2')
var output = document.getElementById('rangevalue')
function display(){    
    output.innerText = slider.value +'%'
}

var list1 = document.getElementById('list')
for (var i = 1; i<=100; i++){
    var o1 = document.createElement('option')
    o1.value = i;
    o1.innerHTML = i;
    list1.options.add(o1)
}

function si(){
    a = Number(document.getElementById('input1').value);
    b = Number(document.getElementById('input2').value);
    c = Number(document.getElementById('list').value);
    if (a<0){
        alert('Please Enter a Positive Number')
    }
    else {
        d = (a*b*c)/100;
        x = new Date();
        x = 2000 + x.getYear()%100 + c;
        p = document.getElementById('1');
        p.innerHTML = 'If you deposit ' + a.toString() + '<br>at an interest rate of '+b.toString()+'% , <br>you will recive an amount ' + d.toString()+' ,<br> in the year ' + x.toString()  ;
    }
}
