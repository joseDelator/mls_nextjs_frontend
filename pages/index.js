import Head from 'next/head'
import Postnum from './componets/Numofpostions'
import Axios from  'axios'
import Clubsala from './componets/clubsala'
import SalaGrowth from './componets/salarygrowth'
import Topsala from './componets/Topsala'
import Sala_by_post from './componets/sala_by_position'
export default function Home( {numbypositions, clubsala, topten, salarybyposition}) {
 
  return (
    <div>

    <h1>MLS Salary Data from   2017</h1>
    <div  className= 'grid_container'>
      <Head>
        <title>MLs Salaries 2017</title>
        <link rel="icon" href="/logo512.png" />
      </Head>

      <Clubsala clubs = {clubsala}/>
      <Topsala player={topten}/>
      <Postnum clubs = {numbypositions} />
      <SalaGrowth/>
      <Sala_by_post clubs={salarybyposition}/>
      </div>
      </div>
  );
};

export const getStaticProps = async ()  => {
  let numbypositions =  await Axios.get('https://mls-salaries.herokuapp.com/position');
  let clubsala = await Axios.get(`https://mls-salaries.herokuapp.com/clubsalaries`)
  let topten =  await Axios.get('https://mls-salaries.herokuapp.com/topsalaries')
  let salarybyposition = await Axios.get('https://mls-salaries.herokuapp.com/positionsalariesmean')
  clubsala = await clubsala.data
  numbypositions = await numbypositions.data;
  topten = await topten.data
  salarybyposition = await salarybyposition.data
  return {
    props: {
      numbypositions,
      clubsala,
      topten,
      salarybyposition,
    },
  };
};




