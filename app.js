let elemTh = document.createElement('th');
let i = 0;

document.querySelector("#page_content > div:nth-child(3)").innerHTML = '';
document.getElementById("AccountDataTable_1").innerHTML = '';
document.querySelector("#page_content > div:nth-child(5)").innerHTML = '';

document.querySelector("#AccountDataTable_2 > thead > tr").appendChild(elemTh); 

let blocks = document.querySelectorAll("#AccountDataTable_2 > tbody > tr");
blocks.forEach(
	(element) =>{ 
		i++; 
		let elemTd = document.createElement('td');
		let elemImg = document.createElement('img');
		let href = document.querySelector("#AccountDataTable_2 > tbody > tr:nth-child("+i+") > td:nth-child(3) > a").href.substr(35);
		
		elemImg.src = 'https://cdn.akamai.steamstatic.com/steam/apps/'+href+'/header.jpg';
		document.querySelector('#AccountDataTable_2 > tbody > tr:nth-child('+i+')').appendChild(elemTd);
		document.querySelector('#AccountDataTable_2 > tbody > tr:nth-child('+i+') > td:nth-child(5)').appendChild(elemImg);
	}
)

document.querySelector("#page_content > div:nth-child(8) > span.AccountDataLoadMore").addEventListener('click', function() {
	setTimeout(() => {
		blocks.forEach(
			(element) =>{ 
				i++; 
				elemTd = document.createElement('td');
				elemImg = document.createElement('img');
				href = document.querySelector("#AccountDataTable_2 > tbody > tr:nth-child("+i+") > td:nth-child(3) > a").href.substr(35);
				
				elemImg.src = 'https://cdn.akamai.steamstatic.com/steam/apps/'+href+'/header.jpg';
				document.querySelector('#AccountDataTable_2 > tbody > tr:nth-child('+i+')').appendChild(elemTd);
				document.querySelector('#AccountDataTable_2 > tbody > tr:nth-child('+i+') > td:nth-child(5)').appendChild(elemImg);
			}
		)
	}, 1000)
})
