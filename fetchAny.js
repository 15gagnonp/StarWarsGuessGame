let dataArray = new Array();


async function getStarWarsInfo(url) {
    const response = await fetch(url);
    if (response.ok)
    {
       const data = await response.json();
       dataArray.push(data);
    }
 
}
export {dataArray, getStarWarsInfo}
