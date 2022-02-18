document.querySelector('button').addEventListener('click', randomActivity2)

async function randomActivity2(){
    try {
        const res = await fetch('//www.boredapi.com/api/activity/')
        const data = await res.json()
        console.table(data)
        document.querySelector('h1').innerText = data.activity
        //add some colour to the page with an emoji representing activity type
        const type = data.type
        const emoji = document.querySelector('h2')
        switch(type){
            case 'education':
                emoji.innerText = '📙'
                emoji.setAttribute("title", "education")
                break
            case 'recreational':
                emoji.innerText = '🎭'
                emoji.setAttribute("title", "recreational")
                break
            case 'social':
                emoji.innerText = '👥'
                emoji.setAttribute("title", "social")
                break
            case 'diy':
                emoji.innerText = '🔨'
                emoji.setAttribute("title", "DIY")
                break
            case 'charity':
                emoji.innerText = '♥️'
                emoji.setAttribute("title", "charity")
                break
            case 'cooking':
                emoji.innerText = '👨‍🍳️'
                emoji.setAttribute("title", "cooking")
                break
            case 'relaxation':
                emoji.innerText = '😌'
                emoji.setAttribute("title", "relaxation")
                break
            case 'music':
                emoji.innerText = '🎵'
                emoji.setAttribute("title", "music")
                break
            case 'busywork':
                emoji.innerText = '🐝'
                emoji.setAttribute("title", "busywork")
                break
        }
        //Display participants data
        const numberOfPeople = data.participants
        const partipants = document.getElementById('participants')
        switch(numberOfPeople){
            case 1:
                partipants.innerText = '🧍‍♂️'
                break
            case 2:
                partipants.innerText = '🧍‍♂️🧍‍♀️'
                break
            case 3:
                partipants.innerText = '🧍‍♂️🧍‍♀️🧍'
                break
            default:
                partipants.innerText = '🧍‍♂️🧍‍♀️🧍➕'
        }
        
    } catch(err) {
        console.log(err)
    }
}