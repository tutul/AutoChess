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
            subNode.innerHTML = '('+item+')'+properties[property][item];
            abilityNode.appendChild(subNode);
        }
        var propertyNode = document.createElement("div");
        propertyNode.innerHTML = property;
        var roleNode = document.createElement("div");
        for(item in data) {
            console.log(data[item]['type']);
            if(data[item]['type'].includes(property)) {
                roleNode.innerHTML += item + ' ';
            }
        }
        lineNode.appendChild(abilityNode);
        lineNode.appendChild(propertyNode);
        lineNode.appendChild(roleNode);
        mainNode.appendChild(lineNode);
    };
    

}