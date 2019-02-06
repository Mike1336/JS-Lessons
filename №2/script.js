class Group{
    
    constructor(department,speciality,groupNumber,studCount, classLeaderGroup){
        
        let _department;
        let _speciality;
        let _groupNumber;
        let _studCount;
        let _classLeaderGroup;

        if (typeof(department)=="string") {
                _department=department;
                this.setDep = function(department) { _department = department; }
                this.getDep = function() { return _department; }
        }else{_department="undefined"; console.log('Неправильный тип данных у department')}

        if (typeof(speciality)=="string") {
                _speciality=speciality;
                this.setSpec = function(speciality) { _speciality = speciality; }
                this.getSpec = function() { return _speciality; }
        }else{_speciality="undefined"; console.log('Неправильный тип данных у speciality')}

        if (typeof(groupNumber)=="number") {
                _groupNumber=groupNumber;
                this.setGN = function(groupNumber) { _groupNumber = groupNumber; }
                this.getGN = function() { return _groupNumber; }
         }else{_groupNumber="undefined"; console.log('Неправильный тип данных у groupNumber')}

        if (typeof(studCount)=="number") {
                _studCount=studCount;
                this.setSC = function(studCount) { _studCount = studCount; }
                this.getSC = function() { return _studCount; }
         }else{_studCount="undefined"; console.log('Неправильный тип данных у studCount')}

        if (typeof(classLeaderGroup)=="string") {
                _classLeaderGroup=classLeaderGroup;
                this.setCLG = function(classLeaderGroup) { _classLeaderGroup = classLeaderGroup; }
                this.getCLG = function() { return _classLeaderGroup; }
         }else{_classLeaderGroup="undefined"; console.log('Неправильный тип данных у classLeaderGroup')}
    }
}