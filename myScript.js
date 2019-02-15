function main() {
    var properties = {
        "戰士": {
            3:"有軍戰士護甲+6",
            6:"有軍戰士護甲+8(14)"
        },
        "法師": {
            3:"敵軍的魔法抗性-50",
            6:"敵軍的魔法抗性-30(80)"
        },
        "刺客": {
            3:"友方刺客+10%概率4倍傷害",
            6:"友方刺客+20%概率4倍傷害(30%)"
        },
        "術士": {
            3:"20%吸血",
            6:"30%吸血(50%)"
        },
        "獵人": {
            3:"獵人攻擊力+25%",
            6:"獵人攻擊力+35%(60%)"
        },
        "騎士": {
            2:"友方騎士+25%時間減傷護盾",
            4:"友方騎士+35%時間減傷護盾",
            6:"友方騎士+45%時間減傷護盾"
        },
        "工匠": {
            2:"友方生命恢復速度+15",
            4:"友方生命恢復速度+25(40)"
        },
        "德魯伊": {
            2:"將兩個一星升為二星",
            4:"將兩個兩星生為三星"
        },
        "薩滿": {
            2:"開始時將隨機敵方變成青蛙六秒"
        },
        "惡魔獵手": {
            1:"視為敵方一個惡魔存在",
            2:"所有惡魔視為同一種類"
        },
        "精靈": {
            3:"+25%閃避",
            6:"+25%閃避(44)"
        },
        "龍": {
            3:"友方龍初始法力值為100",
            6:"+25%閃避(44)"
        },
        "人類": {
            2:"人類有20%機率繳械三秒",
            4:"人類有25%機率繳械三秒(45%)",
            6:"人類有20%機率繳械三秒(75%)"
        },
        "野獸": {
            2:"所有友軍攻擊力+10%",
            4:"所有友軍攻擊力+15%(25%)",
            6:"所有友軍攻擊力+20%(45%)"
        },
        "地精": {
            3:"一個隨機友軍護甲+15 生命恢復+10",
            6:"所有友軍地精護甲+15 生命恢復+10"
        },
        "獸人": {
            3:"友方獸人最大生命+250",
            6:"友方獸人最大生命+350(600)"
        },
        "娜迦": {
            3:"友方魔法抗性+20",
            6:"友方魔法抗性+40(60)"
        },
        "巨魔": {
            3:"友方巨魔的攻擊速度+30",
            6:"友方的攻擊速度+30(巨魔+60)"
        },
        "亡靈": {
            3:"所有敵軍護甲-5",
            6:"所有敵軍護甲-7(-12)"
        },
        "惡魔": {
            1:"唯一則攻擊時，對敵方造成額外50%存粹傷害"
        },
        "元素": {
            2:"有30%機率使攻擊者石化3秒",
            4:"有30%機率使攻擊者石化3秒(60%)",
        },
        "矮人": {
            2:"自身攻擊距離+300",
        },
        "食人魔": {
            1:"食人魔血量+10%",
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