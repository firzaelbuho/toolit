"use client"
import { useState } from "react";
import MusicPlay from "./MusicPage";
import PianoPlayGround from "./PianoPlayground";
import ChordPlayGround from "./ChordPlayground";
export default function MusicTabs(){

    const [activeTab, setActiveTab] = useState(1);

    const handleTabChange = (tabNumber:number) => {
      setActiveTab(tabNumber);
    };

    return(
        <div role="tablist" className="tabs tabs-bordered">
        <input 
            type="radio" 
            name="my_tabs_1" 
            role="tab" 
            className="tab" 
            aria-label="Keyboard" 
            onChange={() => handleTabChange(1)}
            checked={activeTab === 1}
        />
        <div role="tabpanel" className="tab-content p-10">
            <PianoPlayGround/>
        </div>

        <input 
            type="radio" 
            name="my_tabs_2" 
            role="tab" 
            className="tab" 
            aria-label="Chord"   
            checked={activeTab === 2}  
            onChange={() => handleTabChange(2)} 
        />
        <div role="tabpanel" className="tab-content p-10">
            <ChordPlayGround />
        </div>

        <input type="radio" name="my_tabs_3" role="tab" className="tab" aria-label="Tab 3"    checked={activeTab === 3} onChange={() => handleTabChange(3)}/>
        <div role="tabpanel" className="tab-content p-10">Tab content 3</div>
        </div>
    )
}