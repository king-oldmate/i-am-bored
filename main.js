document.querySelector('button').addEventListener('click', randomActivity)

function randomActivity(){
    console.log('hi')
    const url = "http://www.boredapi.com/api/activity/"
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.table(data)
            document.querySelector('h1').innerText = data.activity
            const type = data.type
            const emoji = document.querySelector('h2')
            switch(type){
                case 'education':
                    emoji.innerText = '📙'
                    emoji.setAttribute("alt", "education")
                    break
                case 'recreational':
                    emoji.innerText = '🎭'
                    emoji.setAttribute("alt", "recreational")
                    break
                case 'social':
                    emoji.innerText = '👥'
                    emoji.setAttribute("alt", "social")
                    break
                case 'diy':
                    emoji.innerText = '🔨'
                    emoji.setAttribute("alt", "DIY")
                    break
                case 'charity':
                    emoji.innerText = '♥️'
                    emoji.setAttribute("alt", "charity")
                    break
                case 'cooking':
                    emoji.innerText = '👨‍🍳️'
                    emoji.setAttribute("alt", "cooking")
                    break
                case 'relaxation':
                    emoji.innerText = '😌'
                    emoji.setAttribute("alt", "relaxation")
                    break
                case 'music':
                    emoji.innerText = '🎵'
                    emoji.setAttribute("alt", "music")
                    break
                case 'busywork':
                    emoji.innerText = '🐝'
                    emoji.setAttribute("alt", "busywork")
                    break
            }
        })
        .catch(err => console.log(`error ${err}`))
}