import React,{useState} from 'react'

function GetData() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [list,setList] = useState([]);

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name,email);
    const data = {name,email}
    if(name&&email){
        setList((Is)=>[...Is,data]);
        setName('');
        setEmail('');
    }
}
  return (
    <div>
        <h3>GetData</h3>
        <form onSubmit={handleSubmit}>
          <input name='name' value={name} placeholder='Name' onChange={(e)=>setName(e.target.value)} />
          <input name='email' value={email} placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
          <button>Add</button>
        </form>
        {list.map((a)=>
        <div>
          <li>{a.name}</li>
          <li>{a.email}</li>
        </div>
        )}
    </div>
  )
}

export default GetData