import './App.css';
import Customer from './Function/Customer'

const customers = [
  {
    'id': 1,
    'image': 'http://nanirang.com/1.png',
    'name': '하양하양',
    'birthday': '112233',
    'gender': '남자',
    'job': '대학생'
  },
  {
    'id': 2,
    'image': 'http://nanirang.com/2.png',
    'name': '노랑노랑',
    'birthday': '445566',
    'gender': '여자',
    'job': '개발자'
  },
  {
    'id': 3,
    'image': 'http://nanirang.com/3.png',
    'name': '청둥청둥',
    'birthday': '778899',
    'gender': '여자',
    'job': '디자이너'
  }
]


function App() {
  return (
    <div>
      {customers.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} /> ); }) }
    </div>
  );
}

export default App;
