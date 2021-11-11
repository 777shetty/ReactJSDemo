import React from 'react';
import './home.css';
class home extends React.Component{
    url='http://www.bridgelabz.com/'
  constructor(){
    super()
    this.state={
      
    }
  }
  render(){
    return(
      <div>
      <nav class="outer-col-1">Left Side Bar</nav>
  <div class="outer-col-2">
  	<header><h1>Header - Website Layout 4</h1></header>
    <div class="inner-row">
      <div class="inner-col">
        <article>
            <h2>First article</h2>
            <p>The pork industry is getting its last shot at California’s Proposition 12, 
                the arbitrary animal welfare law that in effect forces pork producers across the country 
                to invest millions in new housing in order to sell pork into this 40 million consumer market. Californians account 
                for 13% of the nation’s pork consumption yet import 99.87% of the pork its citizens consume.</p>
            </article>
            <article>
            <h2>Second article</h2>
            <p>The National Pork Producers Council and the American Farm Bureau Federation have 
                filed a Writ of Certiorari in the United States Supreme Court. California’s 
                Proposition 12 bans the sale of pork products in California unless the sow is housed the way California wants it to be housed. </p>
            </article>
            <article>
            <h2>Third article</h2>
            <p>The California hog industry does not exist, for all practical purposes, so the state 
                depends almost exclusively on pork from other states. 
                But the pork producers in other states are not investing the millions it would take to satisfy 
                California’s arbitrary rules, which its voters agreed to in 2018. 
                </p>
            </article>
  		<footer><h1>Footer</h1></footer>
      </div>
    	<aside>Left Side Bar</aside>
    </div>
  </div>
      </div>
    );
  }
}

export default home;