const dataExample=[
    {
        company:'Alfreds<b>Futterkister</b>',
        chef:'Maria Anders',
        country: 'Germany'
    },
    {
        company:'Centro comercial',
        chef:'Francisco Chang',
        country: 'Mexico'
    },
    {
        company:'Ernst Handel',
        chef:'Roland Mendel',
        country: 'Austria'
    },
];
let gridView=new GridView();
const data={//іде створення масиву даних
    header:'Hello',
    headerClass: ['header','site-header'],
    attribute: {
    'company':{
        'label':'Компанія',
        'src':'html',
    },
    'chef':{
        'label':'Директор'
    },
    'country':{
        'label':'Країна',
        'value':(data)=>{
            if (data['country']==='Germany'){
                return data['country']+' map'
            }else{
                return data['country'];
            }
        }
    },
    },
    data:dataExample,
}
gridView.render(data); //іде виведення даних в таблицю