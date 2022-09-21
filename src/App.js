import IdCard from './components/IdCard.jsx';
import './App.css';
import Greetings from './components/Greetings';
import Random from './components/Random.jsx';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard.jsx';
import Rating from './components/Rating'
import DriverCard from './components/DriverCard.jsx';
const idCardData = [
  {
    lastName: 'Doe',
    firstName: 'John',
    gender: 'male',
    height: 178,
    birth: new Date('1992-07-14'),
    picture: 'https://randomuser.me/api/portraits/men/44.jpg',
  },
  {
    lastName: 'Delores',
    firstName: 'Obrien',
    gender: 'female',
    height: 172,
    birth: new Date('1988-05-11'),
    picture: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
];

function App() {
  const idCardItems = idCardData.map((ele) => {
    return <IdCard idCardData={ele} key={Math.random()} />;
  });

  return (
    <div className="App">
      {idCardItems}
      <Greetings>Léo</Greetings>
      <Random />
      <BoxColor />
      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white"
      />
      <Rating>3</Rating>
      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: 'Audi A3',
          licensePlate: 'BE33ER',
        }}
      />
    </div>
  );
}

export default App;
