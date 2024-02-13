import { useState } from "react";
import React from "react";


export default function ThemeChanger(){
    const options = ["dark",
        "light",  "cupcake", "bumblebee", "emerald", "corporate", "synthwave",
        "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua",
        "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk",
        "autumn", "business", "acid", "lemonade", "night", "coffee", "winter", "dim",
        "nord", "sunset"
      ];
    const [theme, setTheme] = React.useState('dark');
    const toggleTheme = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setTheme(event.target.value);
        // alert("diklik")
    };
  // initially set the theme and "listen" for changes to apply them to the HTML tag
    React.useEffect(() => {
        const htmlElement = document.querySelector('html') as HTMLHtmlElement | null;
        htmlElement?.setAttribute('data-theme', theme);

    }, [theme]);
    return (
        <label className="swap">
            <select defaultValue={"dark"} className="select w-full max-w-xs input-primary-content" onChange={toggleTheme}>
                {/* <option disabled selected>Theme</option> */}
                
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
                {/* <option value="light">light</option> */}
               
            </select>
 
        </label>
    );
}