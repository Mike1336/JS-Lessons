    let first = {
        name: "first point",
        x: 10,
        y: 20,  
        sayObj: ()=>console.log('Its "first" object!')       
    };

    let shape = {
        name: "triangle",
        sayObj: ()=>console.log('Its "shape" object!')
    };

    let car = {
        name: "Nissan GTR",
        maxSpeed: 300,
        sayObj: ()=>console.log('Its "car" object!')
    };


let arrObject = [first, shape, car];


let getObjMethod = (callback)=>{
    callback();
}

let myFunc = (arrayObjects)=>{

            let maxObj;
            let maxCount=0;
            
            arrayObjects.forEach(function(objName){
            let svCount=0;
                for (let key in objName){//Подсчет количества свойств у объектов
                    svCount++;
                };
                if (svCount>maxCount) { //Нахождение максимального количества свойств и определение объекта.
                    maxCount=svCount;
                    maxObj=objName;
                };           
            });
            
        console.log('Больше всего свойств ('+maxCount+') у объекта: '+maxObj['name']);

        getObjMethod(()=>{
            let lastObj = arrayObjects[arrayObjects.length-1];
                lastObj.sayObj();
        });
}
myFunc(arrObject);