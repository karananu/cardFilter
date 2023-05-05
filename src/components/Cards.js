import React,{useState} from 'react';
 import Card from './Card';
const Cards = (props) => {
    let courses=props.courses;
    let category=props.category;

    const [likedCourses,setLikedCousrses]=useState([]);
    function getCourses(){
        if(category==="All"){
            let allCourses=[];
            Object.values(courses).forEach(array=>{
                array.forEach(courseData=>{
                    allCourses.push(courseData);
                })
            })
            return allCourses;
        }else{
            //main sirf specific catetorgy ka data pass karungd 
            return courses[category];
        }
        
    }
  return (
    <div className='flex flex-wrap  justify-center gap-4 mb-4 '>
       {
        getCourses().map((course)=>(
            <Card key={course.id} course={course}
            likedCourses={likedCourses}
            setLikedCousrses={setLikedCousrses}/>
        ))

       } 
    </div>
  )
}

export default Cards