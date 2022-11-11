'use strict'
async function fetchData() {
    let result = null;
    try {
        const response = await fetch('https://reqres.in/api/users?per_page=12');
        result = await response.json();
    } catch (e) {
        console.log(e);
    }
    console.log(result);
    console.log('___________');
    console.log('Фамилии всех пользователей');
    console.log('___________');
    result.data.forEach((item, index) => {
        console.log(`${index+1}.${item.last_name}`);
    })
    console.log('___________');
    console.log('Пользователи, фамилии которых начинаются на F');
    console.log('___________');
    const startsFromF = result.data.filter((item) => {
        return item.last_name[0] === 'F';
    })
    console.log(startsFromF);
    console.log('___________');
    console.log('Наша база содержит данные следующих пользователей');
    console.log('___________');

    const usersInfo = result.data.reduce((acc, item, index) => {
        let finalInfo = `${item.first_name} ${item.last_name}`;
        if (index !== result.data.length) {
            finalInfo +=',';
        } else {
            finalInfo +='.';
        }
        acc += finalInfo;
        return acc
    },'')
    console.log(usersInfo);
    console.log('___________');
    console.log('Названия ключей');
    console.log('___________');
    console.log(Object.keys(result.data[0]));
}

fetchData()