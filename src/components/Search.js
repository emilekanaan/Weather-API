import React, { Component } from "react";



class Search extends Component {
    

    render() {
        return (
            <>
            <header>
                <form>
                    <input placeholder="Type in a city name" className="cityInput" />
                    <button>FIND WEATHER</button>
                </form>
            </header>
            </>
        )
    }
}

export default Search;