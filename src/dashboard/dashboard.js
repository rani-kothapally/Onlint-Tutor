import React,{usestate}from 'react'

export default function Dashboard(){
return(
  <>
  <div className='header'>
    <div className='pageLogo'>Online Tutor</div>
    <div className='profilePic'></div>
  </div>
  <div>
      <h3>Available Subjects</h3>
      <div className='subjectSection'>
        <div className='subjectBlock'>Mathematics</div>
        <div className='subjectBlock'>Science</div>
        <div className='subjectBlock'>Commerce</div>
        <div className='subjectBlock'>Computer Science</div>
        <div className='subjectBlock'>History</div>
        <div className='subjectBlock'>English Grammer</div>
      </div>
    </div>
  </>
);
}
