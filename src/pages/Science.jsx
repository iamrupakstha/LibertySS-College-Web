import React from 'react'
import PageHeader from '../components/PageHeader';
import scienceImg from '../assets/science/science1.png';
import '../styles/Program.css';

const Science = () => {
  return (
    <div>
        <PageHeader title="Science"/>
        <section>
            <div className="programs">

                <h1>+2 Science</h1>
                <div className="intro">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio adipisci officia odit ipsa consectetur a tenetur eligendi voluptatum corporis magnam reiciendis animi hic, unde nam repellat quam architecto molestiae. Doloremque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore placeat modi mollitia, enim quae, exercitationem perferendis nisi animi quas eligendi alias, ea omnis nemo suscipit dolores deleniti quasi doloremque architecto!</p>

                    <table>
                        <tr>
                            <th>Programs</th>
                            <th>Duration</th>
                            <th>Credit Hours</th>
                            <th>Board</th>
                        </tr>
                        <tr>
                            <td>+2 Sciecne</td>                        
                            <td>2 Years</td>
                            <td>120</td>
                            <td>NEB</td>
                        </tr>
                    </table>
                </div>
                <div className="course-module">
                    <div className="module">
                        <h3>Course Module</h3>

                        <div className="info-module">

                            <div className="class">

                            
                                <h3>Class XI</h3>
                            <ol>
                                 <li>Com. Nepali</li>
                                 <li>Com. English</li>
                                 <li>Basic Mathematics OR Social Studies</li>
                                 <li>Physics</li>
                                 <li>Chemistry</li>
                                 <li>Biology or Computer Science</li>
                            </ol>
                        

                        
                                <h3>Class XII</h3>
                                    <ol>
                                         <li>Com. Nepali</li>
                                         <li>Com. English</li>
                                         <li>Basic Mathematics OR Social Studies</li>
                                         <li>Physics</li>
                                         <li>Chemistry</li>
                                         <li>Biology or Computer Science</li>
                                    </ol>
                       

                        <div className="career">
                            <h3>Careers</h3>
                            <ol>
                                <li>Engineering <p>-Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eaque molestias id expedita. Dicta numquam aliquam, praesentium earum repudiandae mollitia velit, dolore rem ratione ullam a quo unde? Dolore, asperiores!</p> </li>
                                <li>Medical Sectors <p>-Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eaque molestias id expedita. Dicta numquam aliquam, praesentium earum repudiandae mollitia velit, dolore rem ratione ullam a quo unde? Dolore, asperiores!</p> </li>
                                <li>IT coures - BIT/BCS/BSc. CSIT<p>-Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eaque molestias id expedita. Dicta numquam aliquam, praesentium earum repudiandae mollitia velit, dolore rem ratione ullam a quo unde? Dolore, asperiores!</p> </li>
                                <li>Business/Management <p>-Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eaque molestias id expedita. Dicta numquam aliquam, praesentium earum repudiandae mollitia velit, dolore rem ratione ullam a quo unde? Dolore, asperiores!</p> </li>
                                <li>Arts <p>-Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eaque molestias id expedita. Dicta numquam aliquam, praesentium earum repudiandae mollitia velit, dolore rem ratione ullam a quo unde? Dolore, asperiores!</p> </li>
                                <li>Education<p>-Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eaque molestias id expedita. Dicta numquam aliquam, praesentium earum repudiandae mollitia velit, dolore rem ratione ullam a quo unde? Dolore, asperiores!</p> </li>
                            </ol>
                        </div>
                        </div>

                        <div className="image">
                            <img src={scienceImg}                            alt="Science" />
                        </div>
                        

                        </div>

                        
                        
                    </div>
                    <div className="image">

                    </div>
                </div>
            </div>
        </section>

    </div>
  )
}

export default Science