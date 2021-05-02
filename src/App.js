import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer'

const customer = [
  {
    'id':1,
    'image':'https://placeimg.com/64/64/1',
    'name' : "홍길동1",
    'birthday':'961212',
    'gender':'남자',
    'job' : '대학생'
  },
  {
    'id':2,
    'image':'https://placeimg.com/64/64/2',
    'name' : "홍길동2",
    'birthday':'961212',
    'gender':'남자',
    'job' : '대학생'
  },
  {
    'id':3,
    'image':'https://placeimg.com/64/64/3',
    'name' : "홍길동3",
    'birthday':'961212',
    'gender':'남자',
    'job' : '대학생'
  }
]
function App() {
  return (
    <div>
      {
        customer.map(c=>{
          return (
            
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.gender}
              job={c.job}
            />
              
          )
        })
      }
    </div>
  );
}

export default App;
