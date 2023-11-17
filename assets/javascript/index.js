/* ============== BATTERY =============*/
initbattery()

function initbattery() {
    const batteryLiquid=document.querySelector(".battery_liquid"),
          batteryStatus=document.querySelector(".battery_status"),
          batteryPercentage=document.querySelector(".battery_percentage")

    navigator.getBattery().then((batt) => {
        updateBattery= () => {
            let level=math.floor(batt.level * 100)
            batteryPercentage.innerHTML=level+'%'



            batteryLiquid.style.height=`${parseInt(batt.level * 100)}%`


            if(level==100){
                batteryStatus.innerHTML=`Full battery <i class="ri-fill-green-color"></i>`
                batteryLiquid.style.height='103%'
            }
            else if (level <= 20&! batt.charging){
                batteryStatus.innerHTML=`Low battery <i class="ri-plug-line animated-red"></i>`
            }
            else if(batt.charging){
                batteryStatus.innerHTML=`charging....<i class="ri-flashlight-line animated-green"></i>`
            }
            else{
                batteryStatus.innerHTML=''
            }if (level <=20){
                batteryLiquid.classList.add('gradient-color-red')
                batteryLiquid.classList.remove('gradient-color-orange','gradient-color-yellow','gradient-color-green')
            }
            else if(level<=40){
                batteryLiquid.classList.add('gradient-color-orange')
                batteryLiquid.classlist.remove('gradient-color-red','gradient-color-yellow','gradient-color-green')
            }
            else if(level <=80){
                batteryLiquid.classlist.add('gradient-color-yellow')
                batteryLiquid.classlist.remove('gradient-color-red','gradient-color-orange','gradient-color-green')
            }
            else {
                batteryLiquid.classlist.add('gradient-color-green')
                batteryLiquid.classlist.remove('gradient-color-red','gradient-color-orange','gradient-color-yellow')
            }
        }
        updateBattery()


        batt.addEventlistener('chargingchange',() =>{updateBattery()})
        batt.addEventlistener('levelchange',() =>{updateBattery()})
    })
}