function main() {
    var properties = {
        "人類": {
            2:"人類有20%機率繳械三秒"
        },
        "戰士": {
            3:"有軍戰士護甲+6",
            6:"有軍戰士護甲+8(14)"
        }
    }
    var data = {
        "海軍上將": {
            "type": ["人類","戰士"],
            "level": "purple"
        },
        "巨牙海民": {
            "type": ["野獸","戰士"],
            "level": "white"
        },
        "狼人": {
            "type": ["野獸","戰士","人類"],
            "level": "blue"
        }
    }
    var mainNode = document.getElementById("mainContainer");
    for (property in properties) {
        
        var lineNode = document.createElement("div");
        lineNode.classList.add("lineNode");
        var abilityNode = document.createElement("div");
        for(item in properties[property]) {
            var subNode = document.createElement("div");
            subNode.setAttribute('id', property+'_'+item);
            subNode.setAttribute('name', property);
            subNode.classList.add("abilityNode");
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
                subNode.classList.add("roleNode");
                subNode.innerHTML = item;

                subNode.addEventListener('click', function(e){
                    var nodeName = e.target.getAttribute("name")
                    if(nodeName && !e.target.classList.contains("roleNode-active")) {
                        var nodelist = document.getElementsByName(nodeName) || [];
                        for(let i = 0, length1 = nodelist.length; i < length1; i++){
                            nodelist[i].classList.add("roleNode-active");
                        }
                    } else if (nodeName && e.target.classList.contains("roleNode-active")) {
                        var nodelist = document.getElementsByName(nodeName) || [];
                        for(let i = 0, length1 = nodelist.length; i < length1; i++){
                            nodelist[i].classList.remove("roleNode-active");
                        }
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
                            
                            for(let i = 1; i <= number; i++){
                                let ability = document.getElementById(propertyList[property]+'_'+i) || null;
                                if(ability) {
                                    ability.classList.add("roleNode-active");
                                }
                            }

                            for(let i = number+1 ; i <= 10; i++){
                                let ability = document.getElementById(propertyList[property]+'_'+i) || null;
                                if(ability) {
                                    ability.classList.remove("roleNode-active");
                                }
                            }
                            
                        }
                    }

                });
                roleNode.appendChild(subNode);
            }
        }
        lineNode.appendChild(abilityNode);
        lineNode.appendChild(propertyNode);
        lineNode.appendChild(roleNode);
        mainNode.appendChild(lineNode);
    };
    

}