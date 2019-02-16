function main() {

    var totalNumber = 0;
    var record = [];
    
    function clickRoleEvent(e){
        var nodeName = e.target.getAttribute("name");
        var numberNone = document.getElementById("totalNumber");

        if(nodeName && !e.target.classList.contains("roleNode-active")) {
            var nodelist = document.getElementsByName(nodeName) || [];
            for(let i = 0, length1 = nodelist.length; i < length1; i++){
                nodelist[i].classList.add("roleNode-active");
            }
            totalNumber++;
            numberNone.innerHTML = "Total: " + totalNumber.toString();
            record.push('+' + nodeName);
        } else if (nodeName && e.target.classList.contains("roleNode-active")) {
            var nodelist = document.getElementsByName(nodeName) || [];
            for(let i = 0, length1 = nodelist.length; i < length1; i++){
                nodelist[i].classList.remove("roleNode-active");
            }
            totalNumber--;
            numberNone.innerHTML = "Total: " + totalNumber.toString();
            record.push('-' + nodeName);
        }
        if(nodeName) {
            let propertyList = data[nodeName].type || [];
            for(property in propertyList) {
                let roleContainer = document.getElementById(propertyList[property]);
                if(!roleContainer) {
                    continue;
                }
                let rolelist = roleContainer.getElementsByTagName('div') || [];
                let number = 0;
                for (let i = 0, length1 = rolelist.length; i < length1; i++) {
                    if(rolelist[i].classList.contains("roleNode-active")) {
                        number++;
                    }
                }
                let lineContainer = document.getElementById(propertyList[property]+'_line');
                lineContainer.style.order = 10-number;
                for(let i = 1; i <= number; i++){
                    let ability = document.getElementById(propertyList[property]+'_'+i) || null;
                    if(ability) {
                        ability.classList.add("roleNode-active");
                        //ability.classList.remove("display-None");
                    }
                }

                for(let i = number+1 ; i <= 10; i++){
                    let ability = document.getElementById(propertyList[property]+'_'+i) || null;
                    if(ability) {
                        ability.classList.remove("roleNode-active");
                        //ability.classList.add("display-None");
                    }
                }
                
            }
        }

    }
    function copyRecord (e) {
        let el = document.createElement('textarea');
        el.value = record.toString();
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el); 
    }
    var allRoles = document.getElementById("allRoles");
    for(item in data) {
        var subNode = document.createElement("div");
        //subNode.setAttribute('id', property+' '+item);
        subNode.setAttribute('name', item);
        subNode.classList.add("showNodes");
        subNode.style.order = levelMapping[data[item].level];
        subNode.style.color = colorMap[data[item].level];
        subNode.innerHTML = item;
        subNode.addEventListener('click', clickRoleEvent);
        allRoles.appendChild(subNode);
    }
    var numberNode = document.createElement("div");
    numberNode.innerHTML = "Total: 0";
    numberNode.style.order = "999";
    numberNode.setAttribute('id', "totalNumber");
    allRoles.appendChild(numberNode);

    var recordNode = document.createElement("div");
    recordNode.innerHTML = "Record";
    recordNode.style.order = "1000";
    recordNode.setAttribute('id', "record");
    recordNode.addEventListener("click", copyRecord);
    allRoles.appendChild(recordNode);


    var mainNode = document.getElementById("mainContainer");
    for (property in properties) {
        var lineNode = document.createElement("div");
        lineNode.setAttribute('id', property+'_line');
        lineNode.classList.add("lineNode");
        var abilityNode = document.createElement("div");
        abilityNode.classList.add("abilityContainer");
        for(item in properties[property]) {
            var subNode = document.createElement("div");
            subNode.setAttribute('id', property+'_'+item);
            subNode.setAttribute('name', property);
            subNode.classList.add("abilityNode");
            //subNode.classList.add("display-None");
            subNode.innerHTML = '('+item+')'+properties[property][item];
            abilityNode.appendChild(subNode);
        }

        var propertyNode = document.createElement("div");
        propertyNode.classList.add("propertyNode");
        propertyNode.innerHTML = property;

        var roleNode = document.createElement("div");
        roleNode.setAttribute('id', property);
        roleNode.classList.add("roleContainer");
        for(item in data) {
            if(data[item]['type'].includes(property)) {
                var subNode = document.createElement("div");
                //subNode.setAttribute('id', property+' '+item);
                subNode.setAttribute('name', item);
                subNode.style.order = levelMapping[data[item].level];
                subNode.style.color = colorMap[data[item].level];
                subNode.classList.add("roleNode");
                subNode.innerHTML = item;

                subNode.addEventListener('click', clickRoleEvent);
                roleNode.appendChild(subNode);
            }
        }
        lineNode.appendChild(abilityNode);
        lineNode.appendChild(propertyNode);
        lineNode.appendChild(roleNode);
        mainNode.appendChild(lineNode);
    };
    

}