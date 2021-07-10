import React from 'react';
import './route-styles/About.css';

function About() {
    return (
        <div className='about'>
            <header>
                <h1>Welcome to Cheyenne. Welcome Home.</h1>
                <div className='img-and-text'>
                    <img src={require('../images/skyline.jpeg').default} alt='' className='about-img' />
                    <div>
                        <p>Cheyenne, capital (since 1869) and largest city of Wyoming, U.S., and seat of Laramie county, in the southeastern corner of the state, on Crow Creek, 49 miles (79 km) east of Laramie city; it sprawls over high prairie that slopes westward to the Laramie Mountains. Squatters arriving in 1867 just ahead of the Union Pacific Railroad named the place for the Cheyenne Indians; they were removed from the railroad’s land grant by federal troops. In the 1870s the town became an outfitting point for the Black Hills goldfields to the northeast and a major shipping point for cattle from Texas. Its own grazing lands became famed for Hereford herds and wealthy cattle barons. Peopled by gunmen, gamblers, and transients, Cheyenne developed a low reputation during the days of the Vigilantes and the war between cattlemen and sheepmen.</p>
                        <p>The city is now a trade and distribution centre for the middle Rocky Mountain region. Its major economic activities include transportation, timber, livestock interests, chemicals, plastics, health care, tourism, and governmental activities. Fort D.A. Russell (1867) became Fort Francis E. Warren in 1930 and as an Air Force base was designated (1957) as headquarters for the nation’s first Atlas intercontinental ballistic missile base. The State Capitol with its lantern-type cupola atop a 145-foot (44-metre) dome displays Western murals within. The Wyoming State Museum is nearby, as is the Historic Governor’s Mansion. The world’s largest steam engine is on display in Holliday Park. Frontier Days, featuring one of America’s oldest and largest rodeos, is a six-day celebration held each July, recalling the spirit of the Wild West and the cattle kingdom days. Among the city’s attractions are the Cheyenne Botanic Gardens, and the city is home to the Cheyenne Symphony Orchestra and Laramie County Community College (1968).</p>
                    </div>
                </div>
            </header>
            <section className='about-main'>
                <div className='red'></div>
                <h2>Explore the New Old West</h2>
                <div className='blue'></div>
                <div className='todo-grid'>
                    <div className='todo-item item-one'>
                        <h3>Industry</h3>
                        <p>Historically a bastion for oil refineries, Cheyenne is moving into biofuel to keep our city clean and free of pollution.</p>
                    </div>
                    <div className='todo-item right item-two'>
                        <h3>Restaurants</h3>
                        <p>Whether you're looking for a luxury dining experience at the Paramount Ballroom or some western comfort food at the Cowboy Cafe, Cheyenne has everything you want!</p>
                    </div>
                    <div className='todo-item item-three'>
                        <h3>Entertainment</h3>
                        <p>From the rodeo to the dancefloor to one of Cheyenne's many craft breweries or cafes, this city has something for everyone, including numerous public parks and miles of greenway for you to walk.</p>
                    </div>
                    <div className='todo-item right item-four'>
                        <h3>Frontier Days Festival</h3>
                        <p>Annual celebration of everything Cheyenne has to offer! Enjoy samplings of local food and drink, rodeo and horsemanship competitions, and retail sales. Don't forget to try the prize-winning chili!</p>
                    </div>
                    <div className='todo-item item-five'>
                        <h3>Adjacent Attractions</h3>
                        <p>Laramie, WY (50 minutes)<br/>
                            Vedauwoo National Forest (35 minutes)<br/>
                            Curt Gowdy State Park (35 minutes)<br/>
                            Fort Collins, CO (45 minutes)<br/>
                            Rocky Mountain National Park (110 minutes)<br/>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;