const baseUrl = "https://ensigntech94.github.io/wdd230/";
const linksURL = "https://ensigntech94.github.io/wdd230/data/links.json";

const list = document.querySelector('.activities');


async function getLinksData(url) {
    const response = await fetch(url);
    if (response.ok){
        let data = await response.json();
        // console.log(data.lessons)
        displayLinks(data.lessons);
    }
}

function displayLinks(weeks) {
    
    weeks.forEach(week => {
        let lesson = week.lesson;
        console.log(lesson)
        let links = week.links // this is an array

        links.forEach(item => {
            const aTag = document.createElement('a')
            let url = item.url;
            let title = item.title;
            const li = document.createElement('li')

            aTag.setAttribute('href', url)
            aTag.textContent = `${title} - Week: ${lesson}`
            console.log(url)
            console.log(title)

            li.appendChild(aTag)
            list.appendChild(li)
        });

    }); 
}

getLinksData(linksURL)