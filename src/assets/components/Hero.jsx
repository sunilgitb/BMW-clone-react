import React, {useState, useEffect, useRef} from "react";
import DynamicSection from "./DynamicSection";
import mainDataJSON from "../mainData.json"

const heroDOM = mainDataJSON.hero.data
/*
const heroData = [
    {   
        id: 1,
        title: "PACK A SURPIZE THIS SEASON",
        text: "The BMW Road Home Sales Event offers a credit of up to $3.250 on select BMW models - now through Janury 3rd",
        buttons: ["Offers Details", "Build Your Own"],
        slogan: [],
        isActive: true
    },
    {   
        id: 2,
        title: "EMBODY THE MAXIMUM",
        text: "THE FIRST EVER BMW XM",
        buttons: ["Learn More", "Pre-Order"],
        slogan: ["The", "Ultimate", "Driving Machine ©"],
        isActive: false
    },
    {   
        id: 3,
        title: "AS ELECTRIC AS YOU",
        text: "iX shown on left, i4 shown on the right",
        buttons: ["Explore the iX", "Explore the i4"],
        slogan: ["The Ultimate", "Electric", "Driving Machine"],
        isActive: false
    },
    {   
        id: 4,
        title: "THE M2",
        text: "DISCOVER THE 2023 BMW M2 COUPE",
        buttons: ["Build Yours", "Learn More"],
        slogan: ["The", "Ultimate", "Driving Machine ©"],
        isActive: false
    }
]
*/

export default function Hero({screenSize}) {

    const [heroState, setHeroState] = React.useState(heroDOM)
    const [activeHero, setActiveHero] = React.useState({
        id: 1,
        duration: 0,
        isPaused: false
    })

    const hero = heroState.filter(hero =>  hero.isActive)[0]

    return (
        <DynamicSection 
            screenSize={screenSize}
            sectionName="hero"
            item={hero}

            elementState={heroState}
            setElementState={setHeroState}

            activeElement={activeHero}
            setActiveElement={setActiveHero}
        />
    )
}





/*    return (    
            <div 
                key={hero.id}
                className={`hero hero__${hero.id}`}
            >
            <div className="hero__left">
                <h1 className="hero__title">{hero.title}</h1>
                <p className="hero__text">{hero.text}</p>
                <div className="hero__buttons">
                    {
                        hero.buttons.map((button, idx) => {
                            return <button key={idx}>{button}</button>
                        })
                    }
                </div>
            </div>

            {hero.slogan.length > 0 && 
                <div className="hero__right">
                {
                    hero.slogan.map((slogan, idx) => {
                        return <p key={idx} className="slogan__text">{slogan}</p>
                    })
                }
                </div>
            }

            <Selector 
                state={heroState}
                setState={setHeroState}
                active={activeHero}
                setActive={setActiveHero}
            />
        </div>
    )*/