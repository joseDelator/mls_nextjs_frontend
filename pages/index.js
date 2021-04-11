import Head from 'next/head'

import Postnum from './componets/Numofpostions'
import Axios from  'axios'
import Clubsala from './componets/clubsala'
import SalaGrowth from './componets/salarygrowth'
import Topsala from './componets/Topsala'
import Sala_by_post from './componets/sala_by_position'
export default function Home( {positionnum, clubsala, topten, salarybyposition}) {
  console.log(topten)
  return (
    <div>

    <h1>MLS Salary Data from   2017</h1>
    <div  className= 'grid_container'>
      <Head>
        <title>Kayla's Shop</title>
        <link rel="icon" href="/logo512.png" />
      </Head>
    
      <Clubsala clubs = {clubsala}/>
      <Topsala player={topten}/>
      <Postnum clubs = {positionnum} />
      <SalaGrowth/>
      <Sala_by_post clubs={salarybyposition}/>
      </div>
      </div>
  );
};

export const  getStaticProps = async () => {
  let numbypositions = await Axios.get('https://mls-salaries.herokuapp.com/position');
  let clubsala = await  Axios.get(`https://mls-salaries.herokuapp.com/clubsalaries`)
  let topten = await Axios.get('https://mls-salaries.herokuapp.com/topsalaries')
  let salarybyposition = await Axios.get('https://mls-salaries.herokuapp.com/positionsalariesmean')
  clubsala = clubsala.data
  const positionnum = numbypositions.data;
  topten = topten.data
  salarybyposition = salarybyposition.data
  return {
    props: {
     positionnum,
      clubsala,
      topten,
      salarybyposition,
    },
  };
};




   