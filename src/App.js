import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>

    <header>
<h1>Sally Student's Resume</h1>
<p>The resume of a studious student.</p>
</header>

<main>
<section>
<header>
<h2>Employment History</h2>
</header>
<p>I've done lots of things.</p>
<ul>
<li>Barista at Starbucks </li>
<li>
<ul>
<li>2010-2011</li>
<li>Took orders, made the best fraps, and butchered dozens of names.</li>
</ul>
</li>
<li>Volunteer at the YMCA</li>
<li>
<ul>
<li>2011-2012</li>
<li>Coached the water polo and underwater basket weaving teams.</li>
</ul>
</li>
<li>Student Counselor at USC</li>
<li>
<ul>
<li>2012-2013</li>
<li>Advised students on things.</li>
</ul>
</li>
</ul>
</section>

<section>
<header>
<h2>Education</h2>
</header>
<ul>
<li>Masters of Fine Arts UCLA 2016</li>
<li>Bachelor of Visual Arts USC 2014</li>
<li>Pasadena High School class of 2010</li>
</ul>
</section>

<p>Please contact me.</p>
<address>
<ul>
<li>Name: Sally Student</li>
<li>Email: <a href="mailto:sallystudiesharder@studylife.org?subject=Congrats,%20you%20got%20the%20job!">
sallystudiesharder@studylife.org</a></li>
<li>Phone: 415-555-5567</li>
</ul>
</address>

<img src="https://i.kym-cdn.com/photos/images/original/000/581/296/c09.jpg" height="300" alt="Image of Ilana from Broad City" />
</main>
</div>
    
  );
}

export default App;
