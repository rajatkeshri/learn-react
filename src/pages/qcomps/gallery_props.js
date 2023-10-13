function DisplayImage({person}){
  return (
      <section className="profile">
        <h2>{person.name}</h2>
        <img
          className="avatar"
          src={person.url}
          alt={person.name}
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b>
            {person.profession}
          </li>
          <li>
            <b>Awards: {person.awardnumber} </b>
            ({person.awards})
          </li>
          <li>
            <b>Discovered: </b>
            {person.discovered}
          </li>
        </ul>
      </section>
  );
}

export default function Gallery() {

  return (
    <div>
      <h1>Notable Scientists</h1>
      <DisplayImage person={{name:'Maria Skłodowska-Curie',
        url: 'https://i.imgur.com/szV5sdGs.jpg',
        profession: 'physicist and chemist',
        awardnumber: "4",
        awards: "Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal", 
        discovered: "polonium (element)"}}/>


      <DisplayImage person={{name:'Katsuko Saruhashi',
        url: 'https://i.imgur.com/YfeOqp2s.jpg',
        profession: 'geochemist',
        awardnumber: "4",
        awards: "Miyake Prize for geochemistry, Tanaka Prize", 
        discovered: "a method for measuring carbon dioxide in seawater"}}/>
    </div>
  );
}
