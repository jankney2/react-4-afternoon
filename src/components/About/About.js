import React, { Component } from 'react';
import {Link, Switch, Route} from 'react-router-dom'
import Contact from '../Contact/Contact'

import History from '../History/History'

export default class About extends Component {
  render() {
    return (
      <div>
        <div className='subnav'>
        <Link to='/about'>
        <h3 className="subnav_links">About</h3></Link>

        <Link to='/about/history'>
        <h3 className="subnav_links">History</h3>
        </Link>

        <Link to='/about/contact'>
        <h3 className="subnav_links">Contact</h3>
        </Link>
        
        </div>
      
      
        <div className='box'>
        <Switch >
          <Route  path='/about/contact' component= {Contact} />
          <Route  path='/about/history' component= {History} />
          <Route exact path='/about' component= {()=> {
            return(
            <div>
              <h1>About The University</h1>
              <p>biodiesel tattooed cray chia direct trade  locavore occupy Shoreditch squid Helvetica post-ironic Pinterest deep v artisan Tonx actually Brooklyn chillwave bicycle rights art party letterpress leggings retro Marfa fap PBRB 3 wolf moon flexitarian craft beer tote bag mlkshk Thundercats heirloom pug narwhal Bushwick Williamsburg mixtape Banksy food truck vinyl Godard yr sustainable Kickstarter polaroid freegan lomo cliche swag iPhone tofu fingerstache jean shorts skateboard organic ugh gastropub whatever seitan tousled banjo sriracha wayfarers 90's dreamcatcher viral fanny pack meggings XOXO hashtag put a bird on it kitsch you probably haven't heard of them Cosby sweater disrupt crucifix trust fund pork belly umami selfies keffiyeh Austin scenester next level Etsy master cleanse cardigan shabby chic lo-fi banh mi kogi paleo butcher PBR Carles sartorial ethical keytar typewriter before they sold out meh chambray authentic quinoa selvage Neutra distillery High Life Pitchfork pickled Intelligentsia hoodie twee mustache slow-carb ennui semiotics bitters church-key try-hard Odd Future fashion axe photo booth Vice pour-over Truffaut roof party Wes Anderson pop-up brunch American Apparel farm-to-table stumptown YOLO beard hella cred fixie +1 8-bit gentrify plaid McSweeney's bespoke mumblecore raw denim blog forage drinking vinegar readymade single-origin coffee aesthetic irony four loko Schlitz Tumblr messenger bag salvia VHS kale chips asymmetrical street art Echo Park normcore synth Portland literally DIY vegan cornhole gluten-free flannel Blue Bottle small batch wolf</p>



            </div>
            )
          }} />


        </Switch>
        </div>
      </div>
    )
  }
}